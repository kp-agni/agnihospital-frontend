import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function RespiratoryDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "chronic-cough",
      title: "Chronic Cough",
      description:
        "Chronic cough is a persistent cough that lasts for more than eight weeks in adults or four weeks in children. It can be a symptom of an underlying condition, such as asthma, chronic obstructive pulmonary disease (COPD), gastroesophageal reflux disease (GERD), or respiratory infections. Chronic cough can cause discomfort, fatigue, and difficulty concentrating. It may be dry or productive, depending on the underlying cause, and may be accompanied by other symptoms like wheezing, shortness of breath, or chest tightness.",
      ayurvedicDiscription1: [
        "In Ayurveda, chronic cough is often seen as a result of an imbalance in the body's doshas, particularly the Kapha dosha, which governs the respiratory system. Ayurvedic treatment aims to balance these doshas and strengthen the respiratory system using natural remedies and therapies.",
      ],
      ayurvedicDiscription2: [
        "Panchakarma, a detoxification therapy, is particularly beneficial in treating chronic cough. Specific Panchakarma treatments like Vamana (therapeutic vomiting) or Nasya (nasal administration of herbal oils) can help remove excess mucus from the respiratory system, clear blockages, and improve overall lung function. Herbal formulations, such as Tulsi (holy basil), Pippali (long pepper), and Ginger, are often used to strengthen the lungs and treat persistent cough.",
      ],
      dietRecommendations: [
        "Diet: A diet that balances the Kapha dosha is essential. This includes consuming warm, light, and easily digestible foods such as soups, broths, and herbal teas. Spices like turmeric, black pepper, and ginger are particularly helpful in promoting respiratory health and clearing mucus. Avoid dairy, fried foods, and excessive sugar, as they can worsen congestion.",
        "Lifestyle: Maintaining a warm and dry environment is important for individuals with chronic cough. Regular exercise, yoga, and breathing exercises (like Pranayama) can help improve lung capacity and strengthen the respiratory system. Avoid exposure to cold air, dust, and pollutants, and make sure to stay hydrated to thin mucus and ease coughing.",
      ],
    },
    {
      id: "sinusitis",
      title: "Sinusitis",
      description:
        "Sinusitis is the inflammation or swelling of the tissue lining the sinuses, often caused by an infection, allergy, or other factors that block the nasal passages. The sinuses are air-filled cavities in the skull that help produce mucus to keep the nasal passages moist. When these cavities become blocked, it can lead to symptoms like nasal congestion, facial pain or pressure, headaches, fever, post-nasal drip, and a reduced sense of smell. Sinusitis can be acute (lasting less than four weeks) or chronic (lasting more than 12 weeks).",
      treatment: [
        "The treatment for sinusitis typically depends on whether the cause is viral, bacterial, or allergic. For viral infections, symptoms usually resolve on their own with rest, hydration, and over-the-counter medications like decongestants and pain relievers.",
        "For bacterial infections, antibiotics may be prescribed.",
        "In cases of chronic sinusitis or allergic reactions, nasal corticosteroids or antihistamines might be used to reduce inflammation and relieve symptoms.",
        "If the condition is related to structural issues, surgery may be recommended to improve sinus drainage.",
      ],
      ayurvedicDiscription1: [
        "In Ayurveda, sinusitis is often attributed to an imbalance in the Kapha dosha, which is responsible for mucus production. The aim of Ayurvedic treatment is to balance the doshas, clear the blocked sinuses, and restore normal function to the respiratory system.",
      ],
      ayurvedicDiscription2: [
        "Panchakarma therapies, including Nasya (nasal administration of herbal oils) and Shirodhara (pouring warm oil on the forehead), can be extremely effective in treating sinusitis.",
        "Nasya clears the sinuses by applying herbal oils and powders that relieve congestion, while Shirodhara calms the mind and body, reducing stress and supporting immune function.",
        "Herbal remedies like Tulsi (holy basil), Pippali (long pepper), and Eucalyptus are commonly used to clear mucus and reduce inflammation in the sinuses.",
      ],
      dietRecommendations: [
        "Diet: A diet that promotes Kapha balancing is key. This includes warm, light, and spicy foods that help reduce excess mucus, such as soups, broths, and ginger tea.Foods like garlic, turmeric, and onions have natural anti-inflammatory properties and can help in easing sinus congestion.Avoid cold, greasy, and dairy-heavy foods, which can aggravate mucus production.",
        "Lifestyle: Practices like regular steaming with herbal infusions (e.g., eucalyptus or peppermint oil) can help loosen mucus and clear nasal passages.Nasal irrigation using a Neti pot with saline solution is also highly recommended to flush out impurities from the sinuses.,Staying hydrated, exercising regularly to improve circulation, and using a humidifier can further help reduce symptoms.",
      ],
    },
    {
      id: "interstitial-lung-disease",
      title: "Interstitial Lung Disease (ILD)",
      description:
        "Interstitial lung disease (ILD) refers to a group of disorders that cause scarring (fibrosis) of the lung tissue, affecting the interstitium — the tissue and space around the air sacs of the lungs. This scarring makes it difficult for the lungs to expand and contract properly, leading to shortness of breath, coughing, and fatigue. ILD can be caused by a variety of factors, including long-term exposure to harmful substances (such as dust or chemicals), infections, autoimmune diseases, or sometimes, it can occur without a known cause, known as idiopathic pulmonary fibrosis (IPF). Over time, the scarring can worsen, leading to reduced lung function and potentially life-threatening complications.",
      treatment: [
        "Treatment for ILD typically aims to slow the progression of the disease, manage symptoms, and improve quality of life.",
        "Medications like corticosteroids or immunosuppressants may be prescribed to reduce inflammation or immune system activity.",
        "Oxygen therapy is recommended in some cases to help improve breathing.",
        "Pulmonary rehabilitation can help enhance lung function and endurance.",
        "For advanced cases, a lung transplant may be considered as a last resort.",
        "Managing underlying conditions (such as autoimmune diseases) is crucial in preventing further lung damage.",
      ],
      ayurvedicDiscription1: [
        "In Ayurveda, ILD is believed to be caused by an imbalance in the Vata and Kapha doshas, leading to an accumulation of toxins (Ama) in the lungs, which causes inflammation and scarring.",
        "Ayurvedic treatment focuses on detoxifying the body, reducing inflammation, and strengthening the lungs to improve overall respiratory health.",
      ],
      ayurvedicDiscription2: [
        "Panchakarma therapies, including Vamana (therapeutic vomiting) and Nasya (nasal administration of herbal oils), can help clear excess mucus and toxins from the respiratory system.",
        "Herbal remedies such as Tulsi (holy basil), Ginger, Pippali (long pepper), and Licorice are commonly used to reduce inflammation, enhance lung function, and promote overall healing.",
      ],
      dietRecommendations: [
        "Diet: To support lung health, a diet that reduces Kapha and strengthens the respiratory system is recommended.Warm, easily digestible foods such as soups, stews, and herbal teas are ideal.Spices like turmeric, ginger, and black pepper can help reduce inflammation and improve breathing.Avoid cold, greasy, and heavy foods, as they can aggravate mucus production and contribute to congestion.",
        "Lifestyle: Regular breathing exercises (Pranayama) and yoga can help increase lung capacity, improve oxygen flow, and reduce stress.Staying in a clean and pollutant-free environment is essential, especially for individuals with ILD.Avoid smoking, exposure to secondhand smoke, and other environmental toxins.Maintaining a healthy weight and engaging in low-impact physical activities can help improve stamina and lung function.Staying hydrated can help thin mucus and ease breathing.",
      ],
    },
    {
      id: "asthma",
      title: "Asthma",
      description:
        "Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, making it difficult to breathe. It is characterized by episodes of wheezing, coughing, chest tightness, and shortness of breath, which can be triggered by various factors such as allergens (pollen, dust, pet dander), air pollution, exercise, respiratory infections, and stress. Asthma can range from mild to severe and may vary in frequency and intensity. Although it cannot be cured, asthma can be managed effectively with medications and lifestyle changes to reduce symptoms and prevent asthma attacks.",
      treatment: [
        "Asthma treatment typically involves a combination of long-term control medications and quick-relief inhalers.",
        "Long-term control medications, such as inhaled corticosteroids or leukotriene modifiers, help reduce inflammation and prevent symptoms from occurring.",
        "Quick-relief medications, like short-acting beta-agonists, provide immediate relief during an asthma attack by relaxing the muscles around the airways.",
        "In some cases, biologic therapies may be used for severe asthma.",
        "Identifying and avoiding triggers, along with regular monitoring of lung function, are essential components of asthma management.",
      ],
      ayurvedicDiscription1: [
        "In Ayurveda, asthma is believed to be caused by an imbalance in the Vata and Kapha doshas, which leads to obstruction of the airways and difficulty in breathing.",
        "Ayurvedic treatment aims to balance these doshas, clear excess mucus, and strengthen the respiratory system.",
      ],
      ayurvedicDiscription2: [
        "Panchakarma therapies, such as Nasya (nasal administration of herbal oils) and Vaman (therapeutic vomiting), are particularly beneficial for clearing the airways and removing toxins from the body.",
        "Nasya can help reduce congestion and clear the sinuses, while Vaman expels accumulated mucus from the lungs.",
        "Ayurvedic herbs like Pippali (long pepper), Tulsi (holy basil), and Ginger are commonly used to open up the airways, reduce inflammation, and improve lung function.",
      ],
      dietRecommendations: [
        "Diet: A Kapha-balancing diet is essential for managing asthma. This includes warm, light, and easy-to-digest foods such as soups, broths, and herbal teas.Spices like turmeric, black pepper, and garlic can help clear the airways and reduce inflammation.Avoid cold, heavy, and dairy-rich foods, as they may aggravate mucus production and trigger asthma symptoms.",
        "Lifestyle: Regular practice of Pranayama (breathing exercises) and yoga can help strengthen the lungs, improve airflow, and reduce stress.Staying away from environmental allergens, pollutants, and smoking is critical to managing asthma.Ensure your home is free from dust, mold, and pet dander.Regular physical activity, particularly gentle exercises, can improve lung capacity and overall health.Staying hydrated is also important to thin mucus and ease breathing.",
      ],
    },
    {
      id: "airway-obstruction",
      title: "Airway Obstruction",
      description:
        "Airway obstruction refers to a blockage or narrowing of the air passages in the lungs, which can impair breathing and reduce airflow. This condition can occur in the upper or lower airways and is often caused by factors such as foreign objects, mucus, inflammation, or swelling in the airways. Airway obstruction can lead to difficulty breathing, wheezing, shortness of breath, coughing, and chest tightness. Common causes include asthma, chronic obstructive pulmonary disease (COPD), bronchitis, anaphylaxis, and physical blockages like choking. If left untreated, severe airway obstruction can result in respiratory distress and even failure, requiring immediate medical attention.",
      treatment: [
        "Treatment for airway obstruction depends on the underlying cause.",
        "For mild obstructions, medications such as bronchodilators (to open the airways) and corticosteroids (to reduce inflammation) are often prescribed.",
        "In cases of anaphylaxis, epinephrine is used to rapidly reduce swelling and open the airways.",
        "For chronic conditions like asthma or COPD, long-term medications and lifestyle adjustments, such as avoiding triggers and using inhalers, are recommended.",
        "In cases of foreign body obstruction, emergency procedures like the Heimlich maneuver or surgical intervention may be necessary to clear the airway and restore normal breathing.",
      ],
      ayurvedicDiscription1: [
        "In Ayurveda, airway obstruction is often caused by an imbalance in the Vata and Kapha doshas, which leads to accumulation of mucus and inflammation in the respiratory passages.",
        "Ayurvedic treatment focuses on balancing these doshas and eliminating excess mucus or blockages from the airways.",
      ],
      ayurvedicDiscription2: [
        "Panchakarma therapies, including Nasya (nasal administration of herbal oils) and Vamana (therapeutic vomiting), can be highly effective for clearing blockages and restoring normal airflow.",
        "Nasya helps remove mucus from the sinuses and upper airways, while Vamana is used to expel excess Kapha and clear the lungs.",
        "Ayurvedic herbs like Tulsi (holy basil), Pippali (long pepper), and Ginger are often used to reduce inflammation, open the airways, and support respiratory health.",
      ],
      dietRecommendations: [
        "Diet: To manage airway obstruction, a Kapha-reducing diet is essential. This includes warm, light, and easily digestible foods like soups, broths, and herbal teas.Spices such as ginger, garlic, and black pepper help open the airways and reduce inflammation.Avoid cold, heavy, and dairy-rich foods, which can contribute to mucus production and exacerbate congestion.",
        "Lifestyle: Regular practice of Pranayama (breathing exercises) and yoga can help strengthen the lungs and improve airflow.Staying in a clean, allergen-free environment is crucial for managing airway obstruction.Avoid exposure to smoking, dust, and pollutants, which can worsen symptoms.Regular physical activity and staying hydrated can also help maintain lung function and reduce the risk of airway blockages.",
      ],
    },
  ];

  const disorder = disorders.find((d) => d.id === disorderId);

  if (!disorder) {
    return <div className="text-center text-red-500">Disorder Not Found</div>;
  }

  return (
    <div className="w-full mx-auto bg-[#F3FFEA] ">
      <div className="relative">
        <img
          src={assets.treatment_hero}
          alt="Digestive Disorders"
          className="w-full"
        />
         {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[#394E29] font-bold text-3xl md:text-4xl lg:text-5xl max-[450px]:text-xl px-4 text-center">

            {disorder.title}
          </h1>
        </div>
      </div>
      <div className="py-20 px-12 xl:px-36">
        <p className="text-[#757575] text-[32px] font-semibold">
          What is {disorder.title} ?
        </p>
        <p className="text-[#757575] text-justify mt-4">
          {disorder.description}
        </p>

        <p className="text-[#757575] text-[32px] font-semibold mt-10 mb-6">
          Ayurvedic Approach & Panchakarma Treatments
        </p>
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.ayurvedicDiscription1}
        </p>
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.ayurvedicDiscription2}
        </p>
        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>
        <ul className="list-disc list-outside md:text-[20px] text-[28px] mt-6 text-[#757575]">
          {disorder.dietRecommendations.map((approach, index) => {
            const parts = approach.split(":"); // Fix the split character
            const title = parts[0]?.trim();
            const description = parts[1]?.trim();
            return (
              <li key={index} className="mb-4">
                <strong>{title}</strong>: {description}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-[#F5F5F5] md:min-w-max max-[768px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <p className="text-[#5FA02E] text-xl py-2 ">
          Rediscover the Healing Power of Nature
        </p>
        <button className="px-5  bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA]"
         onClick={() => handleButtonClick("form1")}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default RespiratoryDetails;
