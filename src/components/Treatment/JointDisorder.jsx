import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function JointDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "sciatica",
      title: "Sciatica",
      description:
        "Sciatica, known as Gridhrasi in Ayurveda, is caused by an aggravated Vata dosha, leading to nerve...",
      link: "/joint-disorder/sciatica",
      icon: "🍽️",
    },
    {
      id: "avascular-necrosis",
      title: "Avascular Necrosis",
      description:
        "Avascular Necrosis (AVN), known as Asthi-Majjagata Vata in Ayurveda, is a condition where the blood supply to the bones is disrupted...",
      link: "/joint-disorder/avascular-necrosis",
      icon: "🦠",
    },
    {
      id: "frozen-shoulder",
      title: "Frozen Shoulder",
      description:
        "Frozen Shoulder, known as Apabahuka in Ayurveda, is a condition caused by an aggravated Vata dosha, leading to stiffness...",
      link: "/joint-disorder/frozen-shoulder",
      icon: "🌾",
    },
    {
      id: "tennis-elbow",
      title: "Tennis Elbow",
      description:
        "Tennis Elbow, known as Kurpara Sandhigata Vata in Ayurveda, is a painful condition caused by overuse of the elbow joint...",
      link: "/joint-disorder/tennis-elbow",
      icon: "🔥",
    },
    {
      id: "ankylosing-spondylitis",
      title: "Ankylosing Spondylitis",
      description:
        "Ankylosing Spondylitis (AS), known as Asthi-Sandhigata Vata in Ayurveda, is a chronic inflammatory condition that primarily...",
      link: "/joint-disorder/ankylosing-spondylitis",
      icon: "🔄",
    },
    {
      id: "knee-pain",
      title: "Knee Pain",
      description:
        "Knee pain, known as Sandhivata in Ayurveda, is primarily caused by Vata dosha imbalance, leading to joint degeneration...",
      link: "/joint-disorder/knee-pain",
      icon: "💉",
    },
    {
      id: "migraine",
      title: "Migraine",
      description:
        "Migraine, known as Ardhavabhedaka in Ayurveda, is caused by an imbalance in Vata and Pitta doshas, leading to intense headaches...",
      link: "/joint-disorder/migraine",
      icon: "🩺",
    },
    {
      id: "parkinson",
      title: "Parkinson’s Disease",
      description:
        "Parkinson’s Disease, known as Kampavata in Ayurveda, is a neurodegenerative disorder caused by an imbalance in Vata dosha...",
      link: "/joint-disorder/parkinson",
      icon: "🪑",
    },
    {
      id: "osteoporosis",
      title: "Osteoporosis",
      description:
        "Osteoporosis, known as Asthi Kshaya in Ayurveda, is a condition characterized by bone density loss, weakness, and increased...",
      link: "/joint-disorder/osteoporosis",
      icon: "💧",
    },
    {
      id: "osteoarthritis",
      title: "Osteoarthritis",
      description:
        "Osteoarthritis, known as Sandhivata in Ayurveda, is a degenerative joint disorder caused by an imbalance in Vata dosha...",
      link: "/joint-disorder/osteoarthritis",
      icon: "💊",
    },
    {
      id: "muscle-pain",
      title: "Muscle Pain",
      description:
        "Muscle pain, known as Mamsagata Vata in Ayurveda, occurs due to Vata and Pitta imbalances, leading to stiffness, soreness...",
      link: "/joint-disorder/muscle-pain",
      icon: "🍵",
    },
    {
      id: "slipped-disc",
      title: "Slipped Disc",
      description:
        "A slipped disc, known as PIVD (Prolapsed Intervertebral Disc) or Gridhrasi (Sciatica) in Ayurveda, occurs when the spinal disc...",
      link: "/joint-disorder/slipped-disc",
      icon: "🔬",
    },
    {
      id: "gout",
      title: "Gout",
      description:
        "Gout, known as Vatarakta in Ayurveda, is a painful inflammatory condition caused by an imbalance of Vata and accumulation of...",
      link: "/joint-disorder/gout",
      icon: "🩻",
    },
    {
      id: "rheumatoid-arthritis",
      title: "Rheumatoid Arthritis",
      description:
        "Rheumatoid Arthritis, known as Amavata in Ayurveda, is an autoimmune joint disorder caused by the accumulation of Ama...",
      link: "/joint-disorder/rheumatoid-arthritis",
      icon: "💨",
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
            Joint Disorder
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full mx-auto bg-[#F3FFEA]">
        <section className="py-20 px-12 xl:px-36">
          <p className="text-[#757575] text-justify">
            Ayurveda addresses pain by identifying its root cause and balancing
            the affected doshas—Vata, Pitta, or Kapha. Treatments include herbal
            remedies, medicated oil massages (Abhyanga), detox therapies
            (Basti), heat therapies (Swedana), and specialized techniques like
            Agnikarma and Marma therapy. A personalized approach, including diet
            and lifestyle modifications, helps restore harmony, providing
            long-term relief from chronic pain naturally.
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

export default JointDisorder;
