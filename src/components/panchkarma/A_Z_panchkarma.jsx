import React, { useState } from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import { useNavigate } from "react-router-dom";

function A_Z_panchakarma() {
  const navigate = useNavigate();
  const treatments = [
    {
      letter: "A",
      items: ["Abhyanga", "Agni Karma", "Anuvasan Basti", "Avagaha Sweda"],
    },
    { letter: "B", items: ["Bashpa Swedan", "Body Polishing"] },
    { letter: "C", items: ["Cupping"] },
    { letter: "D", items: ["Dhumpan"] },

    { letter: "G", items: ["Greeva Basti","Gandush"] },
    { letter: "H", items: ["Hrid Basti"] },
    { letter: "J", items: ["Janu Basti"] },
    {
      letter: "K",
      items: ["Kati Basti", "Kaval", "Ksheer Dhara", "Kesh Lepanam", "Karn pooran", "Karn dhupana"],
    },
    { letter: "L", items: ["Lepanam Dashang"] },
    { letter: "M", items: ["Matra Basti", "Mukha Lepam"] },
    {
      letter: "N",
      items: [
        "Niruha Basti",
        "Nabhi Basti",
        "Nasya",
        "Netra Parisheka",
        "Netra Tarpan",
      ],
    },
    {
      letter: "P",
      items: [
        "Piccha Basti",
        "Prustha Basti",
        "Pizhichil",
        "Patrapind Pottali Swedan",
      ],
    },
    {
      letter: "R",
      items: ["Raktamokshana Jalauka", "Raktamokshana Syringe", "Ruksha Sweda"],
    },
    {
      letter: "S",
      items: [
        "Swedana",
        "Shashtika Shali Pinda Sweda",
        "Shiro Abhyanga",
        "Shiro Basti",
        "Shiro Pichu",
        "Shirodhara",
        "Snigdha Dagdha",
      ],
    },
    { letter: "T", items: ["Takra Dhara"] },
    { letter: "U", items: ["Udvartana", "Upanaha Sweda","Uttara Basti"] },
    {
      letter: "V",
      items: [
        "Vrukka Basti",
        "Vamana",
        "Virechan",
        "Valuka Sweda",
        "Viddha Karma",
      ],
    },
    { letter: "Y", items: ["Yapana Basti", "Yavani Dham Nasya"] },
  ];

  const handleLinkClick = (item) => {
    // Map treatment names to their correct IDs in treatmentsContent
    const treatmentIdMap = {
      "Abhyanga": "abhyanga",
      "Agni Karma": "agni-karma",
      "Anuvasan Basti": "anuvasan-basti",
      "Avagaha Sweda": "avagaha-sweda",
      "Bashpa Swedan": "bashpa-swedan",
      "Body Polishing": "body-polishing",
      "Cupping": "cupping",
      "Dhumpan": "dhumpan",
      "Greeva Basti": "greeva-basti",
      "Gandush": "gandush",
      "Hrid Basti": "hrid-basti",
      "Janu Basti": "janu-basti",
      "Kati Basti": "kati-basti",
      "Kaval": "kaval",
      "Ksheer Dhara": "ksheer-dhara",
      "Kesh Lepanam": "kesh-lepanam",
      "Karn pooran": "karn-pooran",
      "Karn dhupana": "karn-dhupana",
      "Lepanam Dashang": "lepanam-dashang",
      "Matra Basti": "matra-basti",
      "Mukha Lepam": "mukha-lepam",
      "Niruha Basti": "niruha-basti",
      "Nabhi Basti": "nabhi-basti",
      "Nasya": "nasya",
      "Netra Parisheka": "netra-parisheka",
      "Netra Tarpan": "netra-tarpan",
      "Piccha Basti": "piccha-basti",
      "Prustha Basti": "prustha-basti",
      "Pizhichil": "pizhichil",
      "Patrapind Pottali Swedan": "patrapind-pottali-swedan",
      "Raktamokshana Jalauka": "raktamokshana-jalauka",
      "Raktamokshana Syringe": "raktamokshana-syringe",
      "Ruksha Sweda": "ruksha-sweda",
      "Swedana": "swedana",
      "Shashtika Shali Pinda Sweda": "shashtika-shali-pinda-sweda",
      "Shiro Abhyanga": "shiro-abhyanga",
      "Shiro Basti": "shiro-basti",
      "Shiro Pichu": "shiro-pichu",
      "Shirodhara": "shirodhara",
      "Snigdha Dagdha": "snigdha-dagdha",
      "Takra Dhara": "takra-dhara",
      "Udvartana": "udvartana",
      "Upanaha Sweda": "upanaha-sweda",
      "Uttara Basti": "uttara-basti",
      "Vrukka Basti": "vrukka-basti",
      "Vamana": "vamana",
      "Virechan": "virechan",
      "Valuka Sweda": "valuka-sweda",
      "Viddha Karma": "viddha-karma",
      "Yapana Basti": "yapana-basti",
      "Yavani Dham Nasya": "yavani-dham-nasya"
    };

    const treatmentId = treatmentIdMap[item] || item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/treatments/${treatmentId}`);
  };

  const [visibleFormId, setVisibleFormId] = useState(null);

  const handleButtonClick = (formId) => {
    setVisibleFormId(formId);
  };

  const closeForm = () => {
    setVisibleFormId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3FFEA] to-white">
      {/* Hero Section */}
      <div className="relative animate-fade-in">
        <img 
          src="/hero_image/A_Z_hero.png" 
          alt="Panchakarma Treatments" 
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
      </div>

      {visibleFormId === "form1" && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30 backdrop-blur-sm animate-fade-in">
          <div className="relative animate-scale-in">
            <Book_Appointment closeForm={closeForm} />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="w-full mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36">
        <div className=" mx-auto mb-12 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#394E29] mb-6">
            Transform Your Well-Being With{" "}
            <span className="text-[#5FA02E] relative inline-block">
              Panchakarma
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5FA02E] animate-underline"></span>
            </span>{" "}
            Therapies
          </h1>
          <p className="text-lg sm:text-xl text-[#757575] mb-8 leading-relaxed">
            Experience the essence of Ayurveda through our diverse range of
            Panchakarma treatments, designed to rejuvenate your body, mind, and
            soul. From detoxification and relaxation to targeted healing, each
            therapy is rooted in ancient wisdom and tailored to restore balance
            and vitality.
          </p>
          <p className="text-lg text-[#5FA02E] font-semibold mb-12">
            Panchakarma Treatments A to Z
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((group, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-3xl font-bold text-[#5FA02E] mb-4 group-hover:text-[#4a7d24] transition-colors duration-300">
                {group.letter}
              </h2>
              <ul className="space-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(item)}
                      className="w-full text-left text-[#757575] hover:text-[#5FA02E] transition-all duration-300 p-2 rounded-lg hover:bg-[#5FA02E]/5 hover:pl-4"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Book Appointment Section */}
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

export default A_Z_panchakarma;
