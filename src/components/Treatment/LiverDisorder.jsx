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
      id: "fatty-liver",
      title: "Fatty Liver",
      description:
        "Fatty liver, also known as hepatic steatosis, is a condition where excess fat accumulates in liver cells. It is...",
      link: "/liver-disorder/fatty-liver",
      icon: "🍽️",
    },
    {
      id: "hepatitis-b",
      title: "Hepatitis B",
      description:
        "Hepatitis B is a viral infection that affects the liver, caused by the Hepatitis B Virus (HBV). It spreads through contact with...",
      link: "/liver-disorder/hepatitis-b",
      icon: "🦠",
    },
    {
        id: "liver-cirrhosis",
        title: "Liver Cirrhosis",
        description:
          "Liver cirrhosis is a progressive and irreversible liver disease where healthy liver tissue is replaced by scar tissue (fibrosis)...",
        link: "/liver-disorder/liver-cirrhosis",
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
        <h1 className="text-[#394E29] font-bold text-3xl md:text-4xl lg:text-5xl max-[450px]:text-xl px-4 text-center">

            Liver Disorders
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Liver disorders refer to a range of conditions that affect the
            liver’s ability to function properly, leading to issues in
            metabolism, detoxification, digestion, and overall health. These
            disorders can be caused by infections (such as hepatitis), excessive
            alcohol consumption, fatty liver disease, genetic factors, or
            autoimmune conditions. Common symptoms include fatigue, jaundice
            (yellowing of the skin and eyes), abdominal pain, and digestive
            problems. Since the liver plays a crucial role in filtering toxins
            and processing nutrients, maintaining a healthy diet, avoiding
            harmful substances, and seeking timely medical care are essential
            for liver health.
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
