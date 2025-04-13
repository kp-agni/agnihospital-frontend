import React, { useState, useRef, useEffect } from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";

function Basic_panchkarma() {
  const cardData = [
    {
      id: 1,
      title: "Vamana (Emesis Therapy)",
      content: `
            **What It Is:** A detoxifying therapy involving induced vomiting to expel toxins and excess Kapha dosha from the body. It begins with preparatory treatments like oleation and steaming.
      
            **When It Works:** Effective for respiratory conditions, chronic allergies, skin disorders, and digestive issues like indigestion and bloating.
          `,
      image: "/panchkarma/basic-panch/card1.png",
    },
    {
      id: 2,
      title: "Virechana (Purgation Therapy)",
      content: `
            **What It Is:** A therapy aimed at cleansing the liver and intestines through induced purgation, focusing on expelling Pitta-related toxins.
      
            **When It Works:** Helpful for hyperacidity, liver disorders, skin conditions like eczema, and hormonal imbalances.
          `,
      image: "/panchkarma/basic-panch/card2.png",
    },
    {
      id: 3,
      title: "Basti (Enema Therapy)",
      content: `
            **What It Is:** A colon-cleansing therapy using medicated oils or herbal decoctions to balance Vata dosha.
      
            **When It Works:** Addresses joint pain, constipation, arthritis, and neurological disorders.
          `,
      image: "/panchkarma/basic-panch/card3.png",
    },
    {
      id: 4,
      title: "Rakta Mokshan (Bloodletting Therapy)",
      content: `
            **What It Is:** A purification therapy involving controlled removal of impure blood to detoxify and balance the body. It can be done using leeches or instruments.
      
            **When It Works:** Beneficial for conditions like skin diseases (psoriasis, eczema), gout, hypertension, and blood-related disorders.
          `,
      image: "/panchkarma/basic-panch/card4.png",
    },
    {
      id: 5,
      title: "Nasya (Nasal Therapy)",
      content: `
            **What It Is:** A therapy focused on cleansing and nourishing the nasal passages using herbal oils or powders.
      
            **When It Works:** Effective for sinusitis, migraines, nasal congestion, and neurological disorders.
          `,
      image: "/panchkarma/basic-panch/card5.png",
    },
    {
      id: 6,
      title: "Shirodhara (Oil Pouring Therapy)",
      content: `
            **What It Is:** A relaxing therapy where warm herbal oils are gently poured on the forehead, promoting mental clarity and calmness.
      
            **When It Works:** Helpful for insomnia, stress, anxiety, and memory loss.
          `,
      image: "/panchkarma/basic-panch/card6.png",
    },
    {
      id: 7,
      title: "Shirobasti",
      content: `
            **What It Is:** A therapy where warm herbal oils are retained in a cap placed over the head, targeting neurological health and mental wellness.
      
            **When It Works:** Effective for migraines, chronic headaches, neurological disorders, and insomnia.
          `,
      image: "/panchkarma/basic-panch/card7.png",
    },
    {
      id: 8,
      title: "Netra Tarpana",
      content: `
            **What It Is:** A rejuvenating therapy where medicated ghee is poured over the eyes to nourish and improve eye health.
      
            **When It Works:** Helpful for eye strain, dry eyes, vision improvement, and early signs of glaucoma or cataracts.
          `,
      image: "/panchkarma/basic-panch/card8.png",
    },
    {
      id: 9,
      title: "Shastika Shali Pinda Swedana",
      content: `
            **What It Is:** A nourishing therapy using boluses of cooked rice dipped in herbal milk to massage the body.
      
            **When It Works:** Used for muscle strengthening, joint pain relief, paralysis, and degenerative conditions like arthritis.
          `,
      image: "/panchkarma/basic-panch/card9.png",
    },
    {
      id: 10,
      title: "Pizhichil",
      content: `
            **What It Is:** A luxurious therapy where warm herbal oils are continuously poured over the body with gentle massage.
      
            **When It Works:** Beneficial for nervous disorders, rheumatic conditions, and overall rejuvenation.
          `,
      image: "/panchkarma/basic-panch/card10.png",
    },
    {
      id: 11,
      title: "Patra Pinda Swedana",
      content: `
            **What It Is:** A sweat-inducing therapy using bundles of medicinal leaves to massage the body, relieving stiffness and pain.
      
            **When It Works:** Effective for arthritis, muscle stiffness, and inflammatory conditions.
          `,
      image: "/panchkarma/basic-panch/card11.png",
    },
    {
      id: 12,
      title: "Nadi Swedana",
      content: `
            **What It Is:** A localized steam therapy using herbal decoctions for deep tissue penetration.
      
            **When It Works:** Ideal for pain relief, swelling reduction, and joint mobility improvement.
          `,
      image: "/panchkarma/basic-panch/card12.png",
    },
    {
      id: 13,
      title: "Hrid Basti",
      content: `
            **What It Is:** An oil-retaining therapy applied over the chest to support heart health.
      
            **When It Works:** Addresses cardiac disorders, respiratory issues, and emotional well-being.
          `,
      image: "/panchkarma/basic-panch/card13.png",
    },
    {
      id: 14,
      title: "Kati Basti",
      content: `
            **What It Is:** A therapy involving medicated oil retention over the lower back for pain relief.
      
            **When It Works:** Helpful for sciatica, lumbar spondylosis, and chronic back pain.
          `,
      image: "/panchkarma/basic-panch/card14.png",
    },
    {
      id: 15,
      title: "Janu Basti",
      content: `
            **What It Is:** A similar therapy focusing on the knees to relieve joint pain and stiffness.
      
            **When It Works:** Effective for osteoarthritis, ligament injuries, and degenerative joint conditions.
          `,
      image: "/panchkarma/basic-panch/card15.png",
    },
    {
      id: 16,
      title: "Greeva Basti",
      content: `
            **What It Is:** A targeted therapy for the neck using retained medicated oil to alleviate stiffness and pain.
      
            **When It Works:** Addresses cervical spondylosis, neck pain, and frozen shoulder.
          `,
      image: "/panchkarma/basic-panch/card16.png",
    },
    {
      id: 17,
      title: "Abhyanga",
      content: `
            **What It Is:** A full-body Ayurvedic massage using warm herbal oils to promote relaxation and rejuvenation.
      
            **When It Works:** Effective for stress relief, improving circulation, skin health, and muscle relaxation.
          `,
      image: "/panchkarma/basic-panch/card17.png",
    },
    {
      id: 18,
      title: "Steam Bath (Bashpa Swedana)",
      content: `
            **What It Is:** A therapeutic steam treatment to induce sweating and promote detoxification.
      
            **When It Works:** Ideal for weight loss, improving skin health, and promoting relaxation.
          `,
      image: "/panchkarma/basic-panch/card18.png",
    },
  ];

  const [visibleFormId, setVisibleFormId] = useState(null);

  const handleButtonClick = (formId) => {
    setVisibleFormId(formId);
  };

  const closeForm = () => {
    setVisibleFormId(null);
  };

  return (
    <div>
      <img src="/hero_image/basic_panch_hero.png" alt="" loading="eager" />
      <div className=" w-full mx-auto">
        {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
        <section className="py-20 px-12 xl:px-40 bg-[#F3FFEA]">
          <h3 className="font-bold  text-[#394E29] leading-[54px]">
            What is Panchakarma?
          </h3>
          <div className="text-[#757575] mt-8 text-justify leading-8 font-normal">
            <p>
              Panchakarma is a highly effective Ayurvedic therapy that plays a
              vital role in maintaining a healthy body. This ancient healing
              technique offers five significant benefits that promote overall
              well-being. One of the key benefits of Panchakarma is the process
              of detoxifying the body and rejuvenating the mind. Through a
              series of stages, Panchakarma focuses on purifying the body at
              various levels, thereby eliminating toxins (ama) and enhancing
              digestive fire (agni)...
            </p>
            <p>
              The accumulation of toxins in the body can result in a wide range
              of health issues, such as poor digestion, sluggish metabolism,
              fatigue, and mental fog. Panchakarma's detoxification process
              helps to remove these toxins and prevent the onset of diseases. It
              also rejuvenates the mind by reducing stress and promoting
              relaxation. The therapy involves various treatments like Vaman,
              Virechan, Vasti, Nasyam, and Raktamokshan, which work in tandem to
              cleanse the body of impurities, thus improving overall health.
            </p>
            <p className="mt-4 mb-4">
              Furthermore, Panchakarma increases the digestive fire (agni),
              which helps in the proper absorption of nutrients and removal of
              waste materials. This leads to improved digestion, metabolism, and
              energy levels. Panchakarma also balances the doshas (vata, pitta,
              and kapha), which are the primary energy systems of the body. An
              imbalance in doshas can lead to various ailments, and Panchakarma
              helps in restoring the balance, thereby promoting overall
              health.It eliminates toxins, enhances digestive fire, balances
              doshas, reduces stress, and promotes relaxation.
            </p>
            <p>
              Experience the transformative power of Panchakarma and unlock your
              body's natural healing potential.
            </p>
          </div>
        </section>
        <section className="bg-[#5FA02E] py-20 px-12 xl:px-56 flex items-center justify-center text-center">
          <div className="font-bold text-3xl text-white">
            <h2>Our Panchakarma Treatments</h2>
          </div>
        </section>
        <section className="py-20 px-12 xl:px-40 bg-[#F3FFEA] max-[400px]:py-36">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden w-full  
      ${index % 2 === 0 ? "mt-4" : "mt-0"}`}
              >
                {/* Image Section */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[216px] object-cover"
                  loading="lazy"
                />
                {/* Content Section */}
                <div className="p-6 h-auto">
                  <h2 className="text-xl font-bold mb-4 text-[#5FA02E]">{`${
                    index + 1
                  }. ${card.title}`}</h2>
                  <p className="text-[#757575] mb-2">
                    <span className="text-[20px] font-bold block">
                      What It Is:
                    </span>
                    <span className="text-[#757575] text-[20px]">
                      {card.content
                        .split("\n")[1]
                        ?.replace("**What It Is:**", "")
                        .trim()}
                    </span>
                  </p>
                  <p className="text-[#757575]">
                    <span className="text-[20px] font-bold block">
                      When It Works:
                    </span>
                    <span className="text-[#757575] text-[20px]">
                      {card.content
                        .split("\n")[3]
                        ?.replace("**When It Works:**", "")
                        .trim()}
                    </span>
                  </p>
                </div>
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

export default Basic_panchkarma;
