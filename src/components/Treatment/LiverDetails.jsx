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
      id: "fatty-liver",
      title: "Fatty Liver (Hepatic Steatosis)",
      description:
        "Fatty liver is a condition where excess fat accumulates in liver cells, often due to poor diet, obesity, insulin resistance, excessive alcohol consumption, or metabolic disorders. It is categorized into Alcoholic Fatty Liver Disease (AFLD) and Non-Alcoholic Fatty Liver Disease (NAFLD). If left untreated, it can lead to inflammation, fibrosis, or cirrhosis, causing severe liver damage.",

      ayurvedicApproach: [
        "Virechana (Therapeutic Purging): Helps eliminate excess Pitta and detoxifies the liver.",
        "Basti (Medicated Enema): Clears toxins from the digestive system and improves metabolism.",
        "Lepam (Herbal Paste Application): Applied externally to reduce inflammation.",
        "Abhyanga (Herbal Oil Massage) & Swedana (Herbal Steam Therapy): Improves blood circulation and promotes liver detoxification.",
        "Shodhana (Purification Therapy): Includes herbal medicines like Triphala, Bhumyamalaki, Katuki, and Kalmegh to cleanse the liver.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Eat Liver-Friendly Foods: Include turmeric, amla (Indian gooseberry), bitter gourd, fenugreek, and garlic to detoxify the liver.",
          "Increase Fiber Intake: Consume whole grains, fresh vegetables, and fruits like papaya and pomegranate.",
          "Use Ayurvedic Herbs: Kutki, Punarnava, Bhumyamalaki, Giloy, and Kalmegh help rejuvenate liver cells.",
          "Avoid Heavy & Processed Foods: Say no to deep-fried, oily, sugary, and highly processed foods that burden the liver.",
          "Hydration is Key: Drink warm water infused with lemon to aid digestion and detoxification.",
        ],
        lifestyleModification: [
          "Maintain a Healthy Weight: Regular exercise, yoga, and pranayama (breathing techniques) help reduce fat accumulation in the liver.",
          "Avoid Alcohol & Smoking: Both contribute to liver damage and inflammation.",
          "Practice Stress Management: Meditation and mindfulness help maintain hormonal balance and liver health.",
          "Regular Detox: Engage in periodic Ayurvedic detoxification practices like Panchakarma to eliminate toxins.",
        ],
      },

      conclusion:
        "By following Ayurvedic principles, fatty liver can be managed effectively, preventing its progression to more severe liver conditions.",
    },

    {
      id: "hepatitis-b",
      title: "Hepatitis B",
      description:
        "Hepatitis B is a viral infection affecting the liver, caused by the Hepatitis B Virus (HBV). It spreads through infected blood, unprotected sexual activity, sharing needles, or from an infected mother to her newborn. Chronic Hepatitis B can lead to liver damage, cirrhosis, or liver cancer. Symptoms include jaundice, fatigue, nausea, abdominal pain, and dark urine.",

      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation): Eliminates excess Pitta and toxins from the liver.",
        "Raktamokshana (Blood Purification Therapy): Removes toxins from the bloodstream to reduce liver inflammation.",
        "Basti (Medicated Enema): Balances Vata and improves digestion, preventing further liver damage.",
        "Abhyanga (Herbal Oil Massage) & Swedana (Herbal Steam Therapy): Enhances circulation and promotes liver detoxification.",
        "Shamana (Palliative Treatment): Includes herbs like Bhumyamalaki, Kutki, Kalmegh, and Punarnava to heal the liver and improve immunity.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Consume Liver-Healing Foods: Include turmeric, amla, aloe vera juice, and papaya to support liver function.",
          "Use Ayurvedic Herbs: Bhumyamalaki, Katuki, Guduchi (Giloy), Kalmegh, and Punarnava help fight viral infections and detoxify the liver.",
          "Increase Hydration: Drink warm water with lemon or honey to cleanse the liver naturally.",
          "Avoid Heavy, Oily, & Processed Foods: Reduce spicy, fried, and high-fat foods, as they aggravate Pitta and weaken liver function.",
          "Eat Fresh & Easily Digestible Meals: Focus on steamed vegetables, whole grains, and herbal teas to support digestion and immunity.",
        ],
        lifestyleModification: [
          "Practice Regular Detox: Engage in periodic Panchakarma therapies to maintain liver health.",
          "Follow a Stress-Free Routine: Meditation, yoga, and pranayama help strengthen immunity and liver function.",
          "Avoid Alcohol & Smoking: Both contribute to liver inflammation and worsen Hepatitis B symptoms.",
          "Maintain Hygiene & Safe Practices: Avoid sharing razors, toothbrushes, or needles to prevent the spread of Hepatitis B.",
        ],
      },

      conclusion:
        "By incorporating these Ayurvedic principles, Hepatitis B can be managed effectively, reducing liver inflammation and promoting overall health.",
    },

    {
      id: "liver-cirrhosis",
      title: "Liver Cirrhosis",
      description:
        "Liver cirrhosis is a progressive and irreversible liver disease where healthy liver tissue is replaced by scar tissue (fibrosis), leading to liver dysfunction. It is caused by chronic alcohol consumption, viral hepatitis, fatty liver disease, or autoimmune conditions. Symptoms include jaundice, ascites (fluid retention in the abdomen), fatigue, weight loss, and confusion. If untreated, it can lead to liver failure or liver cancer.",
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation): Eliminates accumulated toxins (Ama) and balances Pitta.",
        "Basti (Medicated Enema): Helps detoxify the colon and support liver regeneration.",
        "Raktamokshana (Blood Purification Therapy): Reduces toxin overload in the bloodstream.",
        "Abhyanga (Herbal Oil Massage) & Swedana (Herbal Steam Therapy): Enhances blood circulation and relieves liver congestion.",
        "Shamana (Herbal Medicines): Herbs like Bhumyamalaki, Punarnava, Kutki, Kalmegh, and Giloy restore liver function.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Consume Liver-Regenerating Foods: Include amla, turmeric, papaya, bottle gourd, and aloe vera juice.",
          "Use Ayurvedic Herbs: Kutki, Bhumyamalaki, Punarnava, Kalmegh, Giloy, and Triphala.",
          "Stay Hydrated: Drink warm water with lemon or herbal teas.",
          "Avoid Heavy, Spicy, & Processed Foods: Reduce oily, deep-fried, packaged, and sugary foods.",
          "Eat Small, Frequent Meals: Consuming light, easily digestible foods helps maintain energy.",
        ],
        lifestyleModification: [
          "Avoid Alcohol & Tobacco: Both accelerate liver damage and should be eliminated.",
          "Engage in Gentle Exercise: Yoga, pranayama, and walking improve circulation and liver function.",
          "Practice Stress Management: Meditation and a stress-free routine help balance Pitta.",
          "Regular Detoxification: Undergo Panchakarma therapies periodically to cleanse the liver.",
        ],
      },
      conclusion:
        "Following Ayurvedic principles can help manage liver cirrhosis, slow its progression, reduce symptoms, and improve quality of life.",
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
