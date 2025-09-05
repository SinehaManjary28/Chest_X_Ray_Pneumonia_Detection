# backend/utils.py
from PIL import Image
import numpy as np

def preprocess_image_pil(image_path, target_size=(224,224)):
    """
    Load image with PIL, convert to RGB, resize and normalize to [0,1].
    Returns numpy array shape (1,224,224,3).
    """
    image = Image.open(image_path)
    if image.mode != 'RGB':
        image = image.convert('RGB')
    image = image.resize(target_size)
    arr = np.array(image).astype('float32') / 255.0
    arr = np.expand_dims(arr, axis=0)
    return arr
