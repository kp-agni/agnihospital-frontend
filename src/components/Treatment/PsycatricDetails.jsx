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
      id: "anxiety-disorder",
      title: "Anxiety Disorder",
      description:
        "Anxiety disorder is a mental health condition characterized by excessive worry, fear, or nervousness that persists beyond normal stress responses. It can manifest in various forms, such as generalized anxiety disorder (GAD), panic disorder, social anxiety, and phobias. Symptoms often include restlessness, rapid heartbeat, difficulty concentrating, excessive worrying, and physical symptoms like sweating or trembling.",

      ayurvedicApproach: [
        "Abhyanga (Oil Massage): A full-body massage using warm, medicated oils like Ashwagandha or Brahmi oil to calm the nervous system and reduce stress.",
        "Shirodhara: A steady stream of warm herbal oil is poured on the forehead (third eye) to induce deep relaxation and mental clarity.",
        "Nasya (Nasal Therapy): Medicated oils like Brahmi or Shatavari are instilled in the nostrils to nourish the brain and relieve stress.",
        "Takradhara: A continuous stream of medicated buttermilk is poured on the forehead to soothe the mind and balance Vata.",
        "Basti (Medicated Enema): Herbal enemas using sesame oil or Dashmool decoctions help detoxify and nourish the nervous system.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Favor warm, cooked, and nourishing foods like soups, stews, and herbal teas.",
          "Include healthy fats like ghee, sesame oil, and coconut oil to support the nervous system.",
          "Eat Vata-pacifying foods such as rice, lentils, sweet potatoes, and dairy.",
          "Herbs like Ashwagandha, Brahmi, Jatamansi, and Shankhpushpi help calm the mind and reduce anxiety.",
          "Avoid caffeine, alcohol, processed foods, and excessive raw or cold foods, as they aggravate Vata.",
        ],
        lifestyleModification: [
          "Establish a consistent daily routine (Dinacharya) to provide stability.",
          "Practice meditation, deep breathing (Pranayama), and yoga (especially grounding poses like Vajrasana, Sukhasana, and Shavasana).",
          "Engage in self-care rituals, such as warm oil massages before bathing.",
          "Spend time in nature and avoid overstimulation from screens, loud noises, and excessive mental work.",
          "Get adequate sleep (preferably sleeping before 10 PM) to rejuvenate the nervous system.",
        ],
      },

      conclusion:
        "By following these Ayurvedic principles, one can balance the mind, alleviate anxiety symptoms, and restore overall well-being.",
    },

    {
      id: "depression",
      title: "Depression",
      description:
        "Depression is a common mental health disorder characterized by persistent sadness, lack of interest or pleasure in activities, fatigue, and a sense of hopelessness. It can also lead to physical symptoms such as changes in appetite, sleep disturbances, body aches, and reduced energy levels. If left untreated, depression can severely impact daily life, work productivity, and relationships. In Ayurveda, depression is often linked to an imbalance in Vata, Pitta, or Kapha dosha, depending on its nature and symptoms.",

      ayurvedicApproach: [
        "Vata-type depression: Characterized by anxiety, fear, restlessness, and insomnia.",
        "Pitta-type depression: Manifests as irritability, anger, frustration, and self-criticism.",
        "Kapha-type depression: Leads to lethargy, excessive sleep, weight gain, and feelings of heaviness.",
        "Abhyanga (Oil Massage): A full-body massage with warm, medicated oils like Ashwagandha, Brahmi, or Mahanarayan oil to calm the nervous system.",
        "Shirodhara: Continuous pouring of warm medicated oil on the forehead (third eye) to reduce mental stress and enhance emotional stability.",
        "Nasya (Nasal Therapy): Administering herbal oils (such as Brahmi oil or Anu Taila) through the nostrils to improve brain function and uplift mood.",
        "Swedana (Herbal Steam Therapy): A detoxifying steam therapy that helps relieve body stiffness and mental dullness.",
        "Virechana (Purgation Therapy): A gentle cleansing process to remove excess Pitta toxins, particularly helpful for Pitta-type depression.",
        "Basti (Medicated Enema): Helps in detoxification and strengthens the nervous system, especially in Vata-type depression.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Favor warm, nourishing, and easily digestible foods such as soups, cooked vegetables, whole grains, and dairy.",
          "Include healthy fats like ghee, sesame oil, and coconut oil to support brain health.",
          "Eat mood-boosting herbs such as Ashwagandha, Brahmi, Jatamansi, and Shankhpushpi.",
          "Consume sweet and grounding foods like dates, almonds, figs, and saffron-infused milk to uplift emotions.",
          "Reduce or avoid caffeine, processed foods, refined sugar, alcohol, and fried foods, which aggravate mental instability.",
        ],
        lifestyleModification: [
          "Establish a daily routine (Dinacharya) to bring stability and reduce mental clutter.",
          "Engage in gentle yoga and meditation, focusing on poses like Balasana (Child’s Pose), Bhujangasana (Cobra Pose), and Shavasana (Corpse Pose).",
          "Practice Pranayama (breathing exercises) such as Anulom Vilom (alternate nostril breathing) and Bhramari (humming bee breath) to calm the mind.",
          "Sun exposure is essential—spend time outdoors for natural Vitamin D and improved mood.",
          "Indulge in self-care rituals, including oil massages, herbal baths, and aromatherapy using calming essential oils like lavender and sandalwood.",
          "Stay socially connected with family, friends, or support groups to prevent isolation.",
          "Ensure adequate and restful sleep by maintaining a fixed bedtime and reducing screen time before sleep.",
        ],
      },

      conclusion:
        "By following these Ayurvedic principles, one can restore balance in the body and mind, promoting emotional well-being and long-term mental stability.",
    },

    {
      id: "insomnia",
      title: "Insomnia",
      description:
        "Insomnia is a sleep disorder characterized by difficulty falling asleep, staying asleep, or waking up too early and not being able to go back to sleep. It leads to fatigue, irritability, lack of focus, and reduced overall well-being. Chronic insomnia can contribute to stress, anxiety, weakened immunity, and an increased risk of other health conditions like hypertension and depression. In Ayurveda, insomnia is primarily caused by an aggravated Vata dosha, which disrupts mental calmness and stability. Pitta imbalance can also contribute by causing excessive thoughts and restlessness at night.",

      ayurvedicApproach: [
        "Abhyanga (Oil Massage): A full-body massage with warm herbal oils like Brahmi, Ashwagandha, or sesame oil to relax the nervous system and promote deep sleep.",
        "Shirodhara: A continuous stream of warm medicated oil poured on the forehead (third eye) to calm the mind and reduce stress-related insomnia.",
        "Nasya (Nasal Therapy): Medicated oils such as Anu Taila or Brahmi oil are administered through the nostrils to nourish the brain and improve sleep.",
        "Takradhara: A cooling therapy using medicated buttermilk poured on the forehead, especially beneficial for Pitta-induced insomnia.",
        "Basti (Medicated Enema): Herbal enemas using Dashmool or sesame oil to eliminate toxins and balance Vata, which helps in grounding the mind.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Consume warm, grounding foods like cooked grains (rice, oats, and quinoa), soups, and herbal teas.",
          "Include healthy fats such as ghee, sesame oil, and coconut oil to nourish the nervous system.",
          "Drink a glass of warm milk with nutmeg, saffron, or Ashwagandha before bedtime to induce sleep.",
          "Eat magnesium-rich foods like bananas, almonds, and leafy greens to relax muscles and nerves.",
          "Use calming herbs like Brahmi, Ashwagandha, Jatamansi, and Shankhpushpi to soothe the mind.",
          "Avoid caffeine, alcohol, spicy foods, sugar, and processed foods in the evening, as they disturb sleep.",
        ],
        lifestyleModification: [
          "Follow a fixed sleep schedule by going to bed and waking up at the same time daily.",
          "Avoid overstimulation before bedtime, such as screens (TV, mobile, laptop) and loud noises.",
          "Practice meditation and deep breathing (Pranayama) like Anulom Vilom and Bhramari to calm the mind.",
          "Engage in gentle yoga poses like Viparita Karani (Legs-Up-The-Wall Pose), Balasana (Child’s Pose), and Shavasana (Corpse Pose) before bed.",
          "Take a warm bath with essential oils like lavender or sandalwood to relax the body.",
          "Massage the soles of the feet and scalp with warm sesame or Brahmi oil before sleeping.",
          "Ensure a dark, quiet, and cool bedroom environment to promote undisturbed sleep.",
        ],
      },

      conclusion:
        "By integrating these Ayurvedic principles, one can restore the body's natural sleep cycle, reduce stress, and achieve deep, rejuvenating sleep.",
    },
    {
      id: "epilepsy",
      title: "Epilepsy",
      description:
        "Epilepsy is a neurological disorder characterized by recurrent seizures caused by abnormal electrical activity in the brain. These seizures can vary in severity, from brief lapses in awareness to full-body convulsions. Symptoms may include sudden muscle stiffness, loss of consciousness, involuntary movements, confusion, and behavioral changes. Epilepsy can result from genetic factors, brain injuries, infections, or unknown causes. In Ayurveda, epilepsy is referred to as 'Apasmara,' meaning loss of memory and consciousness due to an imbalance in the doshas, primarily Vata, but also Pitta and Kapha in different types of epilepsy.",

      ayurvedicApproach: [
        "Shirodhara: A continuous stream of warm medicated oil (Brahmi oil, Ksheerabala oil) poured on the forehead to calm the nervous system and reduce seizure frequency.",
        "Abhyanga (Oil Massage): Full-body massage using Ashwagandha, Bala, or Brahmi-infused oils to nourish the brain and reduce Vata imbalance.",
        "Nasya (Nasal Therapy): Medicated oils like Brahmi Ghrita or Anu Taila are administered through the nostrils to enhance brain function and prevent seizures.",
        "Virechana (Purgation Therapy): A detoxification process using herbal laxatives to remove excess Pitta toxins, beneficial for Pitta-dominant epilepsy.",
        "Basti (Medicated Enema): Herbal enemas with Dashmool or Brahmi decoctions to pacify aggravated Vata and improve nervous system health.",
        "Shankhapushpi and Saraswatarishta Therapy: Ayurvedic brain tonics that improve memory, cognition, and emotional balance.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Include brain-nourishing foods such as almonds, walnuts, cow’s ghee, dates, and pumpkin seeds.",
          "Eat fresh, easily digestible, and sattvic foods like whole grains, dairy, and green leafy vegetables.",
          "Favor sweet, cooling, and hydrating foods to balance Pitta, such as coconut water, pomegranate, and cooked vegetables.",
          "Consume herbal adaptogens like Brahmi, Shankhpushpi, Ashwagandha, and Gotu Kola to strengthen the nervous system.",
          "Avoid spicy, fermented, processed, and deep-fried foods, as they disturb brain function.",
          "Reduce caffeine, alcohol, sugar, and artificial additives, which can trigger seizures.",
        ],
        lifestyleModification: [
          "Maintain a regular sleep schedule, as lack of sleep can trigger seizures.",
          "Engage in gentle yoga and meditation, focusing on calming poses like Sukhasana (Easy Pose) and Shavasana (Corpse Pose).",
          "Practice Pranayama (breathing exercises) like Anulom Vilom and Bhramari to improve oxygen flow to the brain.",
          "Avoid stress, excessive screen time, and bright flashing lights, which can act as seizure triggers.",
          "Perform daily oil massage (head and feet) with sesame or Brahmi oil to keep the nervous system calm.",
          "Ensure a peaceful and positive environment, as emotional distress can worsen symptoms.",
        ],
      },

      conclusion:
        "By following Ayurvedic therapies, dietary guidelines, and a balanced lifestyle, epilepsy can be better managed, leading to improved brain health and reduced seizure occurrences.",
    },
    {
      id: "major-depressive-illness",
      title: "Major Depressive Illness",
      description:
        "Major Depressive Illness, also known as Major Depressive Disorder (MDD), is a severe mental health condition that affects mood, thoughts, and daily functioning. It is characterized by persistent feelings of sadness, hopelessness, loss of interest in activities, fatigue, and suicidal thoughts. Unlike mild depression, MDD significantly impacts a person's ability to work, socialize, and maintain physical health. Physical symptoms may include sleep disturbances, changes in appetite, body pain, and concentration issues. In Ayurveda, Major Depressive Illness is considered a Manasika Roga (mental disorder) caused by an imbalance in the Vata, Pitta, and Kapha doshas, affecting the mind (Manovaha Srotas).",

      ayurvedicApproach: [
        "Shirodhara: Continuous pouring of warm herbal oils (Brahmi oil, Ashwagandha oil) on the forehead to calm the mind and relieve stress.",
        "Abhyanga (Oil Massage): Full-body massage with medicated oils like Bala, Ashwagandha, and Mahanarayan oil to improve circulation and relax the nervous system.",
        "Nasya (Nasal Therapy): Administration of herbal oils (Anu Taila, Brahmi Ghrita) through the nostrils to nourish the brain and uplift mood.",
        "Virechana (Purgation Therapy): Detoxification using herbal laxatives to remove excess Pitta toxins that contribute to emotional imbalance.",
        "Basti (Medicated Enema): Helps balance Vata dosha and cleanse the digestive system, improving gut-brain health.",
        "Takradhara: Cooling therapy using medicated buttermilk poured on the forehead to relieve Pitta-related stress and anger.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Consume warm, grounding, and nutrient-rich foods like whole grains, dairy, and cooked vegetables.",
          "Include brain-nourishing foods such as ghee, nuts (almonds, walnuts), seeds (flaxseeds, pumpkin seeds), and fresh fruits.",
          "Use Ayurvedic herbs like Brahmi, Ashwagandha, Jatamansi, Shankhpushpi, and Gotu Kola to strengthen the nervous system.",
          "Drink golden milk (turmeric and warm milk) before bed to promote relaxation.",
          "Eat sweet, soothing, and hydrating foods like dates, figs, coconut water, and saffron-infused milk.",
          "Avoid processed foods, excessive caffeine, refined sugar, alcohol, and fried foods, which can aggravate mood swings.",
        ],
        lifestyleModification: [
          "Follow a regular sleep schedule to improve mood and energy levels.",
          "Practice meditation and yoga, focusing on gentle poses like Balasana (Child’s Pose), Bhujangasana (Cobra Pose), and Shavasana (Corpse Pose).",
          "Perform Pranayama (breathing exercises) such as Anulom Vilom (Alternate Nostril Breathing) and Bhramari (Humming Bee Breath) to calm the nervous system.",
          "Spend time in natural sunlight to boost Vitamin D levels and uplift mood.",
          "Engage in self-care rituals, including herbal baths, aromatherapy, and daily oil massages with sesame or Brahmi oil.",
          "Stay socially connected with friends, family, and support groups to prevent isolation.",
          "Maintain a positive routine, setting small, achievable goals to create a sense of accomplishment.",
        ],
      },

      conclusion:
        "By integrating Ayurvedic therapies, a balanced diet, and a mindful lifestyle, Major Depressive Illness can be managed effectively, helping restore emotional well-being and inner peace.",
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

        <ul className="list-disc list-inside text-[20px]  text-[#757575]">
          {disorder.ayurvedicApproach.map((approach, index) => {
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

        <p className="text-[#757575] mt-5 font-bold">Dietary Guidelines</p>
        <ul className="list-disc list-inside ml-3 text-[20px] mt-4 text-[#757575]">
          {disorder.dietRecommendations.dietaryguidelines.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[#757575] mt-10 font-bold">
          Lifestyle Modifications
        </p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.lifestyleModification.map(
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
