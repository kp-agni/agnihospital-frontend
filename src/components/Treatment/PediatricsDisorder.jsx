import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function PediatricsDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "bedwetting",
      title: "Bedwetting (Nocturnal Enuresis)",
      description:
        "Bedwetting, or nocturnal enuresis, is the involuntary release of urine during sleep, commonly affecting children but...",
      link: "/pediatrics-disorder/bedwetting",
      icon: "🍽️",
    },
    {
      id: "adhd",
      title: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      description:
        "ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental condition characterized by persistent...",
      link: "/pediatrics-disorder/adhd",
      icon: "🦠",
    },
    {
      id: "asd",
      title: "Autism Spectrum Disorder (ASD)",
      description:
        "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects social interaction, communication...",
      link: "/pediatrics-disorder/asd",
      icon: "🦠",
    },
    {
      id: "id",
      title: "Intellectual Disability (ID)",
      description:
        "Intellectual Disability (ID) is a neurodevelopmental disorder characterized by significant limitations in cognitive...",
      link: "/pediatrics-disorder/id",
      icon: "🦠",
    },
    {
      id: "child-growth-devlopment",
      title: "Child Growth & Development",
      description:
        "Child growth and development refer to the physical, cognitive, emotional, and social progress a child undergoes...",
      link: "/pediatrics-disorder/child-growth-devlopment",
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
          Pediatric Disorder
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Pediatric disorders refer to a wide range of medical conditions that
            affect infants, children, and adolescents, impacting their physical,
            emotional, and cognitive development. These disorders can be
            congenital, meaning present at birth, or acquired due to infections,
            environmental factors, nutritional deficiencies, or genetic
            predisposition. Common pediatric disorders include respiratory
            infections, congenital heart defects, asthma, autism spectrum
            disorders, growth and developmental delays, and nutritional
            deficiencies like anemia. Early diagnosis and specialized pediatric
            care are crucial in managing these conditions, ensuring proper
            growth and development while improving the child’s overall quality
            of life.
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

export default PediatricsDisorder;
