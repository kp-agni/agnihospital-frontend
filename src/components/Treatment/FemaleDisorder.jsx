import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function FemaleDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "menstrual-disorders",
      title: "Menstrual Disorders",
      description:
        "Menstrual disorders refer to various conditions that affect the normal menstrual cycle, causing irregula...",
      link: "/female-disorder/menstrual-disorders",
      icon: "🍽️",
    },
    {
      id: "pcos",
      title: "(PCOS)",
      description:
        "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It is characterized...",
      link: "/female-disorder/pcos",
      icon: "🦠",
    },
    {
      id: "pcod",
      title: "(PCOD)",
      description:
        "Polycystic Ovarian Disease (PCOD) is a hormonal disorder in which the ovaries produce an excess of immature eggs, leading to...",
      link: "/female-disorder/pcod",
      icon: "🌾",
    },
    {
      id: "uterine-fibroids",
      title: "Uterine Fibroids",
      description:
        "Uterine fibroids are non-cancerous growths that develop in the uterus, often during the reproductive years. They vary in siz...",
      link: "/female-disorder/uterine-fibroids",
      icon: "🔥",
    },
    {
      id: "endometriosis",
      title: "Endometriosis",
      description:
        "Endometriosis is a chronic condition where the tissue similar to the lining of the uterus grows outside the uterus, leading to...",
      link: "/female-disorder/endometriosis",
      icon: "🔄",
    },
    {
      id: "male-female-infertility",
      title: "Infertility",
      description:
        "Infertility is the inability to conceive after a year of regular, unprotected intercourse. It can affect both men and women due to various...",
      link: "/female-disorder/male-female-infertility",
      icon: "💉",
    },
    {
      id: "white-discharge",
      title: "White Discharge",
      description:
        "White discharge, also known as Leucorrhea, is a common condition in women where a white or yellowish fluid is secreted from...",
      link: "/female-disorder/white-discharge",
      icon: "🩺",
    },
    {
      id: "tubal-blockage",
      title: "Tubal Blockage",
      description:
        "Tubal blockage occurs when one or both fallopian tubes become obstructed, preventing the egg from reaching the...",
      link: "/female-disorder/tubal-blockage",
      icon: "🩺",
    },
    {
      id: "garbh-sanskar",
      title: "Garbh Sanskar",
      description:
        "Garbh Sanskar is an ancient Ayurvedic practice that focuses on the physical, mental, and spiritual well-being of both the mother...",
      link: "/female-disorder/garbh-sanskar",
      icon: "🩺",
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
            Female Disorders
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Female disorders refer to a range of health conditions that
            specifically affect the female reproductive system and overall
            well-being. These include menstrual irregularities, hormonal
            imbalances, polycystic ovary syndrome (PCOS), endometriosis,
            infertility, menopause-related issues, and other concerns related to
            reproductive and sexual health. Proper diagnosis and timely
            treatment can help manage these conditions effectively, ensuring
            better health and quality of life for women.
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

export default FemaleDisorder;
