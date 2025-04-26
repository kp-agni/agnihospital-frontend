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
      id: "kidneystone",
      title: "Kidney Stone",
      description:
        "Kidney stones are hard mineral and salt deposits that form inside the kidneys due to dehydration, high mineral concentration in urine, or an imbalance in urine composition. These stones can vary in size and may cause severe pain when they pass through the urinary tract. Common symptoms include intense lower back or abdominal pain, blood in urine, frequent urination, nausea, and vomiting. If left untreated, kidney stones can lead to infections or blockages in the urinary tract, causing severe complications.",

      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation): Detoxifies the body by eliminating excess Pitta and toxins that contribute to infection.",
        "Basti (Medicated Enema): Herbal enemas help in balancing the urinary system and reducing recurrent infections.",
        "Uttar Basti (Medicated Urethral Therapy): Direct application of herbal decoctions into the bladder to eliminate infection and strengthen the urinary tract.",
        "Shatavari & Gokshura Decoctions: Used to cool and cleanse the urinary tract, reducing burning sensations.",
        "Punarnava Kwath: A powerful herbal remedy that acts as a natural diuretic, flushing out bacteria and reducing inflammation.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Drink plenty of water (2.5-3 liters daily) to flush out minerals and prevent stone formation.",
          "Consume coconut water and barley water to soothe urinary tract inflammation and dissolve small stones.",
          "Include herbal teas like Punarnava & Gokshura to support kidney health and reduce toxin accumulation.",
          "Eat alkaline foods such as banana stem juice, cucumber, watermelon, and fresh citrus fruits to maintain urine pH.",
          "Avoid oxalate-rich foods like spinach, nuts, tea, chocolate, and soy products, as they can contribute to stone formation.",
          "Reduce salt and sugar intake, as high sodium levels can increase calcium in urine, leading to stone growth.",
        ],
        lifestyleModification: [
          "Exercise regularly with yoga postures like Pawanmuktasana, Bhujangasana, and Uttanpadasana to aid kidney function.",
          "Avoid alcohol and caffeine, as they dehydrate the body and increase the risk of stone formation.",
          "Maintain a balanced diet with whole grains, fresh vegetables, and fiber-rich foods to improve digestion and prevent toxin buildup.",
          "Practice stress management techniques such as meditation and Pranayama to reduce stress-related kidney imbalances.",
        ],
      },

      conclusion:
        "Following these Ayurvedic principles and Panchakarma treatments can help manage kidney stones effectively and prevent recurrence while promoting overall urinary health.",
    },

    {
      id: "uti",
      title: "Urinary Tract Infection (UTI)",
      description:
        "Urinary Tract Infection (UTI) is a common bacterial infection affecting the urinary system, including the urethra, bladder, ureters, and kidneys. It occurs when harmful bacteria, usually Escherichia coli (E. coli), enter the urinary tract and multiply, causing inflammation and discomfort. Women are more prone to UTIs due to their shorter urethra, but men can also develop infections. Symptoms include a burning sensation during urination, frequent urination, cloudy or foul-smelling urine, pelvic pain, and in severe cases, fever and lower back pain if the infection reaches the kidneys. If left untreated, UTIs can lead to kidney damage or recurrent infections.",

      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation): Detoxifies the body by eliminating excess Pitta and toxins that contribute to infection.",
        "Basti (Medicated Enema): Herbal enemas help in balancing the urinary system and reducing recurrent infections.",
        "Uttar Basti (Medicated Urethral Therapy): Direct application of herbal decoctions into the bladder to eliminate infection and strengthen the urinary tract.",
        "Shatavari & Gokshura Decoctions: Used to cool and cleanse the urinary tract, reducing burning sensations.",
        "Punarnava Kwath: A powerful herbal remedy that acts as a natural diuretic, flushing out bacteria and reducing inflammation.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Increase water intake: Drink at least 3 liters of water daily to flush out bacteria.",
          "Consume coconut water & barley water as natural coolants to soothe the urinary tract.",
          "Include cooling foods such as cucumber, watermelon, tender coconut, and coriander to pacify Pitta.",
          "Drink herbal teas like coriander, cumin, and fennel water to detoxify and promote urine flow.",
          "Consume probiotics like yogurt and buttermilk to maintain a healthy balance of gut and urinary tract bacteria.",
          "Avoid spicy, fried, and processed foods as they can aggravate Pitta and worsen infection.",
          "Limit sugar and caffeine intake, as excess sugar feeds bacteria, while caffeine irritates the bladder.",
        ],
        lifestyleModification: [
          "Maintain proper hygiene: Always wipe from front to back to prevent bacterial transfer.",
          "Wear cotton underwear to keep the area dry and prevent bacterial growth.",
          "Practice stress management techniques such as meditation and Pranayama to support immune balance.",
          "Urinating frequently: Do not hold urine for long periods, as it can encourage bacterial growth.",
          "Yoga for urinary health: Perform poses like Baddha Konasana (Butterfly Pose) and Malasana (Garland Pose) to improve bladder function.",
        ],
      },

      conclusion:
        "Following Ayurvedic treatments and natural remedies can help prevent and manage UTIs effectively, promoting a healthy and infection-free urinary system.",
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
