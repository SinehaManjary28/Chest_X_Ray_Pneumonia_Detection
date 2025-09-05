# backend/model_loader.py
import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

# allow the unsafe deserialization if your .keras model needs it
tf.keras.config.enable_unsafe_deserialization()

# PatchEncoder (same as training)
class PatchEncoder(layers.Layer):
    def __init__(self, num_patches, projection_dim):
        super().__init__()
        self.num_patches = num_patches
        self.projection = layers.Dense(projection_dim)
        self.position_embedding = layers.Embedding(input_dim=num_patches, output_dim=projection_dim)

    def call(self, patch):
        positions = tf.range(start=0, limit=self.num_patches, delta=1)
        encoded = self.projection(patch) + self.position_embedding(positions)
        return encoded

def extract_patches(images, patch_size=32):
    batch_size = tf.shape(images)[0]
    patches = tf.image.extract_patches(
        images=images,
        sizes=[1, patch_size, patch_size, 1],
        strides=[1, patch_size, patch_size, 1],
        rates=[1, 1, 1, 1],
        padding='VALID'
    )
    patch_dims = patches.shape[-1]
    patches = tf.reshape(patches, [batch_size, -1, patch_dims])
    return patches

def mlp(x, hidden_units, dropout_rate):
    for units in hidden_units:
        x = layers.Dense(units, activation='gelu')(x)
        x = layers.Dropout(dropout_rate)(x)
    return x

def build_vit_classifier():
    input_shape = (224, 224, 3)
    patch_size = 32
    num_patches = (input_shape[0] // patch_size) ** 2
    projection_dim = 32
    num_heads = 2
    transformer_units = [projection_dim * 2, projection_dim]
    transformer_layers = 4
    mlp_head_units = [128, 64]

    inputs = layers.Input(shape=input_shape)
    patches = layers.Lambda(lambda x: extract_patches(x, patch_size))(inputs)
    encoded_patches = PatchEncoder(num_patches, projection_dim)(patches)

    for _ in range(transformer_layers):
        x1 = layers.LayerNormalization(epsilon=1e-6)(encoded_patches)
        attention_output = layers.MultiHeadAttention(
            num_heads=num_heads,
            key_dim=projection_dim,
            dropout=0.1
        )(x1, x1)
        x2 = layers.Add()([attention_output, encoded_patches])
        x3 = layers.LayerNormalization(epsilon=1e-6)(x2)
        x3 = mlp(x3, hidden_units=transformer_units, dropout_rate=0.1)
        encoded_patches = layers.Add()([x3, x2])

    representation = layers.LayerNormalization(epsilon=1e-6)(encoded_patches)
    representation = layers.Flatten()(representation)
    representation = layers.Dropout(0.5)(representation)
    features = mlp(representation, hidden_units=mlp_head_units, dropout_rate=0.5)
    logits = layers.Dense(1, activation='sigmoid')(features)

    model = models.Model(inputs=inputs, outputs=logits)
    return model

def load_model_weights(model_path):
    """
    Build architecture and load weights from saved .keras
    """
    try:
        model = build_vit_classifier()
        # First try to load the full model - may fail if custom layers differ
        try:
            saved = tf.keras.models.load_model(model_path, safe_mode=False)
            model.set_weights(saved.get_weights())
            print("Loaded weights from full model.")
            return model
        except Exception as e_full:
            print("Full model load failed, trying load_weights():", e_full)
            # Try load_weights (works if model_path points to checkpoint or weights)
            model.load_weights(model_path)
            print("Loaded weights via load_weights().")
            return model
    except Exception as e:
        print("Error building/loading model:", e)
        return None
