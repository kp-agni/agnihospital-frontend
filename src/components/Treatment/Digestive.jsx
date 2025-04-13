import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";


function Digestive() {
  const navigate = useNavigate();
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: 1,
      title: "Anorexia Nervosa",
      description:
        "Anorexia Nervosa is a psychological and physiological disorder where a person develops an extreme fear of gaining weight...",
      link: "/digestive-disorder/anorexia-nervosa",
      icon: "🍽️",
    },
    {
      id: 2,
      title: "Chronic Gastritis",
      description:
        "Chronic gastritis refers to long-term inflammation of the stomach lining, which can be caused by excessive stomach acid, bacterial...",
      link: "/digestive-disorder/chronic-gastritis",
      icon: "🦠",
    },
    {
      id: 3,
      title: "Coeliac Disease",
      description:
        "Celiac disease is an autoimmune disorder in which the ingestion of gluten (a protein found in wheat, barley, and rye) causes the...",
      link: "/digestive-disorder/coeliac-disease",
      icon: "🌾",
    },
    {
      id: 4,
      title: "Acid Reflux (GERD)",
      description:
        "Acid reflux, or Gastroesophageal Reflux Disease (GERD), occurs when stomach acid flows back into the esophagus...",
      link: "/digestive-disorder/acid-reflux",
      icon: "🔥",
    },
    {
      id: 5,
      title: "Irritable Bowel Syndrome (IBS)",
      description:
        "IBS is a common digestive disorder affecting the large intestine, causing abdominal pain, bloating, diarrhea...",
      link: "/digestive-disorder/ibs",
      icon: "🔄",
    },
    {
      id: 6,
      title: "Ulcerative Colitis",
      description:
        "Ulcerative Colitis is an inflammatory bowel disease (IBD) that causes ulcers and inflammation in the colon...",
      link: "/digestive-disorder/ulcerative-colitis",
      icon: "💉",
    },
    {
      id: 7,
      title: "Peptic Ulcer",
      description:
        "Peptic ulcers are open sores in the stomach or upper small intestine caused by excess stomach acid, bacterial infection...",
      link: "/digestive-disorder/peptic-ulcer",
      icon: "🩺",
    },
    {
      id: 8,
      title: "Constipation",
      description:
        "Constipation is a common digestive issue where bowel movements become infrequent or difficult, leading to bloating...",
      link: "/digestive-disorder/constipation",
      icon: "🪑",
    },
    {
      id: 9,
      title: "Diarrhea (Atisara)",
      description:
        "Diarrhea, known as Atisara in Ayurveda, is a condition where a person experiences frequent, loose, and watery stools...",
      link: "/digestive-disorder/diarrhea",
      icon: "💧",
    },
    {
      id: 10,
      title: "Hemorrhoids (Piles)",
      description:
        "Hemorrhoids, or piles, are swollen veins in the rectum or anus, causing pain, bleeding, and discomfort...",
      link: "/digestive-disorder/hemorrhoids",
      icon: "💊",
    },
    {
      id: 11,
      title: "Dysentery (Pravahika)",
      description:
        "Dysentery, known as Pravahika in Ayurveda, is a condition characterized by inflammation of the intestines...",
      link: "/digestive-disorder/dysentery",
      icon: "🍵",
    },
    {
      id: 12,
      title: "Barrett's Esophagus",
      description:
        "Barrett's esophagus is a condition where the normal tissue lining the esophagus (the tube that carries food from the mouth to the...",
      link: "/digestive-disorder/barretts-esophagus",
      icon: "🔬",
    },
    {
      id: 13,
      title: "Dyspepsia (Agnimandya)",
      description:
        "Dyspepsia, or Agnimandya in Ayurveda, refers to chronic indigestion and weakened digestive fire (Agni), leading to...",
      link: "/digestive-disorder/dyspepsia",
      icon: "🩻",
    },
    {
      id: 14,
      title: "Bloating & Gas",
      description:
        "Bloating is a sensation of fullness in the abdomen, often accompanied by excessive gas formation. It is caused by indigestion...",
      link: "/digestive-disorder/bloating-and-gas",
      icon: "💨",
    },
    {
      id: 15,
      title: "Flatulence (Adhmana)",
      description:
        "Flatulence, known as Adhmana in Ayurveda, is the excessive accumulation of gas in the digestive tract, causing bloating...",
      link: "/digestive-disorder/flatulence",
      icon: "🌬️",
    },
    {
      id: 16,
      title: "Hyperacidity (Amlapitta)",
      description:
        "Hyperacidity, known as Amlapitta, occurs when there is excessive production of stomach acid...",
      link: "/digestive-disorder/hyperacidity",
      icon: "🍋",
    },
    {
      id: 17,
      title: "Pyorrhea (Periodontitis)",
      description:
        "Pyorrhea, also known as periodontitis, is a severe gum infection that damages the soft tissues and, if untreated, can lead to...",
      link: "/digestive-disorder/pyorrhea",
      icon: "🦷",
    },
    {
      id: 18,
      title: "Ulcerative Colitis",
      description:
        "Ulcerative Colitis (UC) is a chronic inflammatory bowel disease (IBD) that affects the lining of the colon (large intestine) and rectum...",
      link: "/digestive-disorder/ulcerative-colitis",
      icon: "🦷",
    },
    {
      id: 19,
      title: "Gastritis",
      description:
        "Gastritis is an inflammation of the stomach lining, which can cause discomfort, pain, and digestive issues. It occurs due to...",
      link: "/digestive-disorder/gastritis",
      icon: "💊",
    },
    {
      id: 20,
      title: "Gastroenteritis",
      description:
        "Gastroenteritis, commonly known as the stomach flu, is the inflammation of the stomach and intestines. It is usually caused by...",
      link: "/digestive-disorder/gastroenteritis",
      icon: "🤒",
    },
    {
      id: 21,
      title: "Celiac Disease",
      description:
        "Celiac disease is an autoimmune disorder in which the ingestion of gluten (a protein found in wheat, barley, and rye) causes the...",
      link: "/digestive-disorder/celiac-disease",
      icon: "🤒",
    },
    {
      id: 22,
      title: "Crohn's Disease",
      description:
        "Crohn's Disease is a type of inflammatory bowel disease (IBD) that causes chronic inflammation of the digestive tract...",
      link: "/digestive-disorder/crohns-disease",
      icon: "🧬",
    },
    {
      id: 23,
      title: "Fecal Incontinence",
      description:
        "Fecal incontinence is the inability to control bowel movements, leading to unintentional leakage of stool. This condition can...",
      link: "/digestive-disorder/fecal-incontinence",
      icon: "🚻",
    },
    {
      id: 24,
      title: "Lactose Intolerance",
      description:
        "Lactose intolerance refers to the inability to digest lactose, a sugar found in milk and dairy products, due to a deficiency of lactase...",
      link: "/digestive-disorder/lactose-intolerance",
      icon: "🥛",
    },
    {
      id: 25,
      title: "Hirschsprung Disease",
      description:
        "Hirschsprung disease is a congenital condition where certain nerve cells (ganglion cells) are absent in parts of the colon...",
      link: "/digestive-disorder/hirschsprung-disease",
      icon: "🩺",
    },
    {
      id: 26,
      title: "Abdominal Adhesions",
      description:
        "Abdominal adhesions are bands of scar tissue that form between internal organs and tissues, often following surgery or...",
      link: "/digestive-disorder/abdominal-adhesions",
      icon: "⚕️",
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
            Digestive Disorders
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
            Digestive disorders can impact overall health, causing issues like
            acidity, bloating, constipation, and IBS. Ayurveda focuses on
            restoring gut balance through personalized treatments, herbal
            remedies, and detox therapies like Panchakarma. By addressing the
            root cause, Ayurvedic care promotes long-term digestive wellness,
            ensuring a healthier and more harmonious life.
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
        <button className="px-5  bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA]">
          Book Appointment
        </button>
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

export default Digestive;
