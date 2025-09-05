import React, { useState } from "react";
import { motion } from "framer-motion";

// Using placeholder image - replace with your actual image path
const mainImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const patientStories = [
  {
    id: 1,
    title: "How Early Detection Saved My Life: A Patient's Journey with Pneumonia",
    preview: "I never thought a simple cough could change my life. It started with what felt like a regular seasonal cold — a bit of fatigue, a mild fever, and shortness of breath...",
    content: `I never thought a simple cough could change my life. It started with what felt like a regular seasonal cold — a bit of fatigue, a mild fever, and shortness of breath. Like most people, I brushed it off, assuming it was the flu. But within just a few days, my symptoms worsened. Breathing became difficult, and I felt like I was drowning with every breath I took.

At the insistence of my family, I decided to get checked immediately. Thankfully, the clinic I visited had adopted AI-powered pneumonia detection tools. Within minutes of uploading my chest X-ray, the system flagged early signs of pneumonia. The doctor confirmed the results and started me on antibiotics and supportive treatment right away.

That early detection made all the difference. My lungs hadn't yet reached a critical stage, and with timely medication, I recovered within weeks instead of months.

Looking back, I realize how easily I could have ignored the signs, dismissing them as "just another flu." Today, I'm grateful for technology and awareness campaigns that emphasize early detection. Pneumonia is deadly if ignored, but with timely action, it doesn't have to be.`,
    profileImage: mainImage
  },
  {
    id: 2,
    title: "From Misdiagnosis to Recovery: My Battle Against Pneumonia",
    preview: "For me, pneumonia was not just a disease — it was a battle for survival. When my symptoms first appeared, they were vague: fever, fatigue, chest tightness...",
    content: `For me, pneumonia was not just a disease — it was a battle for survival. When my symptoms first appeared, they were vague: fever, fatigue, chest tightness. I went to a local clinic where I was told it was "just bronchitis." I was prescribed cough syrup and sent home. Days passed, but instead of getting better, I felt worse. My fever spiked, my breathing grew shallow, and I was constantly gasping for air.

It was only after visiting a larger hospital that a chest X-ray revealed I had pneumonia. By then, my lungs were already severely inflamed. I was admitted immediately and spent two weeks in the hospital receiving intravenous antibiotics and oxygen therapy.

The scariest part of this journey was realizing how easily pneumonia can be overlooked or misdiagnosed. Had my condition been flagged earlier with accurate tools, I could have avoided the hospitalization and the painful recovery process.

I share my story today because I want others to understand the seriousness of pneumonia. It's not just another seasonal illness. Having reliable and precise detection tools like AI-driven analysis can prevent cases like mine. Timely, accurate diagnosis is not just about recovery — it can mean the difference between life and death.`,
    profileImage: mainImage
  },
  {
    id: 3,
    title: "A Mother's Story: Protecting Children from Pneumonia",
    preview: "No parent ever forgets the sound of their child struggling to breathe. My daughter was only four years old when she fell sick with a high fever and a persistent cough...",
    content: `No parent ever forgets the sound of their child struggling to breathe. My daughter was only four years old when she fell sick with a high fever and a persistent cough. At first, I thought it was just a viral infection that kids often pick up. But soon, she became so weak that she couldn't even get out of bed.

We rushed her to the hospital where doctors suspected pneumonia. Her chest X-ray was quickly analyzed, and the results confirmed it — she had bacterial pneumonia. As a mother, I was terrified. Pneumonia in children can escalate quickly, and I knew the risks. She was admitted immediately, given antibiotics, and monitored closely.

The next few days were the hardest of my life. Watching her hooked up to monitors and oxygen tubes broke my heart. Thankfully, because she received treatment in time, she started improving within a week. Today, she is a healthy, active child, but the experience taught me a powerful lesson.

Pneumonia doesn't discriminate, but young children are especially vulnerable. Early care, vaccinations, and timely diagnosis are essential in protecting little ones. No parent should wait until it's too late. I now advocate for awareness among other mothers — because what saved my child could save theirs too.`,
    profileImage: mainImage
  }
];

const expertBlogs = [
  {
    id: 4,
    title: "The Radiologist's View: How X-rays Reveal Hidden Signs of Pneumonia",
    preview: "When a patient comes in with persistent cough, fever, and difficulty breathing, the chest X-ray often becomes the radiologist's first tool in unlocking the mystery...",
    content: `When a patient comes in with persistent cough, fever, and difficulty breathing, the chest X-ray often becomes the radiologist's first tool in unlocking the mystery. Pneumonia, unlike other respiratory conditions, leaves a distinct signature on the lungs that trained eyes can identify. On an X-ray, pneumonia typically appears as areas of opacity—whitish patches—that represent fluid-filled alveoli.

But reading these images isn't always straightforward. A simple cold or bronchitis may not show much, while COVID-19 or tuberculosis can present overlapping patterns. Radiologists look at subtle cues: the location of the opacity (lobar, interstitial, or patchy), its shape, and whether it's confined to one lung or spread across both. In some cases, X-rays alone aren't enough, so CT scans or AI-powered image analysis are used to increase accuracy.

What's most striking is how much a single chest image can tell. It not only confirms pneumonia but can hint at its severity, help guide treatment, and allow doctors to track recovery. With AI tools like deep learning-based models entering radiology labs, detection is faster, more consistent, and less prone to human error. For patients, this means fewer missed diagnoses and quicker access to life-saving treatment.`,
    profileImage: mainImage,
    author: "Dr. Sarah Chen, Radiologist"
  },
  {
    id: 5,
    title: "Pneumonia in the Elderly: Why Early Diagnosis Matters Most",
    preview: "Pneumonia can be serious at any age, but for the elderly, it often becomes life-threatening. Older adults, particularly those with pre-existing conditions...",
    content: `Pneumonia can be serious at any age, but for the elderly, it often becomes life-threatening. Older adults, particularly those with pre-existing conditions such as diabetes, heart disease, or COPD, have weaker immune systems. This makes it harder for their bodies to fight infections and easier for pneumonia to spiral into severe complications like sepsis or respiratory failure.

One of the biggest challenges doctors face is that symptoms in the elderly can be atypical. Instead of the classic cough and fever, older patients might only show confusion, fatigue, or a sudden decline in appetite. These subtle signs are often mistaken for aging-related issues, delaying diagnosis. That's why proactive screening, vaccination, and early X-ray evaluations are critical in geriatric care.

Doctors emphasize that prevention plays as important a role as treatment. Vaccines against pneumococcus and influenza can significantly lower risks. Equally, maintaining good nutrition, hydration, and physical activity helps strengthen immunity. For families, knowing that a sudden change in behavior or breathing in their elderly loved one might signal pneumonia can make all the difference. Early diagnosis doesn't just save lives—it prevents long-term lung damage and repeated hospitalizations.`,
    profileImage: mainImage,
    author: "Dr. Michael Rodriguez, Geriatric Specialist"
  },
  {
    id: 6,
    title: "Beyond Antibiotics: Modern Approaches to Treating Pneumonia",
    preview: "For decades, antibiotics have been the cornerstone of pneumonia treatment, especially for bacterial infections. But modern medicine is showing us that recovery requires much more than pills...",
    content: `For decades, antibiotics have been the cornerstone of pneumonia treatment, especially for bacterial infections. But modern medicine is showing us that recovery requires much more than pills. With antibiotic resistance on the rise, doctors are adopting a more holistic, precision-based approach to care.

Today, treatment begins with identifying the type of pneumonia—bacterial, viral, or fungal—through lab tests and imaging. Viral pneumonia, for example, doesn't respond to antibiotics, so supportive care like oxygen therapy, hydration, and antiviral drugs may be used instead. Doctors also focus on strengthening lung function through breathing exercises and pulmonary rehabilitation.

In hospital settings, innovations such as high-flow oxygen therapy and non-invasive ventilation have significantly improved survival rates. Meanwhile, AI-driven tools are assisting doctors in predicting disease progression, tailoring treatments to each patient's condition, and monitoring recovery through digital health apps.

Equally important is patient education. Doctors now emphasize lifestyle adjustments: quitting smoking, improving air quality at home, and building stronger immune defenses through diet and vaccination. Pneumonia care has moved from being purely reactive to proactive and preventive, ensuring that patients not only survive but recover with long-term lung health intact.`,
    profileImage: mainImage,
    author: "Dr. Emily Thompson, Pulmonologist"
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center flex flex-col items-center pt-28 pb-20"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <h1 className="text-white text-5xl font-bold mb-4">Pneumonia Blogs</h1>
      
      {/* Patient Stories Section */}
      <h2 className="text-white text-3xl mb-10" style={{ fontFamily: 'Georgia, serif' }}>
        🧑‍🤝‍🧑 Patient Stories
      </h2>

      {/* Patient Story Cards */}
      <div className="w-10/12 flex flex-col gap-10 mb-20">
        {patientStories.map((story, index) => (
          <motion.div
            key={story.id}
            className="bg-white/20 backdrop-blur-lg shadow-xl rounded-lg p-8 text-white flex gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={story.profileImage} 
                alt="Patient profile" 
                className="w-20 h-20 rounded-full object-cover border-2 border-white/50"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
              <p className="text-lg mb-6 leading-relaxed">{story.preview}</p>
              <button
                onClick={() => setSelectedBlog(story)}
                className="border border-white text-black px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition"
              >
                Read Full Story
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expert Blogs Section */}
      <h2 className="text-white text-3xl mb-10" style={{ fontFamily: 'Georgia, serif' }}>
        👨‍⚕️ Expert Blogs
      </h2>

      {/* Expert Blog Cards */}
      <div className="w-10/12 flex flex-col gap-10">
        {expertBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-white/20 backdrop-blur-lg shadow-xl rounded-lg p-8 text-white flex gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={blog.profileImage} 
                alt="Expert profile" 
                className="w-20 h-20 rounded-full object-cover border-2 border-white/50"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-blue-200 mb-4 font-medium">{blog.author}</p>
              <p className="text-lg mb-6 leading-relaxed">{blog.preview}</p>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="border border-white text-black px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition"
              >
                Read Full Article
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <motion.div
            className="bg-white/95 backdrop-blur-md p-10 rounded-lg shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 text-gray-900 relative max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Profile and Title */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedBlog.profileImage} 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold">{selectedBlog.title}</h2>
                {selectedBlog.author && (
                  <p className="text-blue-600 font-medium mt-1">{selectedBlog.author}</p>
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className="text-lg leading-relaxed whitespace-pre-line">
              {selectedBlog.content}
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-6 text-gray-700 hover:text-black text-2xl font-bold"
            >
              ✖
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;