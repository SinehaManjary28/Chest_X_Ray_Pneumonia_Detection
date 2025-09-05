// src/ChatBot.jsx
import React, { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [answers, setAnswers] = useState({});

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep(0);
      setName("");
      setGender("");
      setAge("");
      setAnswers({});
    }
  };

  const handleAnswer = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    setStep(step + 1);
  };

  const getResult = () => {
    const symptoms = answers;
    const userAge = parseInt(age);
    const severityScore = calculateSeverityScore(symptoms);
    
    // Age-specific risk assessment
    if (userAge < 12) {
      if (severityScore >= 4) {
        return `Hi ${name}, you have several concerning symptoms. Since you are a child, pneumonia can be very serious. Please see a doctor IMMEDIATELY! 🚨👩‍⚕️`;
      } else if (severityScore >= 2) {
        return `Hi ${name}, since you are a child, even mild symptoms need attention. Please consult a pediatrician soon. 👩‍⚕️`;
      } else {
        return `Hi ${name}, your symptoms seem mild, but children should always be checked by a doctor when feeling unwell. 🩺`;
      }
    } else if (userAge > 60) {
      if (severityScore >= 4) {
        return `Hi ${name}, you have several serious symptoms. Elderly patients are at higher risk for complications. Please seek IMMEDIATE medical attention! 🚨🏥`;
      } else if (severityScore >= 2) {
        return `Hi ${name}, elderly patients should take respiratory symptoms seriously. Please see a doctor promptly. 🏥`;
      } else {
        return `Hi ${name}, while your symptoms seem mild, it's important for elderly patients to monitor respiratory symptoms closely. Consider consulting your doctor. 🩺`;
      }
    } else {
      // Adults (12-60)
      if (severityScore >= 5) {
        return `Hi ${name}, you have multiple concerning symptoms that could indicate pneumonia or another serious respiratory condition. Please seek IMMEDIATE medical attention! 🚨🏥`;
      } else if (severityScore >= 3) {
        return `Hi ${name}, your symptoms suggest you should see a doctor soon. These could be signs of a respiratory infection that needs treatment. 🩺`;
      } else if (severityScore >= 1) {
        return `Hi ${name}, you have some mild symptoms. Monitor yourself closely and consider seeing a doctor if symptoms worsen or persist. 💊`;
      } else {
        return `Hi ${name}, your symptoms appear very mild. Rest well, stay hydrated, and see a doctor if you feel worse. 😊`;
      }
    }
  };

  const calculateSeverityScore = (symptoms) => {
    let score = 0;
    
    // High severity symptoms (2 points each)
    if (symptoms.breathing === "Yes") score += 2;
    if (symptoms.chestPain === "Yes") score += 2;
    if (symptoms.highFever === "Yes") score += 2;
    
    // Medium severity symptoms (1 point each)
    if (symptoms.cough === "Yes") score += 1;
    if (symptoms.fever === "Yes") score += 1;
    if (symptoms.fatigue === "Yes") score += 1;
    if (symptoms.phlegm === "Yes") score += 1;
    if (symptoms.appetite === "Yes") score += 1;
    
    return score;
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 rounded-full shadow-xl hover:scale-110 transition text-white text-2xl"
        >
          🤖
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden border border-white/20 text-white">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-xl">
            <h3 className="font-semibold text-white">Health Bot 🤖</h3>
            <button
              onClick={toggleChat}
              className="px-3 py-1 rounded-lg bg-red-500 font-bold hover:bg-red-600 transition-colors text-white"
            >
              ✕
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {/* Previous messages display */}
            {step > 0 && (
              <div className="space-y-2 text-sm opacity-80">
                <div className="p-2 rounded-lg bg-black/20">
                  <span className="font-medium">You:</span> {name}
                </div>
                {step > 1 && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">You:</span> {gender}
                  </div>
                )}
                {step > 2 && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">You:</span> {age} years old
                  </div>
                )}
                {step > 3 && answers.cough && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Cough:</span> {answers.cough}
                  </div>
                )}
                {step > 4 && answers.fever && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Fever:</span> {answers.fever}
                  </div>
                )}
                {step > 5 && answers.highFever && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">High fever:</span> {answers.highFever}
                  </div>
                )}
                {step > 6 && answers.breathing && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Breathing difficulty:</span> {answers.breathing}
                  </div>
                )}
                {step > 7 && answers.chestPain && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Chest pain:</span> {answers.chestPain}
                  </div>
                )}
                {step > 8 && answers.phlegm && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Phlegm/mucus:</span> {answers.phlegm}
                  </div>
                )}
                {step > 9 && answers.fatigue && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Fatigue:</span> {answers.fatigue}
                  </div>
                )}
                {step > 10 && answers.chills && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Chills:</span> {answers.chills}
                  </div>
                )}
                {step > 11 && answers.appetite && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Loss of appetite:</span> {answers.appetite}
                  </div>
                )}
                {step > 12 && answers.headache && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Headache:</span> {answers.headache}
                  </div>
                )}
                {step > 13 && answers.sweating && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Excessive sweating:</span> {answers.sweating}
                  </div>
                )}
                {step > 14 && answers.nausea && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Nausea/vomiting:</span> {answers.nausea}
                  </div>
                )}
                {step > 15 && answers.muscleAches && (
                  <div className="p-2 rounded-lg bg-black/20">
                    <span className="font-medium">Muscle aches:</span> {answers.muscleAches}
                  </div>
                )}
              </div>
            )}

            {/* Current Question */}
            <div className="border-t border-white/20 pt-4">
              {/* Step 0 - Name */}
              {step === 0 && (
                <div>
                  <p className="mb-2 font-medium">Hi 🤖! What's your name?</p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-black/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    onClick={() => name && setStep(1)}
                    className="mt-3 w-full px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 1 - Gender */}
              {step === 1 && (
                <div>
                  <p className="mb-2 font-medium">Nice to meet you, {name}! Are you male or female?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setGender("Male");
                        setStep(2);
                      }}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Male
                    </button>
                    <button
                      onClick={() => {
                        setGender("Female");
                        setStep(2);
                      }}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Female
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 - Age */}
              {step === 2 && (
                <div>
                  <p className="mb-2 font-medium">How old are you, {name}?</p>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-black/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    onClick={() => age && setStep(3)}
                    className="mt-3 w-full px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 3 - Cough */}
              {step === 3 && (
                <div>
                  <p className="mb-2 font-medium">Do you have a cough?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("cough", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("cough", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4 - Fever */}
              {step === 4 && (
                <div>
                  <p className="mb-2 font-medium">Do you have a fever?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("fever", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("fever", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5 - High Fever */}
              {step === 5 && (
                <div>
                  <p className="mb-2 font-medium">Is your fever high (above 101°F/38.3°C)?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("highFever", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("highFever", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 6 - Difficulty Breathing */}
              {step === 6 && (
                <div>
                  <p className="mb-2 font-medium">Are you having difficulty breathing or shortness of breath?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("breathing", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("breathing", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 7 - Chest Pain */}
              {step === 7 && (
                <div>
                  <p className="mb-2 font-medium">Do you have chest pain, especially when breathing deeply?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("chestPain", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("chestPain", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 8 - Phlegm/Mucus */}
              {step === 8 && (
                <div>
                  <p className="mb-2 font-medium">Are you coughing up phlegm or mucus?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("phlegm", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("phlegm", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 9 - Fatigue */}
              {step === 9 && (
                <div>
                  <p className="mb-2 font-medium">Are you feeling unusually tired or weak?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("fatigue", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("fatigue", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 10 - Chills */}
              {step === 10 && (
                <div>
                  <p className="mb-2 font-medium">Do you have chills or shivering?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("chills", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("chills", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 11 - Appetite Loss */}
              {step === 11 && (
                <div>
                  <p className="mb-2 font-medium">Have you lost your appetite?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("appetite", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("appetite", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 12 - Headache */}
              {step === 12 && (
                <div>
                  <p className="mb-2 font-medium">Do you have a headache?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("headache", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("headache", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 13 - Sweating */}
              {step === 13 && (
                <div>
                  <p className="mb-2 font-medium">Are you sweating more than usual?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("sweating", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("sweating", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 14 - Nausea */}
              {step === 14 && (
                <div>
                  <p className="mb-2 font-medium">Do you feel nauseous or have you been vomiting?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("nausea", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("nausea", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Step 15 - Muscle Aches */}
              {step === 15 && (
                <div>
                  <p className="mb-2 font-medium">Do you have muscle aches or body pain?</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAnswer("muscleAches", "Yes")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("muscleAches", "No")}
                      className="flex-1 px-4 py-2 rounded-lg bg-cyan-600 font-medium hover:bg-cyan-700 text-white transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Final Step - Result */}
              {step >= 16 && (
                <div>
                  <p className="p-3 rounded-lg bg-black/30 leading-relaxed">{getResult()}</p>
                  <div className="mt-3 p-2 rounded-lg bg-yellow-500/20 text-sm">
                    <p className="font-medium">⚠️ Disclaimer:</p>
                    <p>This is not a medical diagnosis. Always consult a healthcare professional for proper medical advice.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;