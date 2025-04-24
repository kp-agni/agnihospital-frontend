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
      id: "erectile-dysfunction",
      title: "Erectile Dysfunction (ED)",
      description:
        "Erectile Dysfunction (ED) is a common male disorder characterized by the inability to achieve or maintain an erection firm enough for sexual intercourse. It can be caused by physical, psychological, and lifestyle factors.",
      ayurvedicApproach: [
        "Abhyanga (Oil Massage): Uses warm medicated oils like Ashwagandha and Bala oil to enhance circulation and relax the nervous system.",
        "Swedana (Herbal Steam Therapy): Improves blood flow to the penile region and relieves stress.",
        "Virechana (Purgation Therapy): Detoxifies the body, balances Pitta dosha, and improves metabolism.",
        "Shirodhara (Oil Pouring on the Forehead): Reduces mental stress and anxiety.",
        "Basti (Medicated Enema): Administered with herbal decoctions like Dashmooladi Basti to balance Vata dosha and strengthen reproductive organs.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Include aphrodisiac (Vrishya) foods like almonds, walnuts, pumpkin seeds, sesame seeds, and dates.",
          "Consume warm milk with Ashwagandha, Shatavari, or Safed Musli to enhance libido.",
          "Eat fresh fruits like bananas, pomegranates, and figs to improve circulation.",
          "Avoid processed foods, excessive sugar, alcohol, and smoking.",
          "Drink herbal teas with ingredients like Gokshura and Ginger to improve vitality.",
        ],
        lifestyleModification: [
          "Practice Yoga & Pranayama: Asanas like Bhujangasana, Dhanurasana, and Vajrasana enhance blood flow to the pelvic region.",
          "Reduce stress through meditation and deep breathing exercises.",
          "Engage in regular physical activity like brisk walking or strength training.",
          "Maintain a consistent sleep schedule to regulate hormones.",
          "Avoid excessive screen time before bedtime.",
        ],
      },
    },
    {
      id: "infertility",
      title: "Male Infertility",
      description:
        "Male infertility refers to a man's inability to impregnate a female partner after a year of regular, unprotected intercourse. Causes include hormonal imbalances, lifestyle factors, and reproductive system blockages.Male infertility is often linked to low sperm count, poor sperm motility, or structural issues.",
      ayurvedicApproach: [
        "Virechana (Purgation Therapy): Detoxifies the body and enhances reproductive health.",
        "Basti (Medicated Enema): Administered with herbs like Shatavari and Ashwagandha to improve sperm quality.",
        "Abhyanga (Oil Massage): Uses herbal oils like Ashwagandha and Bala oil to improve circulation and reduce stress.",
        "Shirodhara (Oil Dripping Therapy): Helps balance hormones and reduce stress.",
        "Uttarbasti (Herbal Enema for Reproductive Health): Clears blockages in the reproductive system and improves sperm motility.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Eat nutrient-rich foods like milk, ghee, almonds, walnuts, pumpkin seeds, and dates to nourish Shukra Dhatu.",
          "Consume aphrodisiac herbs like Ashwagandha, Safed Musli, Shatavari, and Gokshura.",
          "Drink herbal teas with Triphala and Licorice to detoxify and boost reproductive health.",
          "Include zinc-rich foods like sesame seeds, sunflower seeds, and lentils.",
          "Avoid excessive caffeine, alcohol, smoking, and junk food.",
        ],
        lifestyleModification: [
          "Yoga & Pranayama: Perform asanas like Paschimottanasana, Sarvangasana, and Bhujangasana.",
          "Reduce stress through meditation and deep breathing exercises.",
          "Engage in moderate physical activity like walking or light strength training.",
          "Maintain a proper sleep schedule to regulate hormonal balance.",
          "Avoid excessive heat exposure (e.g., hot tubs, saunas, or tight clothing).",
        ],
      },
    },
    {
      id: "premature-ejaculation",
      title: "Premature Ejaculation (PE)",
      description:
        "Premature Ejaculation (PE) is a common male sexual disorder where ejaculation occurs too quickly during sexual activity, often due to psychological, hormonal, or lifestyle factors.",
      ayurvedicApproach: [
        "Abhyanga (Full Body Oil Massage): Uses medicated oils like Bala and Ashwagandha oil to relax the nervous system.",
        "Shirodhara (Oil Dripping Therapy on Forehead): Reduces stress and anxiety.",
        "Basti (Medicated Enema Therapy): Strengthens reproductive functions and balances Vata.",
        "Vajikarana Therapy (Aphrodisiac Treatment): Uses herbal formulations to enhance sexual strength and stamina.",
        "Swedana (Herbal Steam Therapy): Improves blood circulation and relaxes muscles.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Eat Shukra-enhancing foods like milk, ghee, nuts, seeds, and dates.",
          "Consume aphrodisiac herbs like Ashwagandha, Shatavari, Gokshura, and Safed Musli.",
          "Include zinc-rich foods like sunflower seeds, chickpeas, and dairy products.",
          "Avoid spicy, acidic, and overly processed foods.",
          "Drink herbal teas with Brahmi and Licorice to calm the nervous system.",
        ],
        lifestyleModification: [
          "Yoga & Pranayama: Practice asanas like Vajrasana, Moola Bandha, and Kegel exercises.",
          "Reduce stress and performance anxiety through meditation and deep breathing.",
          "Maintain a regular sleep schedule.",
          "Avoid excessive sexual stimulation and over-masturbation.",
          "Engage in moderate physical activity like walking or swimming.",
        ],
      },
    },
    {
      id: "exhaustion",
      title: "Exhaustion",
      description:
        "Exhaustion refers to extreme physical or mental fatigue that affects daily activities, productivity, and well-being. It can be caused by stress, poor sleep, dehydration, anemia, or excessive exertion.",
      ayurvedicApproach: [
        "Abhyanga (Full Body Oil Massage): Uses warm, medicated oils to rejuvenate the body.",
        "Shirodhara (Oil Dripping Therapy on Forehead): Helps improve sleep and balance emotions.",
        "Swedana (Herbal Steam Therapy): Aids in detoxification and relaxation.",
        "Basti (Medicated Enema Therapy): Nourishing Basti with herbs like Dashmool and Triphala restores energy.",
        "Nasya (Nasal Therapy): Herbal oils enhance mental clarity and relieve fatigue.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Include Ojas-building foods like milk, ghee, nuts, dates, and honey.",
          "Eat iron-rich foods like spinach, beetroot, and lentils.",
          "Drink herbal teas with Ashwagandha, Brahmi, and Shatavari.",
          "Stay hydrated with warm water, coconut water, or herbal infusions.",
          "Avoid excessive caffeine, alcohol, and processed foods.",
        ],
        lifestyleModification: [
          "Yoga & Pranayama Practice asanas like Balasana (Child’s Pose), Sukhasana (Easy Pose), and Viparita Karani (Legs-Up-the-Wall Pose) to relax the body and restore energy.",
          "Engage in regular but moderate exercise, such as walking or light stretching, to improve circulation without overexertion.",
          "Prioritize quality sleep by maintaining a consistent sleep schedule and avoiding screens before bedtime.",
          "Reduce mental stress through meditation, deep breathing exercises, and mindfulness practices.",
          "Take short breaks during work and avoid overburdening yourself with excessive responsibilities.",
        ],
      },
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
