import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function AnorectalDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "piles",
      title: "Piles",
      description:
        "The treatment for piles primarily depends on the severity of the condition. For mild cases, over-the-counter topical creams...",
      link: "/ano-rectal-disorder/piles",
      icon: "🍽️",
    },
    {
      id: "fistula",
      title: "Fistula",
      description:
        "Fistula treatment typically begins with a thorough diagnosis to determine the type and severity. Conservative treatments...",
      link: "/ano-rectal-disorder/fistula",
      icon: "🦠",
    },
    {
      id: "fissure",
      title: "Fissure",
      description:
        "The treatment for anal fissures typically starts with conservative methods such as increasing fiber intake, using stool...",
      link: "/ano-rectal-disorder/fissure",
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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#394E29] font-bold  max-[450px]:text-[16px]">
            Ano-Rectal Diseases
          </h1>
        </div>
      </div>
      {visibleFormId === "form1" && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="relative">
            <Book_Appointment closeForm={closeForm} />
          </div>
        </div>
      )}
      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Ano-rectal disease refers to a range of medical conditions affecting
            the anus and rectum. These include common issues like hemorrhoids,
            anal fissures, rectal prolapse, and anorectal abscesses. Symptoms
            can range from pain, bleeding, itching, and discomfort, often
            aggravated by sitting or bowel movements. These conditions can be
            caused by various factors, including constipation, prolonged
            sitting, poor diet, or infection. In some cases, chronic
            inflammation or other underlying health issues may contribute to
            ano-rectal disorders. Proper diagnosis and treatment are essential
            to prevent further complications, with management options including
            dietary changes, medications, or surgical intervention in more
            severe cases.
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

export default AnorectalDisorder;
