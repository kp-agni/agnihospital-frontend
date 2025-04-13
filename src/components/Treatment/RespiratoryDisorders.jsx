import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function RespiratoryDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "chronic-cough",
      title: "Chronic Cough",
      description:
        "Chronic cough is a persistent cough that lasts for more than eight weeks in adults or four weeks in children. It can be...",
      link: "/respiratory-disorder/chronic-cough",
      icon: "🍽️",
    },
    {
      id: "sinusitis",
      title: "Sinusitis",
      description:
        "Sinusitis is the inflammation or swelling of the tissue lining the sinuses, often caused by an infection, allergy, or other...",
      link: "/respiratory-disorder/sinusitis",
      icon: "🦠",
    },
    {
      id: "interstitial-lung-disease",
      title: "Interstitial Lung Disease",
      description:
        "Interstitial lung disease (ILD) refers to a group of disorders that cause scarring (fibrosis) of the lung tissue, affecting the...",
      link: "/respiratory-disorder/interstitial-lung-disease",
      icon: "🌾",
    },
    {
      id: "airway-obstruction",
      title: "Airway Obstruction",
      description:
        "Airway obstruction refers to a blockage or narrowing of the air passages in the lungs, which can impair breathing and reduce...",
      link: "/respiratory-disorder/airway-obstruction",
      icon: "🌾",
    },
    {
      id: "asthma",
      title: "Asthma",
      description:
        "Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, making it difficult to...",
      link: "/respiratory-disorder/asthma",
      icon: "🌾",
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
            Respiratory Diseases
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Respiratory disorders refer to a group of medical conditions that
            affect the lungs and the breathing process. These disorders can
            range from mild conditions like asthma to more severe diseases such
            as chronic obstructive pulmonary disease (COPD), pneumonia, or lung
            cancer. Respiratory disorders can cause difficulty in breathing,
            coughing, chest pain, and fatigue. They may be triggered by a
            variety of factors, including infections, allergens, environmental
            pollutants, smoking, or genetic predisposition. Effective treatment
            often depends on the specific condition and its severity, with
            management focusing on improving airflow, reducing inflammation, and
            preventing complications.
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

export default RespiratoryDisorder;
