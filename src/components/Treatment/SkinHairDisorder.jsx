import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function SkinHairDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "eczema",
      title: "Eczema",
      description:
        "Eczema, also known as Vicharchika in Ayurveda, is a chronic inflammatory skin condition characterized by redness, itching, dryness...",
      link: "/skin&hair-disorder/eczema",
      icon: "🍽️",
    },
    {
      id: "acne",
      title: "ACNE",
      description:
        "Acne, known as Yauvan Pidika in Ayurveda, is a common skin condition caused by excess oil production, clogged pores, bacterial...",
      link: "/skin&hair-disorder/acne",
      icon: "🦠",
    },
    {
      id: "psoriasis",
      title: "Psoriasis",
      description:
        "Psoriasis, known as Kitibha Kushta in Ayurveda, is a chronic autoimmune skin disorder characterized by red, scaly patches...",
      link: "/skin&hair-disorder/psoriasis",
      icon: "🌾",
    },
    {
      id: "hyperpigmentation",
      title: "Hyperpigmentation",
      description:
        "Hyperpigmentation, known as Vyanga in Ayurveda, is a condition where certain areas of the skin become darker due...",
      link: "/skin&hair-disorder/hyperpigmentation",
      icon: "🔥",
    },
    {
      id: "urticaria",
      title: "Urticaria",
      description:
        "Urticaria, known as Sheetpitta in Ayurveda, is a skin condition characterized by red, itchy welts or hives that appear suddenly...",
      link: "/skin&hair-disorder/urticaria",
      icon: "🔄",
    },
    {
      id: "leprosy",
      title: "Leprosy",
      description:
        "Leprosy, known as Kushtha Roga in Ayurveda, is a chronic infectious disease caused by Mycobacterium leprae, affecting the...",
      link: "/skin&hair-disorder/leprosy",
      icon: "💉",
    },
    {
      id: "vitiligo",
      title: "Vitiligo",
      description:
        "Vitiligo, known as Shwitra or Kilasa in Ayurveda, is a skin disorder characterized by the loss of melanin, leading to white patches...",
      link: "/skin&hair-disorder/vitiligo",
      icon: "🩺",
    },
    {
      id: "hairfall",
      title: "Hairfall",
      description:
        "Hair fall, known as Khalitya in Ayurveda, is a common condition that can affect both men and women. It occurs due to various factors...",
      link: "/skin&hair-disorder/hairfall",
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
            Skin & Hair Disorders
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Skin and hair disorders encompass a wide range of conditions
            affecting the health, appearance, and function of the skin, scalp,
            and hair. These disorders can arise due to genetic factors,
            environmental influences, hormonal imbalances, nutritional
            deficiencies, or underlying medical conditions. Common skin issues
            like acne, eczema, psoriasis, and infections can cause discomfort,
            irritation, and long-term skin damage if not properly managed.
            Similarly, hair problems such as hair loss, dandruff, and premature
            graying can impact self-confidence and overall well-being. While
            some conditions are temporary and easily treatable, others may
            require long-term care and professional treatment. Understanding the
            causes, symptoms, and management options for skin and hair disorders
            is crucial for maintaining healthy skin and hair, preventing
            complications, and improving overall quality of life.
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

export default SkinHairDisorder;
