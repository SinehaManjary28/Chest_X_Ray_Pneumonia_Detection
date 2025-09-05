import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainImage from "./assets/images/main_image.jpg";
import ChatBot from "./Chatbot";
// Import your feature story images here
import pneumoniaImage1 from "./assets/images/Feature1.png";
import pneumoniaImage2 from "./assets/images/Feature2.png";
import pneumoniaImage3 from "./assets/images/Feature3.png";
import pneumoniaImage4 from "./assets/images/Feature4.png";
import pneumoniaImage5 from "./assets/images/Feature5.png";
import pneumoniaImage6 from "./assets/images/Feature6.png";

const Home = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState(null);

  const handleGetStarted = () => {
    navigate('/detect');
  };

  const openStoryModal = (story) => {
    setSelectedStory(story);
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  const featuredStories = [
    {
      id: 1,
      title: "Global Burden of Pneumonia: Understanding the Silent Killer",
      description: "Pneumonia remains one of the world's most serious health threats, yet it is often underestimated compared to other infectious diseases. According to the World Health Organization (WHO), pneumonia is responsible for approximately 2.5 million deaths each year...",
      fullContent: `Pneumonia remains one of the world's most serious health threats, yet it is often underestimated compared to other infectious diseases. According to the World Health Organization (WHO), pneumonia is responsible for approximately 2.5 million deaths each year, making it the single largest infectious cause of death worldwide. What makes pneumonia particularly dangerous is its widespread impact across all age groups, though children under five and adults over sixty-five face the highest risks.

The burden of pneumonia is especially severe in low- and middle-income countries, where access to healthcare, diagnostic tools, and preventive vaccines may be limited. For example, Sub-Saharan Africa and South Asia account for the majority of childhood pneumonia cases and deaths. However, pneumonia is not restricted to developing nations; it continues to pose a significant challenge even in high-income countries due to the rise of antibiotic resistance and complications from chronic illnesses.

The economic burden is also considerable. Hospitalizations, prolonged treatment, and long-term lung complications lead to significant healthcare costs and lost productivity. The COVID-19 pandemic highlighted how fragile the respiratory system can be, drawing renewed attention to pneumonia as a critical global health issue.

Raising awareness, promoting vaccination, improving access to diagnostic technologies such as X-rays and AI-assisted tools, and strengthening healthcare systems are vital steps toward reducing the global burden of pneumonia. Recognizing it as a silent killer reminds us that prevention and early detection can save millions of lives.`,
      image: pneumoniaImage1,
      alt: "Global pneumonia awareness illustration"
    },
    {
      id: 2,
      title: "Decoding Pneumonia: How It Affects the Lungs",
      description: "Pneumonia is not just a 'bad cough' — it is an infection of the lungs that disrupts one of the body's most essential functions: oxygen exchange. The lungs are made up of tiny air sacs called alveoli...",
      fullContent: `Pneumonia is not just a "bad cough" — it is an infection of the lungs that disrupts one of the body's most essential functions: oxygen exchange. The lungs are made up of tiny air sacs called alveoli, where oxygen enters the blood and carbon dioxide is expelled. In pneumonia, these alveoli become inflamed and filled with fluid or pus, making it difficult for oxygen to pass into the bloodstream.

This blockage results in common symptoms such as shortness of breath, chest pain, fever, and persistent coughing. But what truly makes pneumonia dangerous is the reduction in oxygen levels, which can place enormous stress on vital organs like the heart and brain. In severe cases, untreated pneumonia can lead to sepsis, respiratory failure, or even death.

Pneumonia can be caused by bacteria, viruses, or fungi. Bacterial pneumonia (often from Streptococcus pneumoniae) tends to be more severe and requires antibiotic treatment. Viral pneumonia, such as that caused by influenza or coronaviruses, is also common and may lead to secondary bacterial infections. Fungal pneumonia, though rarer, typically affects people with weakened immune systems.

Understanding how pneumonia affects the lungs is key to recognizing its seriousness. Visualizing chest X-rays or CT scans, which often reveal cloudy or patchy areas, helps explain how the infection obstructs normal breathing. With modern AI tools, radiologists can now analyze chest images quickly and accurately, aiding in faster diagnosis.`,
      image: pneumoniaImage2,
      alt: "Lung anatomy and pneumonia effects"
    },
    {
      id: 3,
      title: "Children and Pneumonia: Why Young Lungs Are at Greater Risk",
      description: "Children, particularly those under the age of five, are among the most vulnerable populations when it comes to pneumonia. According to UNICEF, pneumonia is the leading cause of death among children worldwide...",
      fullContent: `Children, particularly those under the age of five, are among the most vulnerable populations when it comes to pneumonia. According to UNICEF, pneumonia is the leading cause of death among children worldwide, claiming the lives of more than 700,000 children each year.

Why are children at greater risk? Their immune systems are still developing, making it harder for their bodies to fight off infections. Their airways are smaller and more easily blocked by inflammation or mucus. Malnutrition, lack of breastfeeding, exposure to indoor air pollution, and limited access to vaccines all further increase their vulnerability.

Preventing pneumonia in children requires a multi-pronged approach. Vaccination is the most effective method — pneumococcal conjugate vaccines (PCV), Haemophilus influenzae type b (Hib) vaccines, and annual flu shots significantly reduce childhood pneumonia cases. Ensuring proper nutrition, particularly vitamin A and zinc, strengthens immunity. Simple interventions like handwashing, avoiding indoor smoke, and timely medical consultation can also save lives.

Pediatric care is especially critical because children often cannot fully express the severity of their symptoms. A child's rapid breathing, wheezing, or refusal to feed may be early indicators of pneumonia. By focusing on awareness and prevention, parents, caregivers, and healthcare providers can protect young lungs and ensure healthier futures.`,
      image: pneumoniaImage3,
      alt: "Child health and pneumonia prevention"
    },
    {
      id: 4,
      title: "Pneumonia vs. Other Respiratory Illnesses: Spotting the Differences",
      description: "Respiratory illnesses often share overlapping symptoms — cough, fever, shortness of breath — which can make it difficult for patients to differentiate between conditions such as pneumonia, flu, bronchitis, or COVID-19...",
      fullContent: `Respiratory illnesses often share overlapping symptoms — cough, fever, shortness of breath — which can make it difficult for patients to differentiate between conditions such as pneumonia, flu, bronchitis, or COVID-19. However, understanding their key differences is crucial for proper treatment.

Pneumonia: Involves infection of the lungs where alveoli fill with fluid. Symptoms include chest pain, persistent cough with mucus, and difficulty breathing. Often confirmed through chest X-ray.

Flu (Influenza): Primarily a viral infection that causes body aches, fever, sore throat, and fatigue. Can sometimes lead to pneumonia as a complication.

Bronchitis: Involves inflammation of the bronchial tubes, causing cough and mucus production, but usually less severe than pneumonia.

COVID-19: A viral illness with symptoms ranging from mild cough and fever to severe pneumonia-like lung infection in critical cases.

While self-diagnosis is risky, patients should seek immediate care if they notice symptoms worsening or lasting longer than a week. Diagnostic tools such as chest imaging and blood tests play a vital role in distinguishing pneumonia from other conditions.

Educating the public on these differences empowers individuals to seek medical help early, preventing complications and ensuring proper treatment.`,
      image: pneumoniaImage4,
      alt: "Comparison of respiratory illnesses"
    },
    {
      id: 5,
      title: "The Power of Early Detection: How Timely Diagnosis Saves Lives",
      description: "One of the most important factors in pneumonia management is early detection. The earlier pneumonia is diagnosed, the higher the chances of successful treatment and full recovery...",
      fullContent: `One of the most important factors in pneumonia management is early detection. The earlier pneumonia is diagnosed, the higher the chances of successful treatment and full recovery. Research shows that early diagnosis can improve recovery rates by over 80%.

Delays in diagnosis often result in pneumonia spreading within the lungs or worsening into life-threatening complications such as sepsis. Early intervention, however, ensures that the right antibiotics, antivirals, or antifungals are administered before the infection progresses.

Chest X-rays remain the gold standard for diagnosis, but in recent years, AI-powered detection tools have emerged as game-changers. By analyzing chest radiographs within seconds, these tools support radiologists and physicians in making faster and more accurate decisions. This is especially important in regions with limited access to specialized doctors.

Early detection not only saves lives but also reduces the economic burden of prolonged hospitalizations. Patients recover faster, experience fewer complications, and require less intensive care. The message is simple: pneumonia is treatable, but only if it is caught early.`,
      image: pneumoniaImage5,
      alt: "Early detection and diagnosis tools"
    },
    {
      id: 6,
      title: "From Treatment to Recovery: Managing Pneumonia and Protecting Long-Term Lung Health",
      description: "Recovering from pneumonia is not always as simple as completing a round of antibiotics. While many patients recover fully within weeks, others face prolonged symptoms such as fatigue, shortness of breath, or chronic cough...",
      fullContent: `Recovering from pneumonia is not always as simple as completing a round of antibiotics. While many patients recover fully within weeks, others face prolonged symptoms such as fatigue, shortness of breath, or chronic cough. In severe cases, pneumonia may leave long-term damage to lung tissues, reducing overall lung capacity.

Treatment approaches vary depending on whether pneumonia is bacterial, viral, or fungal. Antibiotics, antivirals, and antifungal medications form the cornerstone of therapy. Supportive care, including oxygen therapy, rest, hydration, and proper nutrition, is equally important.

Recovery doesn't end when the infection clears. Pulmonary rehabilitation, breathing exercises, and avoiding risk factors like smoking or polluted environments are crucial to restoring lung strength. Patients with pre-existing conditions such as asthma or COPD require additional care, as pneumonia can exacerbate their illnesses.

A strong emphasis on follow-up care helps identify any lingering effects. Doctors often recommend repeat chest X-rays or lung function tests to ensure complete recovery.

In the long run, vaccination, healthy lifestyle habits, and awareness play the biggest role in reducing recurrence. Protecting lung health after pneumonia is about more than just recovery — it's about building resilience against future infections.`,
      image: pneumoniaImage6,
      alt: "Pneumonia treatment and recovery process"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="w-11/12 h-[600px] mx-auto text-center text-white px-12 py-16 bg-white/10 backdrop-blur-sm border-2 border-white shadow-2xl rounded-lg flex flex-col justify-center">
          <h1 className="text-[80px] font-bold mb-6">Detect Pneumonia Early</h1>
          <p className="text-2xl mb-8">
            Comprehensive pneumonia detection and health resources online
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-gray-800 px-8 py-3 text-lg rounded hover:bg-gray-100 transition mx-auto font-medium"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Awareness Banner Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F0FBFF]/60 backdrop-blur-xl border border-[#37474F]/40 rounded-3xl p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Why Early Detection Matters
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Every minute counts when it comes to pneumonia. Detecting it early saves lives and ensures faster recovery.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-3">2.5M</div>
                    <div className="text-gray-700 font-semibold mb-3 text-lg">Deaths Each Year</div>
                    <div className="text-sm text-gray-500 leading-relaxed">
                      Pneumonia remains the leading infectious cause of death worldwide
                    </div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-3">80%+</div>
                    <div className="text-gray-700 font-semibold mb-3 text-lg">Recovery Improvement</div>
                    <div className="text-sm text-gray-500 leading-relaxed">
                      Acting fast means more successful treatment and fewer complications
                    </div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-3">High Risk</div>
                    <div className="text-gray-700 font-semibold mb-3 text-lg">Children & Elderly</div>
                    <div className="text-sm text-gray-500 leading-relaxed">
                      Timely medical care can drastically reduce fatalities in vulnerable groups
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-blue-50 border-2 border-blue-200 rounded-full px-10 py-4 shadow-sm">
                  <span className="text-gray-700 font-semibold text-lg">
                    Be aware. Get checked. Save lives.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stories Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-left">
            FEATURED STORIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {story.description}
                  </p>
                  <button
                    onClick={() => openStoryModal(story)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 text-sm font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-blue-100 relative">
            {/* Decorative medical elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-10 -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-100 rounded-full opacity-15 translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 right-10 w-6 h-6 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-200 rounded-full opacity-25"></div>
            
            {/* Header - Fixed */}
            <div className="relative z-10 p-6 border-b border-blue-100 bg-white/70 backdrop-blur-sm flex justify-between items-start">
              <h2 className="text-3xl font-bold text-gray-800 pr-8 leading-tight">
                {selectedStory.title}
              </h2>
              <button
                onClick={closeStoryModal}
                className="text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none bg-white/50 hover:bg-white/80 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 flex-shrink-0"
              >
                ×
              </button>
            </div>
            
            {/* Scrollable content area - includes image and text */}
            <div className="overflow-y-auto max-h-[75vh] relative z-10">
              {/* Story Image */}
              <div className="p-6 pb-0">
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 to-cyan-100">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="prose max-w-none">
                  {selectedStory.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Medical-themed bottom decoration */}
                <div className="mt-8 pt-6 border-t border-blue-100 text-center">
                  <div className="inline-flex items-center justify-center bg-blue-50 border border-blue-200 rounded-full px-6 py-2 text-sm text-blue-700 font-medium">
                    <span className="mr-2">🫁</span>
                    Early Detection Saves Lives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ChatBot floating in bottom-right */}
      <ChatBot />
    </div>
  );
};

export default Home;