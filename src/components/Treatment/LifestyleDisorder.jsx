import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function LifestyleDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "obesity",
      title: "Obesity",
      description:
        "In Ayurveda, obesity (Sthoulya) is caused by an imbalance in Kapha dosha, leading to excessive fat accumulation. Ayurvedic...",
      link: "/lifestyle-disorder/obesity",
      icon: "🍽️",
    },
    {
      id: "diabetes-mellitus",
      title: "Diabetes Mellitus",
      description:
        "Diabetes Mellitus is a chronic metabolic disorder characterized by high blood sugar levels due to insufficient insulin production...",
      link: "/lifestyle-disorder/diabetes-mellitus",
      icon: "🦠",
    },
    {
      id: "cholesterol",
      title: "Cholesterol",
      description:
        "Cholesterol is a fatty substance essential for various bodily functions, but excessive levels, particularly LDL (low-density lipoprotein)...",
      link: "/lifestyle-disorder/cholesterol",
      icon: "🌾",
    },
    {
      id: "hypertension",
      title: "Hypertension",
      description:
        "Hypertension, or high blood pressure, is a chronic condition where blood pressure levels remain elevated, increasing the risk...",
      link: "/lifestyle-disorder/hypertension",
      icon: "🔥",
    },
    {
      id: "insomnia",
      title: "Insomnia",
      description:
        "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or waking up too early...",
      link: "/lifestyle-disorder/insomnia",
      icon: "🔄",
    },
    {
      id: "anxiety-disorder",
      title: "Anxiety disorder",
      description:
        "Anxiety disorder is characterized by excessive worry, fear, and nervousness, often accompanied by physical symptoms...",
      link: "/lifestyle-disorder/anxiety-disorder",
      icon: "💉",
    },
    {
      id: "hyperthyroidism-hypothyroidism",
      title: "Hyperthyroidism / Hypothyroidism",
      description:
        "Both hyperthyroidism and hypothyroidism are disorders of the thyroid gland, which...",
      link: "/lifestyle-disorder/hyperthyroidism-hypothyroidism",
      icon: "🩺",
    },
    {
      id: "fatty-liver",
      title: "Fatty liver",
      description:
        "Fatty liver disease, or hepatic steatosis, is a condition where excess fat builds up in the liver cells, leading to...",
      link: "/lifestyle-disorder/fatty-liver",
      icon: "🪑",
    },
    {
      id: "depression",
      title: "Depression",
      description:
        "Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest in daily...",
      link: "/lifestyle-disorder/depression",
      icon: "💧",
    },
    {
      id: "stress-Related",
      title: "Stress-Related Disorders",
      description:
        "Stress-related disorders encompass a range of conditions that occur when the body is unable...",
      link: "/lifestyle-disorder/stress-Related",
      icon: "💊",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
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
            Lifestyle Disorder
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Lifestyle diseases, also known as non-communicable diseases (NCDs),
            are a growing health concern in India, contributing to over 61% of
            deaths. These include cardiovascular diseases, diabetes, obesity,
            and hypertension, primarily caused by unhealthy diets, sedentary
            lifestyles, stress, and inadequate sleep. With rapid urbanization
            and changing habits, the prevalence of these conditions is rising,
            affecting individuals as young as 35. Preventive measures like a
            balanced diet, regular exercise, stress management, and routine
            health check-ups are essential in combating these diseases. Raising
            awareness and promoting healthier lifestyles can significantly
            reduce the impact of lifestyle diseases in the long run.
          </p>
        </section>

        {/* Ayurvedic Approaches Section */}
        <section className="py-20 px-12 xl:px-36">
          <div>
            <h1 className="text-[#394E29] font-bold text-center">
              Ayurvedic approaches
            </h1>
          </div>

          {/* Dynamic Digestive Disorders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mt-12">
            {disorders.map((disorder) => (
              <div
                key={disorder.id}
                className="p-4 bg-white shadow-lg rounded-lg flex flex-col h-full justify-between items-start"
              >
                {/* <div className=" text-4xl mb-4">{disorder.icon}</div> */}
                <h2 className="text-[24px] font-semibold text-[#5FA02E] mb-2">
                  {disorder.title}
                </h2>
                <p className="text-[#757575] text-[20px] mb-4">
                  {disorder.description}
                </p>
                <button
                  className="text-[#5FA02E] font-medium text-[24px]"
                  onClick={() => navigate(disorder.link)}
                >
                  Read more...
                </button>
              </div>
            ))}
          </div>
        </section>
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

export default LifestyleDisorder;
