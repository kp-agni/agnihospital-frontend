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
      id: "kidneystone",
      title: "Kidney Stone",
      description:
        "Kidney stones are hard mineral and salt deposits that form inside the kidneys due to dehydration, high mineral concentration in urine...",
      link: "/kidney-disorder/kidneystone",
      icon: "🍽️",
    },
    {
      id: "uti",
      title: "UTI",
      description:
        "Urinary Tract Infection (UTI) is a common bacterial infection affecting the urinary system, including the urethra...",
      link: "/kidney-disorder/uti",
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

            Kidney & Urinary Disorders
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Kidney and urinary disorders refer to a range of conditions that
            affect the kidneys, bladder, ureters, and urethra, disrupting the
            body's ability to filter waste, regulate fluids, and expel toxins.
            Common disorders include kidney stones, urinary tract infections
            (UTIs), chronic kidney disease (CKD), and kidney failure, each
            impacting overall health in different ways. These conditions can
            lead to symptoms such as pain, difficulty urinating, swelling, and
            fatigue. Proper hydration, a balanced diet, and early diagnosis are
            crucial for maintaining kidney and urinary health, especially for
            those seeking holistic well-being through Ayurvedic or natural
            treatments.
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
