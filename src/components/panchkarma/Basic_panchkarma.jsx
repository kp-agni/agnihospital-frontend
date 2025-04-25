import React, { useState, useRef, useEffect } from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";

function Basic_panchakarma() {
  const cardData = [
    {
      id: 1,
      title: "Vamana (Emesis Therapy)",
      content: `
            **What It Is:** A detoxifying therapy involving induced vomiting to expel toxins and excess Kapha dosha from the body. It begins with preparatory treatments like oleation and steaming.
      
            **Indications:** Diabetes, Asthma, Chronic Cold, Chronic sinusitis, Chronic indigestion, Skin diseases, Food poisoning, Epilepsy, Anorexia, Specific Abdominal disorders & In various "Kapha" predominant diseases.
          `,
      image: "/panchkarma/basic-panch/vaman.png",
    },
    {
      id: 2,
      title: "Virechana (Purgation Therapy)",
      content: `
            **What It Is:** A therapy aimed at cleansing the liver and intestines through induced purgation, focusing on expelling Pitta-related toxins.
      
            **Indications:** Chronic fever, Skin diseases, Acne, Allergic disorders, Eczema, Psoriasis, Ascites, Arthritis, Jaundice, Infertility, Oligospermia, Hyper Acidity, Worms, Gout & in various "PITTA" predominant diseases.
          `,
      image: "/panchkarma/basic-panch/virechan.png",
    },
    {
      id: 3,
      title: "Basti (Enema Therapy)",
      content: `
            **What It Is:** A colon-cleansing therapy using medicated oils or herbal decoctions to balance Vata dosha.
      
            **Indications:** Chronic constipation, Paralysis, Sciatica, Backache, Gynaec disorders, Infertility, Oligospermia, Arthritis, Heart disease & All types of pains.
          `,
      image: "/panchkarma/basic-panch/basti.png",
    },
    {
      id: 4,
      title: "Rakta Mokshan (Bloodletting Therapy)",
      content: `
            **What It Is:** A purification therapy involving controlled removal of impure blood to detoxify and balance the body. It can be done using leeches or instruments.
      
            **Indications:** Gout, Leucoderma, Skin diseases, Scabies, Chronic itching, Skin rashes, Alopecia, Urticaria, Hyper tension, Enlargement of liver & spleen.
          `,
      image: "/panchkarma/basic-panch/raktmokshn.png",
    },
    {
      id: 5,
      title: "Nasya (Nasal Therapy)",
      content: `
            **What It Is:** A therapy focused on cleansing and nourishing the nasal passages using herbal oils or powders.
      
            **Indications:** Various disease of eye, ear, nose, throat & head, Mental disorders, Epilepsy, Insomnia, Hair problems, Headache, Migraine, & To promote the intelligence and memory & mental functions.
          `,
      image: "/panchkarma/basic-panch/nasya.png",
    },
    {
      id: 6,
      title: "Shirodhara (Oil Pouring Therapy)",
      content: `
            **What It Is:** A relaxing therapy where warm herbal oils are gently poured on the forehead, promoting mental clarity and calmness.
      
            **Indications:** Headache, Hyper tension, Dandruff, Grey hair, Sleeplessness, Paralysis, Mental disorders, Diseases of eye, Stress, Depression, Lack of confidence, Lack of concentration, Epilepsy, Dementia, Migraine, For relaxation of mind, To improve the function of 5 senses, To improve intelligence & To promote self esteem.
          `,
      image: "/panchkarma/basic-panch/shirodhara.png",
    },
    {
      id: 7,
      title: "Shirobasti",
      content: `
            **What It Is:** A therapy where warm herbal oils are retained in a cap placed over the head, targeting neurological health and mental wellness.
      
            **Indications:** Diseases of head, Hair problems, Numbness in head, Facial paralysis, Myopia, Mental disorders & For mental relaxation.
          `,
      image: "/panchkarma/basic-panch/shirobasti.png",
    },
    {
      id: 8,
      title: "Netra Tarpana",
      content: `
            **What It Is:** A rejuvenating therapy where medicated ghee is poured over the eyes to nourish and improve eye health.
      
            **Indications:** Fresh Myopia & Hypermetropia, Eye strain, Redness of eyes, Dryness in eye, Watering of eyes, Burning of eyes & Diseases of retina.
          `,
      image: "/panchkarma/basic-panch/netratarpan.png",
    },
    {
      id: 9,
      title: "Shastika Shali Pinda Swedana",
      content: `
            **What It Is:** A nourishing therapy using boluses of cooked rice dipped in herbal milk to massage the body.
      
            **Indications:** Polio myelitis, Muscular dystrophy, Arthritis, Stiffness of body, Paralysis, Cerebral Palsy & To increase vitality.
          `,
      image: "/panchkarma/basic-panch/shastishalipind.png",
    },
    {
      id: 10,
      title: "Pizhichil",
      content: `
            **What It Is:** A luxurious therapy where warm herbal oils are continuously poured over the body with gentle massage.
      
            **Indications:** Arthritic pain, Physical & sexual weakness, Exhaustion, Stiffness of body, Hypertension & To increase vitality.
          `,
      image: "/panchkarma/basic-panch/pizhichil.png",
    },
    {
      id: 11,
      title: "Patra Pinda Swedana",
      content: `
            **What It Is:** A sweat-inducing therapy using bundles of medicinal leaves to massage the body, relieving stiffness and pain.
      
            **Indications:** Polio myelitis, Paralysis, Nervous disorders, Backache, Frozen shoulder, Arthritis, Fatigue & Various "Vatta" predominant diseases.
          `,
      image: "/panchkarma/basic-panch/patrapind.png",
    },
    {
      id: 12,
      title: "Nadi Swedana",
      content: `
            **What It Is:** A localized steam therapy using herbal decoctions for deep tissue penetration.
      
            **Indications:** Backache, Arthritis, Cervical Spondylitis, It relieves pain & oedema of joints, Removes muscular stiffness, Removes malas of body, Improves joint mobility & blood circulation.
          `,
      image: "/panchkarma/basic-panch/nadisvedana.png",
    },
    {
      id: 13,
      title: "Hrid Basti",
      content: `
            **What It Is:** An oil-retaining therapy applied over the chest to support heart health.
      
            **Indications:** Paralysis, Arthritic pain, Exhaustion, Neuralgic pain, Stiffness of body, Various "Vatta" predominant diseases & Pre-treatment for panchakarma.
          `,
      image: "/panchkarma/basic-panch/hridbadti.png",
    },
    {
      id: 14,
      title: "Kati Basti",
      content: `
            **What It Is:** A therapy involving medicated oil retention over the lower back for pain relief.
      
            **Indications:** Backache (particularly the lumbar region), Degenerative spine changes, Compressed discs, Osteoporosis, Sciatica, Hip pain, Shoulder pain, Spinal cord compression.
          `,
      image: "/panchkarma/basic-panch/card14.png",
    },
    {
      id: 15,
      title: "Janu Basti",
      content: `
            **What It Is:** A similar therapy focusing on the knees to relieve joint pain and stiffness.
      
            **Indications:** Knee pain and stiffness, Osteoarthritis of knee, Sports injuries, Post-surgical recovery, Joint inflammation, Reduced mobility, Chronic knee conditions, Preventive knee care.
          `,
      image: "/panchkarma/basic-panch/card15.png",
    },
    {
      id: 16,
      title: "Griva Basti",
      content: `
            **What It Is:** A targeted therapy for the neck using retained medicated oil to alleviate stiffness and pain.
      
            **Indications:** Neck pain and stiffness, Cervical spondylosis, Tension headaches, Shoulder pain, Poor posture, Whiplash injuries, Stress-related neck tension, Degenerative neck conditions.
          `,
      image: "/panchkarma/basic-panch/card16.png",
    },
    {
      id: 17,
      title: "Abhyanga",
      content: `
            **What It Is:** A full-body Ayurvedic massage using warm herbal oils to promote relaxation and rejuvenation.
      
            **Indications:** Chronic fatigue and low energy levels, Muscle stiffness and joint pain, Poor circulation and cold extremities, Stress, anxiety, and sleep disorders, Dry skin and premature aging, Weakened immune system, Vata imbalance symptoms, Post-exercise recovery, General wellness maintenance.
          `,
      image: "/panchkarma/basic-panch/card17.png",
    },
    {
      id: 18,
      title: "Steam Bath (Bashpa Svedana)",
      content: `
            **What It Is:** A therapeutic steam treatment to induce sweating and promote detoxification.
      
            **Indications:** Respiratory conditions, Sinus congestion, Muscle stiffness, Joint pain, Poor circulation, Skin conditions, Stress and anxiety, Detoxification needs.
          `,
      image: "/panchkarma/basic-panch/card18.png",
    },
    {
      id: 19,
      title: "Karna Purana",
      content: `
            **What It Is:** The ayurvedic procedure of instilling medicated oils or clarified butter (ghee) in the ears.
      
            **Indications:** Tinnitus, Deafness, Earache, Chronic Sinusitis, Facial paralysis, Torticolis.
          `,
      image: "/panchkarma/basic-panch/karanpuran.png",
    },
    {
      id: 20,
      title: "Matra Basti",
      content: `
            **What It Is:** Daily oil enema used for vata vitiation and weakness.
      
            **Indications:** Vata vitiation, excessive weakness, in sexual intercourse, excessive travelling, excessive walking, excessive lifting of weights, excessive work, weakness.
          `,
      image: "/panchkarma/basic-panch/matrabasti.png",
    },
    {
      id: 21,
      title: "Netra Dhara",
      content: `
            **What It Is:** A special therapy for the eye using medicated decoction or oils.
      
            **Indications:** Conjunctivitis, Watering, Dry eye, Eye strain, Eye Redness, Blepharitis.
          `,
      image: "/panchkarma/basic-panch/netradhara.png",
    },
    {
      id: 22,
      title: "Bidalak Lepam",
      content: `
            **What It Is:** A special therapy for the eye using medicated lepam (mixture of water and medicated powder).
      
            **Indications:** Conjunctivitis, Watering, Dry eye, Eye strain, Eye Redness, Blepharitis.
          `,
      image: "/panchkarma/basic-panch/bidalak.png",
    },
    {
      id: 23,
      title: "Dhoompan",
      content: `
            **What It Is:** Traditional therapeutic method using therapeutic smoke for ears and nose.
      
            **Indications:** Treatment of vata and kapha.
          `,
      image: "/panchkarma/basic-panch/dhoompan.png",
    },
    {
      id: 24,
      title: "Mukh Lepam (Ayurvedic Facial)",
      content: `
            **What It Is:** Ayurvedic facial treatment using special herbal oils or creams.
      
            **Indications:** For all type of skin diseases and beauty treatment.
          `,
      image: "/panchkarma/basic-panch/mukhalepam.png",
    },
    {
      id: 25,
      title: "Prustha Basti",
      content: `
            **What It Is:** An important Ayurvedic treatment for pain management focusing on the spine.
      
            **Indications:** Backache (particularly the lumbar region), Degenerative spine changes, Compressed discs, Osteoporosis, Sciatica, Hip pain, Shoulder pain, Spinal cord compression.
          `,
      image: "/panchkarma/basic-panch/prushtabasti.png",
    },
    {
      id: 26,
      title: "Nabhi Basti",
      content: `
            **What It Is:** A therapy where a small compartment is constructed around the navel with wet flour of black gram.
      
            **Indications:** Relieves digestive symptoms such as irritable bowel, flatulence, poor appetite, constipation and abdominal discomfort.
          `,
      image: "/panchkarma/basic-panch/nabhibasti.png",
    },
    {
      id: 27,
      title: "Nabhi Puran",
      content: `
            **What It Is:** An Ayurvedic treatment method where navel pit is filled with medicaments, mainly medicated oils.
      
            **Indications:** Gastritis, uncontrolled diarrhea, sproue, irritated bowl syndrome (IBS), abdominal pain.
          `,
      image: "/panchkarma/basic-panch/nabhipuran.png",
    },
    {
      id: 28,
      title: "Valuka Sveda",
      content: `
            **What It Is:** A treatment using heated sand for fomentation of painful parts.
      
            **Indications:** It is used mainly to provide relief from pain, inflammation, swelling and stiffness (catch) associated with heel pain.
          `,
      image: "/panchkarma/basic-panch/valukasvedana.png",
    },
    {
      id: 29,
      title: "Upanah Sveda",
      content: `
            **What It Is:** A treatment using multiple medicinal powder for fomentation of painful parts.
      
            **Indications:** It is used mainly to provide relief from pain, inflammation, swelling and stiffness (catch) associated with heel pain and knee-joint pain.
          `,
      image: "/panchkarma/basic-panch/upanahsvedana.png",
    },
    {
      id: 30,
      title: "Ayurvedic Music and Sound Therapy",
      content: `
            **What It Is:** Therapy using traditional "Raagas" and special voices like Shankh, Sowing bowl, Omkaar, Mantras, Ghantnaad (Bell).
      
            **Indications:** All psychiatric disorder, Garbh Sanskar, Viral diseases, Stress and depression and multiple kind of pain.
          `,
      image: "/panchkarma/basic-panch/musictherapy.png",
    },
    {
      id: 31,
      title: "Agni Karm",
      content: `
            **What It Is:** An Ancient Medical Technique derived from Ayurveda for thermal cautery.
      
            **Indications:** Painful conditions of musculoskeletal disorders, Hard, elevated and desensitized vranas/ulcer, Granthi, Arsas, Bhagandara, Arbuda, Sleepada, Charmakeela and Antravridhi, Severe bleeding condition.
          `,
      image: "/panchkarma/basic-panch/agnikarma.png",
    },
    {
      id: 32,
      title: "Uttar Basti",
      content: `
            **What It Is:** A Panchakarma treatment where liquid medicines are administered through urethral or vaginal routes.
      
            **Indications:** Menstrual problems like amenorrhea, dysmenorrhea, menorrhegia, leucorrhea, primary and secondary infertility, to remove Tubal blocks, recurrent abortions, PCOS.
          `,
      image: "/panchkarma/basic-panch/uttarbasti.png",
    }
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
              Virechan, Basti, Nasyam, and Raktamokshan, which work in tandem to
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
                className={`bg-white rounded-2xl shadow-lg overflow-hidden w-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
      ${index % 2 === 0 ? "mt-4" : "mt-0"}`}
              >
                {/* Image Section */}
                <div className="relative w-full h-[280px] overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
                {/* Content Section */}
                <div className="p-8 h-auto">
                  <h2 className="text-2xl font-bold mb-6 text-[#5FA02E] border-b-2 border-[#5FA02E] pb-2">{`${
                    index + 1
                  }. ${card.title}`}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#757575] mb-2">
                        What It Is:
                      </h3>
                      <p className="text-[#757575] text-lg leading-relaxed">
                        {card.content
                          .split("\n")[1]
                          ?.replace("**What It Is:**", "")
                          .trim()}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#757575] mb-2">
                        Indications:
                      </h3>
                      <p className="text-[#757575] text-lg leading-relaxed">
                        {card.content
                          .split("\n")[3]
                          ?.replace("**Indications:**", "")
                          .trim()}
                      </p>
                    </div>
                  </div>
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

export default Basic_panchakarma;
