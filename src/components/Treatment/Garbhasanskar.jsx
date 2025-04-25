import React from 'react';
import useAppointmentForm from "../../hook/useAppointmentForm";
import Book_Appointment from "../Appointment/Book_Appointment";

const Garbhasanskar = () => {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  return (
    <div>
      <div className="min-h-screen bg-white py-12 relative">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#394E29] mb-8">Garbh Sanskar – Holistic Care for Women's Health and Wellness</h1>
          
          <p className="text-gray-700 mb-8 text-lg">
            Garbh Sanskar, derived from ancient Ayurvedic principles, is a holistic approach to pregnancy and childbirth that emphasizes the importance of mental, physical, and emotional well-being for both the mother and the developing fetus. This practice focuses on creating a nurturing environment that fosters the healthy growth of the baby and enhances the mother's overall health during pregnancy.
          </p>
          
          <p className="text-gray-700 mb-8 text-lg">
            The term "Garbh" refers to the fetus, while "Sanskar" translates to the process of nurturing or shaping. Together, they signify the profound impact of maternal care on the unborn child's development.
          </p>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Understanding Garbh Sanskar</h2>
          
          <p className="text-gray-700 mb-4 text-lg">
            In Ayurveda, the period of pregnancy is considered a sacred time, and Garbh Sanskar encompasses a range of practices aimed at promoting the physical and emotional health of both mother and child. It is believed that the experiences and emotions of the mother during pregnancy can significantly influence the baby's personality, health, and future well-being.
          </p>
          
          <p className="text-gray-700 mb-8 text-lg">
            Therefore, Garbh Sanskar emphasizes a holistic approach, focusing on the following aspects:
          </p>
          
          <h3 className="text-xl font-bold text-[#394E29] mb-4">1. Nutrition</h3>
          
          <p className="text-gray-700 mb-4 text-lg">
            Proper nutrition is crucial during pregnancy. Ayurvedic principles recommend a balanced diet rich in essential nutrients to support the mother's health and the baby's development. Foods that are nourishing, warm, and easy to digest are encouraged. Important nutrients include:
          </p>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li><span className="font-semibold">Fruits and Vegetables:</span> Fresh, seasonal produce provides vitamins and minerals essential for fetal growth.</li>
            <li><span className="font-semibold">Whole Grains:</span> Foods like rice, quinoa, and oats are excellent sources of energy and nourishment.</li>
            <li><span className="font-semibold">Healthy Fats:</span> Ghee and nuts are recommended for their beneficial effects on brain development.</li>
            <li><span className="font-semibold">Herbs and Spices:</span> Turmeric, ginger, and cumin can help in digestion and strengthen the immune system.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-[#394E29] mb-4">2. Mental Well-being</h3>
          
          <p className="text-gray-700 mb-4 text-lg">
            Emotional health is equally important in Garbh Sanskar. Stress and anxiety can negatively affect both the mother and the unborn child. Ayurvedic practices recommend:
          </p>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li><span className="font-semibold">Meditation and Mindfulness:</span> Regular meditation helps reduce stress, enhances emotional well-being, and fosters a positive mindset.</li>
            <li><span className="font-semibold">Positive Affirmations:</span> Reciting affirmations and mantras can create a harmonious atmosphere and strengthen the bond between mother and child.</li>
            <li><span className="font-semibold">Soothing Music:</span> Listening to calming music can help relax the mother and promote a peaceful environment for the baby.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-[#394E29] mb-4">3. Physical Activity</h3>
          
          <p className="text-gray-700 mb-8 text-lg">
            Gentle exercise is encouraged to maintain physical health and improve circulation. Yoga, in particular, is beneficial during pregnancy, as it enhances flexibility, strengthens muscles, and promotes relaxation. Specific yoga poses designed for pregnant women can help alleviate common discomforts associated with pregnancy, such as back pain and swelling.
          </p>
          
          <h3 className="text-xl font-bold text-[#394E29] mb-4">4. Connection with Nature</h3>
          
          <p className="text-gray-700 mb-8 text-lg">
            Ayurveda emphasizes the importance of nature in nurturing both physical and mental health. Spending time outdoors, practicing grounding techniques, and connecting with the earth can help the mother feel more centered and balanced.
          </p>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Practices of Garbh Sanskar</h2>
          
          <p className="text-gray-700 mb-4 text-lg">
            The practices of Garbh Sanskar are rooted in tradition and are meant to be incorporated into daily life during pregnancy:
          </p>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li><span className="font-semibold">Pranayama (Breathing Exercises):</span> Deep breathing exercises can help calm the mind and prepare the body for childbirth.</li>
            <li><span className="font-semibold">Listening to Educational Content:</span> Engaging with informative resources about childbirth, parenting, and child development can empower the mother.</li>
            <li><span className="font-semibold">Creating a Positive Environment:</span> Surrounding oneself with supportive people and positive influences contributes to a nurturing atmosphere.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">The Role of Family in Garbh Sanskar</h2>
          
          <p className="text-gray-700 mb-8 text-lg">
            Garbh Sanskar is not solely the responsibility of the mother; the family plays a crucial role. Support from partners, family members, and friends can create a nurturing environment. Encouraging the mother, providing emotional support, and participating in healthy activities together can enhance the overall experience of pregnancy.
          </p>
          
          <div className="bg-[#F3FFEA] p-5 rounded mb-8 border-l-4 border-[#5FA02E]">
            <p className="text-[#394E29] font-medium text-lg">
              "Garbh Sanskar is a beautiful journey that nurtures both the mother and the unborn child, creating a foundation for lifelong health and well-being."
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Benefits of Garbh Sanskar</h2>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li><span className="font-semibold">Enhanced Maternal Health:</span> Improves the mother's physical and emotional well-being during pregnancy.</li>
            <li><span className="font-semibold">Optimal Fetal Development:</span> Supports healthy growth and development of the baby in the womb.</li>
            <li><span className="font-semibold">Reduced Pregnancy Complications:</span> Helps minimize common pregnancy-related issues through proper diet and lifestyle.</li>
            <li><span className="font-semibold">Emotional Bonding:</span> Strengthens the connection between mother and baby, even before birth.</li>
            <li><span className="font-semibold">Positive Birth Experience:</span> Prepares the mother for a more natural and less stressful childbirth.</li>
            <li><span className="font-semibold">Long-term Benefits for the Child:</span> Creates a foundation for the child's future health, intelligence, and personality.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Why Choose Agni Ayurved Hospital for Garbh Sanskar?</h2>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li>Expert guidance from experienced Ayurvedic practitioners specializing in prenatal care.</li>
            <li>Personalized Garbh Sanskar programs tailored to your unique constitution and needs.</li>
            <li>Comprehensive approach addressing physical, mental, and spiritual aspects of pregnancy.</li>
            <li>Safe and nurturing environment for expectant mothers to practice Garbh Sanskar.</li>
            <li>Integration of traditional wisdom with modern understanding of prenatal care.</li>
          </ul>
          
          <p className="text-gray-700 mb-8 text-lg">
            Experience the transformative power of Garbh Sanskar at Agni Ayurved Hospital and give your baby the best possible start in life.
          </p>
        </div>

        {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#F5F5F5] md:min-w-max max-[600px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-[#5FA02E] text-xl py-2">
          Rediscover the Healing Power of Nature
        </p>
        <button
          className="px-5 bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA] hover:bg-[#4a7d24] transition-colors duration-300"
          onClick={() => handleButtonClick("form1")}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Garbhasanskar; 