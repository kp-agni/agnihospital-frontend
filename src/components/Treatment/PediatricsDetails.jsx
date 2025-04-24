import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function JointDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "bedwetting",
      title: "Bedwetting (Nocturnal Enuresis)",
      description:
        "Bedwetting, or nocturnal enuresis, is the involuntary release of urine during sleep, commonly affecting children but sometimes persisting into adolescence. It can be classified as primary (when the child has never had dry nights) or secondary (when bedwetting returns after a dry period). Causes may include delayed bladder development, deep sleep patterns, hormonal imbalances (low antidiuretic hormone levels), psychological stress, or underlying medical conditions like urinary tract infections (UTIs) or constipation.",

      ayurvedicApproach: {
        ayuvrdicDiscription: [
          "In Ayurveda, bedwetting is associated with an imbalance in the Vata and Kapha doshas. Weak Agni (digestive fire) and improper nervous system control can contribute to involuntary urination. The Ayurvedic approach focuses on strengthening the urinary system, improving digestion, and calming the mind.",
        ],
        panchakarmaTreatments: [
          "Abhyanga (Oil Massage): A gentle oil massage with warm sesame or Brahmi oil helps strengthen the nervous system and balance Vata.",
          "Basti (Medicated Enema): Administering herbal decoctions or oil-based enemas helps balance Vata and strengthen the bladder.",
          "Shirodhara: Pouring warm herbal oil on the forehead can help reduce stress and improve sleep patterns.",
        ],
        herbalRemedies: [
          "Ashwagandha & Brahmi: Support the nervous system and reduce stress.",
          "Shatavari & Gokshura: Strengthen the urinary system.",
          "Yashtimadhu (Licorice): Helps regulate bladder control.",
        ],
      },

      dietRecommendations: {
        dietarySuggestions: [
          "Increase warm and easily digestible foods like khichdi, soups, and boiled vegetables.",
          "Include nuts like almonds and walnuts to strengthen the nervous system.",
          "Avoid cold, heavy, or excessively spicy foods that aggravate Vata.",
          "Reduce excessive fluid intake, especially in the evening.",
          "Herbal teas with fennel, cumin, and cardamom support digestion and bladder function.",
        ],
        lifestyleRecommendations: [
          "Establish a fixed bedtime routine to regulate sleep cycles.",
          "Encourage bladder training exercises and scheduled urination before sleep.",
          "Reduce stress through meditation, storytelling, and calming activities before bed.",
          "Keep the child warm, especially during colder months, as cold exposure can aggravate the condition.",
          "Avoid caffeine-based drinks like tea, coffee, or aerated beverages.",
        ],
      },

      conclusion:
        "With a holistic Ayurvedic approach, including proper diet, lifestyle changes, and Panchakarma therapies, bedwetting can be effectively managed and gradually reduced.",
    },

    {
      id: "adhd",
      title: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      description:
        "ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition characterized by persistent inattention, hyperactivity, and impulsivity that interferes with daily functioning. It commonly begins in childhood and may continue into adolescence and adulthood. Children with ADHD may struggle with focus, organization, completing tasks, and regulating emotions. The exact cause is unknown, but it is linked to genetic factors, brain chemistry imbalances, and environmental influences such as prenatal exposure to toxins or stress.",
      ayurvedicApproach: {
        ayurvedicDescription: [
          "In Ayurveda, ADHD is associated with an imbalance in the Vata dosha, which governs the nervous system, mental activity, and movement. Excess Vata leads to hyperactivity, restlessness, and lack of focus. The Ayurvedic approach focuses on calming the nervous system, improving concentration, and balancing the doshas through herbs, therapies, and lifestyle modifications.",
        ],
        panchakarmaTreatments: [
          "Abhyanga (Oil Massage): A daily warm oil massage using sesame or Brahmi oil helps calm the nervous system and reduce hyperactivity.",
          "Shirodhara: A continuous stream of warm medicated oil on the forehead promotes relaxation, reduces anxiety, and enhances focus.",
          "Nasya Therapy (Nasal Oil Drops): Administering medicated ghee or herbal oils like Brahmi or Shankhpushpi in the nostrils nourishes the brain and improves cognitive functions.",
          "Basti (Medicated Enema): Herbal enemas with Dashmool or Brahmi help pacify Vata and regulate nervous system activity.",
        ],
        herbalRemedies: [
          "Brahmi & Shankhpushpi: Enhance memory, focus, and calm the mind.",
          "Ashwagandha: Reduces hyperactivity and anxiety.",
          "Vacha & Gotu Kola: Improve speech, cognition, and mental clarity.",
        ],
      },
      dietRecommendations: {
        dietarySuggestions: [
          "Include warm, nourishing, and grounding foods like whole grains, dairy, nuts, and ghee.",
          "Use brain-boosting herbs like turmeric, saffron, and cinnamon in meals.",
          "Avoid processed foods, refined sugar, and artificial additives that can worsen hyperactivity.",
          "Reduce intake of dry, cold, and excessively spicy foods that aggravate Vata.",
          "Encourage herbal teas with Brahmi, Ashwagandha, or chamomile to promote relaxation.",
        ],
        lifestyleRecommendations: [
          "Establish a daily routine with fixed wake-up, meal, and sleep times to provide structure.",
          "Encourage mindfulness activities like yoga, deep breathing, and meditation to improve focus.",
          "Reduce screen time and exposure to overstimulating environments.",
          "Engage in creative activities like drawing, music, or storytelling to channel hyperactive energy.",
          "Ensure adequate sleep and a relaxing bedtime routine.",
        ],
      },
      conclusion:
        "By integrating Ayurvedic therapies, dietary modifications, and structured lifestyle practices, ADHD symptoms can be effectively managed, improving focus, emotional regulation, and overall well-being.",
    },

    {
      id: "asd",
      title: "Autism Spectrum Disorder (ASD)",
      description:
        "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects social interaction, communication, behavior, and sensory processing. It presents in varying degrees, from mild to severe, and is characterized by repetitive behaviors, speech difficulties, heightened or reduced sensory sensitivity, and challenges in understanding social cues. The exact cause of autism is not fully understood, but it is linked to genetic factors, prenatal influences, and neurological imbalances.",
      ayurvedicApproach: {
        ayurvedicDescription: [
          "In Ayurveda, Autism is considered a Vata-Pitta imbalance, affecting the nervous system (Majja Dhatu) and cognitive functions. Excessive Vata leads to hyperactivity, restlessness, and communication difficulties, while Pitta imbalance may cause emotional outbursts and irritability. Ayurvedic treatment focuses on calming the mind, nourishing the nervous system, and enhancing cognitive abilities.",
        ],
        panchakarmaTreatments: [
          "Abhyanga (Oil Massage): Daily warm oil massage using sesame, Brahmi, or Ashwagandha oil helps calm the nervous system and improve sensory processing.",
          "Shirodhara: A continuous stream of warm herbal oil on the forehead soothes the mind, reduces anxiety, and improves focus.",
          "Nasya Therapy (Nasal Oil Drops): Medicated ghee or herbal oils (Brahmi or Shankhpushpi) help nourish the brain and enhance speech and cognition.",
          "Basti (Medicated Enema): Herbal enemas using Dashmool or Brahmi help balance Vata and improve gut-brain connection.",
        ],
        herbalRemedies: [
          "Brahmi & Shankhpushpi: Enhance memory, cognition, and speech.",
          "Ashwagandha: Reduces stress and anxiety.",
          "Vacha: Helps improve speech and communication.",
          "Guduchi & Mandukaparni (Gotu Kola): Support brain development and emotional regulation.",
        ],
      },
      dietRecommendations: {
        dietarySuggestions: [
          "Include warm, grounding, and nourishing foods such as ghee, whole grains, dairy, and cooked vegetables.",
          "Increase intake of brain-boosting foods like almonds, walnuts, turmeric, saffron, and pumpkin seeds.",
          "Use herbal teas with Brahmi, chamomile, or licorice to promote relaxation.",
          "Avoid processed foods, artificial colors, refined sugars, and preservatives that can worsen symptoms.",
          "Reduce dry, cold, and excessively spicy foods that aggravate Vata and Pitta.",
          "Incorporate homemade digestive-friendly meals like moong dal khichdi and soups to support gut health.",
        ],
        lifestyleRecommendations: [
          "Establish a structured daily routine to provide stability and reduce anxiety.",
          "Engage in calming activities like yoga, pranayama (breathing exercises), and meditation.",
          "Encourage sensory play with clay, water, sand, and natural textures to improve sensory integration.",
          "Reduce screen time and avoid overstimulating environments.",
          "Practice gentle communication and encourage expression through art, music, or storytelling.",
          "Ensure adequate sleep and relaxation, creating a peaceful bedtime routine.",
        ],
      },
      conclusion:
        "A holistic Ayurvedic approach, including Panchakarma therapies, proper nutrition, and a supportive lifestyle, can help manage Autism symptoms, improve communication skills, and enhance overall well-being.",
    },
    {
      id: "id",
      title: "Intellectual Disability (ID)",
      description:
        "Intellectual Disability (ID) is a neurodevelopmental disorder characterized by significant limitations in cognitive function, reasoning, problem-solving, learning, and adaptive behaviors such as communication, social skills, and daily living activities. It typically appears in early childhood and can range from mild to severe. Causes may include genetic disorders (such as Down syndrome), prenatal exposure to toxins, birth complications, nutritional deficiencies, or brain injuries.",
      ayurvedicApproach: {
        ayurvedicDescription: [
          "In Ayurveda, Intellectual Disability is linked to an imbalance in Vata and Kapha doshas, affecting Majja Dhatu (nervous system) and Ojas (mental vitality and immunity). Excess Vata leads to hyperactivity and weak memory, while Kapha imbalance may cause sluggishness and delayed cognitive development. Ayurvedic treatment focuses on strengthening brain function, enhancing memory, and improving nervous system health.",
        ],
        panchakarmaTreatments: [
          "Abhyanga (Oil Massage): Daily warm oil massage with Brahmi, Ashwagandha, or sesame oil improves nervous system function and reduces stress.",
          "Shirodhara: Pouring warm medicated oil over the forehead calms the mind, enhances focus, and reduces anxiety.",
          "Nasya Therapy (Nasal Oil Drops): Medicated ghee or herbal oils (Brahmi, Vacha) help nourish brain cells and improve speech and cognition.",
          "Basti (Medicated Enema): Herbal enemas with Brahmi and Dashmool help regulate Vata and improve mental clarity.",
        ],
        herbalRemedies: [
          "Brahmi & Shankhpushpi: Enhance memory, learning ability, and focus.",
          "Ashwagandha & Vacha: Strengthen the nervous system and improve speech.",
          "Gotu Kola (Mandukaparni): Supports brain development and cognitive functions.",
          "Guduchi & Yashtimadhu: Boost immunity and overall brain health.",
        ],
      },
      dietRecommendations: {
        dietarySuggestions: [
          "Include nourishing and easily digestible foods such as ghee, whole grains, dairy, and cooked vegetables.",
          "Incorporate brain-boosting foods like almonds, walnuts, saffron, turmeric, and pumpkin seeds.",
          "Avoid processed foods, artificial additives, refined sugars, and junk food that can affect brain function.",
          "Reduce dry, cold, and heavy foods that may aggravate Vata and Kapha imbalances.",
          "Herbal teas with Brahmi, Ashwagandha, or chamomile can help improve relaxation and mental clarity.",
        ],
        lifestyleRecommendations: [
          "Maintain a structured daily routine to provide stability and consistency.",
          "Encourage mind-stimulating activities such as puzzles, storytelling, art, and music.",
          "Practice yoga and pranayama (breathing exercises) to enhance brain function and reduce stress.",
          "Provide sensory stimulation through touch, sound, and visual activities.",
          "Reduce screen time and engage in more interactive learning experiences.",
          "Ensure adequate sleep and relaxation, as rest is crucial for cognitive development.",
        ],
      },
      conclusion:
        "By integrating Ayurvedic therapies, proper nutrition, and structured routines, Intellectual Disability can be managed effectively, supporting cognitive growth and improving quality of life.",
    },
    {
      id: "child-growth-devlopment",
      title: "Child Growth & Development",
      description:
        "Child growth and development refer to the physical, cognitive, emotional, and social progress a child undergoes from infancy to adolescence. Growth disorders occur when a child does not grow at a normal rate for their age, which may result in short stature, delayed puberty, weak bones, or slow cognitive development. Causes include genetic factors, hormonal imbalances (such as growth hormone deficiency), nutritional deficiencies, chronic illnesses, or environmental influences like stress and lack of physical activity. Early detection and proper care are essential to support healthy growth.",
      ayurvedicApproach: {
        ayurvedicDescription: [
          "In Ayurveda, proper growth is governed by Vata (movement and development), Pitta (metabolism), and Kapha (nourishment and strength). An imbalance in these doshas, especially Vata and Kapha, can lead to stunted growth, weak bones, and slow cognitive development. Ayurvedic treatment focuses on improving digestion, strengthening bones and muscles, and enhancing immunity.",
        ],
        panchakarmaTreatments: [
          "Abhyanga (Oil Massage): Daily massage with sesame oil, Bala oil, or Ashwagandha oil strengthens muscles and improves bone health.",
          "Shirodhara: Helps in calming the nervous system and promoting brain development.",
          "Swedana (Steam Therapy): Mild herbal steam therapy enhances circulation and nutrient absorption.",
          "Basti (Medicated Enema): Herbal enemas with Dashmool or Ashwagandha help balance Vata and improve digestion.",
        ],
        herbalRemedies: [
          "Ashwagandha & Shatavari: Promote muscle growth and overall strength.",
          "Guduchi & Amalaki: Boost immunity and metabolism.",
          "Bala & Yashtimadhu: Enhance bone strength and height development.",
          "Brahmi & Shankhpushpi: Improve cognitive growth and brain function.",
        ],
      },
      dietRecommendations: {
        dietarySuggestions: [
          "Include protein-rich foods like dairy, lentils, nuts, and seeds to support muscle and bone growth.",
          "Incorporate calcium and vitamin D-rich foods like milk, ragi, sesame seeds, and leafy greens for strong bones.",
          "Use ghee and healthy fats to enhance digestion and nutrient absorption.",
          "Add brain-boosting herbs like turmeric, saffron, and Brahmi in food for better cognitive function.",
          "Avoid junk food, artificial additives, and excess sugar that may hinder growth.",
          "Encourage warm, home-cooked meals like khichdi, soups, and herbal drinks to improve digestion.",
        ],
        lifestyleRecommendations: [
          "Maintain a regular sleep schedule, as deep sleep is crucial for growth hormone production.",
          "Encourage physical activities like yoga, stretching, and outdoor play to stimulate bone and muscle development.",
          "Provide a stress-free environment with storytelling, music, and mindfulness practices.",
          "Limit screen time and promote creative activities like drawing, puzzles, and hands-on learning.",
          "Ensure proper hydration and exposure to sunlight for vitamin D absorption.",
        ],
      },
      conclusion:
        "A holistic Ayurvedic approach, including balanced nutrition, lifestyle changes, and herbal support, can optimize a child’s growth and development, ensuring overall health and well-being.",
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
          <h1 className="text-[#394E29] font-bold  max-[450px]:text-[16px]">
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
        <p className="text-[#757575] text-justify mt-4">
          {disorder.ayurvedicApproach.ayuvrdicDiscription}
        </p>
        <p className="text-[#757575] font-semibold text-justify mt-4 mb-4">
          Panchakarma Treatments:
        </p>
        <ul className="list-disc list-inside text-[20px]  text-[#757575]">
          {disorder.ayurvedicApproach.panchakarmaTreatments.map(
            (approach, index) => {
              const [title, description] = approach.split(":"); // Splitting at "–"
              return (
                <li key={index} className="mb-4">
                  <strong>{title.trim()}</strong> : {description.trim()}
                </li>
              );
            }
          )}
        </ul>
        <p className="text-[#757575] font-semibold text-justify mt-4 mb-4">
          Herbal Remedies:
        </p>
        <ul className="list-disc list-inside text-[20px]  text-[#757575]">
          {disorder.ayurvedicApproach.herbalRemedies.map((approach, index) => {
            const [title, description] = approach.split(":"); // Splitting at "–"
            return (
              <li key={index} className="mb-4">
                <strong>{title.trim()}</strong> : {description.trim()}
              </li>
            );
          })}
        </ul>
        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>

        <p className="text-[#757575] mt-5 font-bold">Dietary Suggestions:</p>
        <ul className="list-disc list-inside ml-3 text-[20px] mt-4 text-[#757575]">
          {disorder.dietRecommendations.dietarySuggestions.map(
            (item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            )
          )}
        </ul>
        <p className="text-[#757575] mt-10 font-bold">
          Lifestyle Modifications
        </p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.lifestyleRecommendations.map(
            (item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            )
          )}
        </ul>
        <p className="text-[#757575] mt-10">{disorder.conclusion}</p>
      </div>
      <div className="bg-[#F5F5F5] md:min-w-max max-[768px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <p className="text-[#5FA02E] text-xl py-2 ">
          Rediscover the Healing Power of Nature
        </p>
        <button
          className="px-5  bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA]"
          onClick={() => handleButtonClick("form1")}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default JointDetails;
