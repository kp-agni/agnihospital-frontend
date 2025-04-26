import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function EntDisorder() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "tinnitus",
      title: "Tinnitus",
      description:
        "Tinnitus is a condition characterized by the perception of ringing, buzzing, hissing, or other sounds in the ears or head...",
      link: "/ent-disorder/tinnitus",
      icon: "🔔",
    },
    {
      id: "recurrent-sinusitis",
      title: "Recurrent Sinusitis",
      description:
        "Recurrent sinusitis is a condition where inflammation or infection of the sinus cavities repeatedly occurs over time...",
      link: "/ent-disorder/recurrent-sinusitis",
      icon: "🤧",
    },
    {
      id: "acute-otitis-media",
      title: "Acute Otitis Media",
      description:
        "Acute Otitis Media (AOM) is a sudden-onset infection of the middle ear, characterized by inflammation and fluid buildup...",
      link: "/ent-disorder/acute-otitis-media",
      icon: "👂",
    },
    {
      id: "csom",
      title: "CSOM",
      description:
        "Chronic Suppurative Otitis Media (CSOM) is a long-standing inflammation of the middle ear marked by persistent ear discharge...",
      link: "/ent-disorder/csom",
      icon: "🦻",
    },
    {
      id: "pharyngitis",
      title: "Pharyngitis",
      description:
        "Pharyngitis is the inflammation of the pharynx, the area at the back of the throat, which typically results in a sore, scratchy throat...",
      link: "/ent-disorder/pharyngitis",
      icon: "🗣️",
    },
    {
      id: "tonsillitis",
      title: "Tonsillitis",
      description:
        "Tonsillitis is the inflammation of the tonsils—lymphoid tissues located at the back of the throat—often resulting from viral or bacterial infections...",
      link: "/ent-disorder/tonsillitis",
      icon: "👅",
    },
    {
      id: "hypothyroidism",
      title: "Hypothyroidism",
      description:
        "Hypothyroidism is a condition in which the thyroid gland produces insufficient amounts of thyroid hormones, leading to various metabolic issues...",
      link: "/ent-disorder/hypothyroidism",
      icon: "🦋",
    },
    {
      id: "nasal-polyp",
      title: "Nasal Polyp",
      description:
        "Nasal polyps are benign, noncancerous growths that develop on the lining of the nasal passages or sinuses due to chronic inflammation...",
      link: "/ent-disorder/nasal-polyp",
      icon: "👃",
    },
    {
      id: "rhinitis",
      title: "Rhinitis",
      description:
        "Rhinitis is the inflammation of the nasal mucosa, which often leads to symptoms such as nasal congestion, sneezing, and runny nose...",
      link: "/ent-disorder/rhinitis",
      icon: "🤧",
    },
    {
      id: "perforation-of-ear",
      title: "Perforation of Ear",
      description:
        "Perforation of the ear, commonly referred to as a perforated eardrum, is a condition where there is a hole or tear in the tympanic membrane...",
      link: "/ent-disorder/perforation-of-ear",
      icon: "🦻",
    },
    {
      id: "dysphagia",
      title: "Dysphagia",
      description:
        "Dysphagia is a condition characterized by difficulty in swallowing. It can arise from structural abnormalities or neuromuscular disorders...",
      link: "/ent-disorder/dysphagia",
      icon: "🥤",
    },
    {
      id: "vestibulitis",
      title: "Vestibulitis",
      description:
        "Vestibulitis refers to inflammation of the vestibular system within the inner ear, which is crucial for maintaining balance...",
      link: "/ent-disorder/vestibulitis",
      icon: "⚖️",
    },
    {
      id: "meniere-disease",
      title: "Meniere’s Disease",
      description:
        "Meniere’s Disease is a chronic disorder of the inner ear characterized by recurring episodes of vertigo, fluctuating hearing loss...",
      link: "/ent-disorder/meniere-disease",
      icon: "⚖️",
    },
    {
      id: "stuttering",
      title: "Stuttering",
      description:
        "Stuttering, also known as stammering, is a speech disorder characterized by interruptions in the flow of speech...",
      link: "/ent-disorder/stuttering",
      icon: "⚖️",
    },
    {
      id: "parotitis",
      title: "Parotitis",
      description:
        "Parotitis is the inflammation of the parotid glands, which are the largest salivary glands located on either side of the face...",
      link: "/ent-disorder/parotitis",
      icon: "⚖️",
    },
    {
      id: "ototoxicity",
      title: "Ototoxicity",
      description:
        "Ototoxicity refers to the damage to the inner ear—particularly the cochlea and vestibular apparatus—caused by exposure...",
      link: "/ent-disorder/ototoxicity",
      icon: "⚖️",
    },
    {
      id: "otalgia",
      title: "Otalgia",
      description:
        "Otalgia refers to ear pain, which can originate from within the ear itself (primary otalgia) or be referred from surrounding...",
      link: "/ent-disorder/otalgia",
      icon: "⚖️",
    },
    {
      id: "dns",
      title: "DNS",
      description:
        "A Deviated Nasal Septum (DNS) is a condition where the nasal septum—the cartilage and bone that divide the nasal cavity...",
      link: "/ent-disorder/dns",
      icon: "⚖️",
    },
    {
      id: "leukoplakia",
      title: "Leukoplakia",
      description:
        "Leukoplakia is a condition characterized by the appearance of white patches or plaques on the mucous membranes...",
      link: "/ent-disorder/leukoplakia",
      icon: "⚖️",
    },
    {
      id: "hearing-loss",
      title: "Hearing loss",
      description:
        "Hearing loss is a reduction in the ability to perceive sounds, which can affect one or both ears. It may develop gradually...",
      link: "/ent-disorder/hearing-loss",
      icon: "⚖️",
    },
    {
      id: "epistaxis",
      title: "Epistaxis",
      description:
        "Epistaxis is the medical term for a nosebleed, which refers to bleeding from the nasal cavity. It can range from a minor...",
      link: "/ent-disorder/epistaxis",
      icon: "⚖️",
    },
    {
      id: "bells-palsy",
      title: "Bell’s Palsy",
      description:
        "Bell’s Palsy is a neurological condition characterized by the sudden onset of unilateral facial paralysis or weakness due...",
      link: "/ent-disorder/bells-palsy",
      icon: "⚖️",
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
        <h1 className="text-[#394E29] font-bold text-3xl md:text-4xl lg:text-5xl max-[450px]:text-xl px-4 text-center">
        ENT Disorders
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
            ENT (Ear, Nose, and Throat) disorders refer to a wide range of
            medical conditions affecting the ear, nose, throat, and related
            structures of the head and neck. These disorders can impact
            essential functions such as hearing, breathing, speaking, and
            swallowing. Common ENT conditions include ear infections, sinusitis,
            allergies, tonsillitis, nasal congestion, voice disorders, and more
            severe issues like hearing loss, vertigo, or throat cancers.
            Treatment for these conditions varies from medications and lifestyle
            adjustments to surgical interventions, depending on the severity and
            underlying cause. Regular check-ups with an ENT specialist can help
            in early diagnosis and effective management.
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
                  className="text-[#5FA02E] font-medium  text-[24px]"
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

export default EntDisorder;
