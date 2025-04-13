import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function KidneyDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "erectile-dysfunction",
      title: "Erectile Dysfunction",
      description:
        "Erectile Dysfunction (ED) is a common male disorder characterized by the inability to achieve or maintain an...",
      link: "/male-disorder/erectile-dysfunction",
      icon: "🍽️",
    },
    {
      id: "infertility",
      title: "Infertility",
      description:
        "Male infertility refers to a man's inability to impregnate a female partner after a year of regular, unprotected intercourse...",
      link: "/male-disorder/infertility",
      icon: "🦠",
    },
    {
      id: "premature-ejaculation",
      title: "Premature Ejaculation",
      description:
        "Premature Ejaculation (PE) is a common male sexual disorder where ejaculation occurs too quickly during sexual...",
      link: "/male-disorder/premature-ejaculation",
      icon: "🦠",
    },
    {
        id: "exhaustion",
        title: "Exhaustion",
        description:
          "Exhaustion refers to extreme physical or mental fatigue that affects daily activities, productivity, and overall...",
        link: "/male-disorder/exhaustion",
        icon: "🦠",
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
            Male Disorders
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Male disorders refer to a range of health conditions that
            specifically affect men, often related to hormonal imbalances,
            reproductive health, and age-related changes. These include issues
            like low testosterone (hypogonadism), erectile dysfunction, prostate
            diseases (such as benign prostatic hyperplasia and prostate cancer),
            and male infertility. Other concerns, like male-pattern baldness,
            osteoporosis, and mental health conditions such as depression and
            anxiety, also fall under male disorders. Lifestyle, genetics, and
            environmental factors play a significant role in these conditions,
            making proper nutrition, exercise, and medical consultation
            essential for prevention and management.
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

export default KidneyDisorder;
