import React, { useState, useRef, useEffect } from "react";
import Book_Appointment from "../components/Appointment/Book_Appointment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  const testimonials = [
    {
      name: "Chirag Jogani",
      role: "Patient",
      review: "One of the best Ayurvedik hospital in Ahmedabad for any diagnosis. Best Dr's and staff also good, I was suffering from piles for 3 years and after coming here I got completely better within 2 months. Thankyou",
    },
    {
      name: "Nishi Pomal",
      role: "Patient",
      review: "I consulted Agni Ayurveda hospital for panchkarma therapy and I got best result there under the guidance of Doctors. Panchkarma theatre was very clean and hygienic with soothing music, procedures had done very authentically One of the best Ayurvedic hospital in Ahmedabad. Thank you Dr Dharmik and Dr Darshan.",

    },
    {
      name: "Sachin Patel",
      role: "Patient",
      review: "Agni Ayurved Hospital doctor, Dr. Dharmik well experienced and truly believers of aayurveda. I have recently visited the clinic for my father’s (58years) knee pain. They have investigated the pain area very patiently and accurately. The doctor is giving the sufficient time to understand the patient history before finalizing the treatment. They have in clinic treatment facilities for day to day treatment sessions as well. My father’s pain reduced to 60-70% after the treatment and one month of medications. Medication was quite costy but very effectively without any side effects. We are really satisfied with the outcome as knee replacement was not the option.Thank you 🙏🏻",
    },
    {
      name: "Sheikh Tayyab Raja",
      role: "Patient",
      review: "Best place for Panchkarma, the results speak for themselves. I lost about 6 kgs in about 3 weeks and the visible effect on my body is unbelievable. Dr. Darshan is an excellent professional, his attention to the smallest details is exceptional. Highly recommended for Panchkarma Treatment in Ahmedabad.",
    },
    {
      name: "Mansi Patel",
      role: "Patient",
      review: "Visited Agni ayurved hospital in January 2024 ,I am suffering from hyper acidity, abdominal pain and vomiting since 12 years..After 3 months of treatment, I am completely fine...Dr Dharmik Kachchhi is an incredibly knowledgeable and compassionate practitioner. He took the time to listen attentively to my health concerns, thoroughly understanding my medical history and all.It was evident that Dr Dharmik Kachchhi truly cares about the wellbeing of his patients.",
    },
    {
      name: "Yanimesh Patel",
      role: "Patient",
      review: "I was suffering from hazzy vision and weak eye sight and due to my screen time burning in eyes also, Then i went to Agni Ayurved Hospital and consult Dr.Rushi he check my nadi and suggest me akshi tarpan and medicines.It gives me cooling effect in eyes also improve my eyesight. Best Ayurvedic Doctor in Ahemdabad.",
    },
    {
      name: "Lubna Saiyed",
      role: "Patient",
      review: "Before 4 months i was diagnosed with Chronic Kidney Disease ,I was suffering from Swelling in feets and very often micturation urges. I can't go to any gathering and also disturbed emotionally. Then, one of my friend suggest me about Agni Ayurvedic Hospital so I consultant to Dr.Dharmik after 15 days to medication my swelling gradually decrease also relives other symptoms.Best Ayurvedic Hospital in Ahemdabad.",
    },
    {
      name: "Vishvajeetsinh Zala",
      role: "Patient",
      review: "My 10-year-old child was suffering from coughing, fever, and tonsillitis. Whenever seasonal changes happen, he develops tonsillitis. Then his teacher suggested we consult an Ayurvedic doctor because, due to his illness, he always skips his school. We went to Agni Ayurvedic Hospital, Dr.Rushi checked his nadi , prescribed medicines, and guided me for medical condition. By only taking 15 days of medicine, he is well now and also never had this complaint for 6 months. Thanks to Dr.Rushi Sir",
    },
    {
      name: "Gopal Suratwala",
      role: "Patient",
      review: "Great service....doctors are very kind and helpful...if you want best treatment of panchkarma you must visit this.Cured Psoriasis within 3 months with the help of ayurvedic medicine and panchakarma.He is the best ayurvedic doctor in ahmedabad.",
    },
    {
      name: "Harsh Patel",
      role: "Patient",
      review: "I really appreciate and highly recommend Dr. Rushi Sir for Piles and Fissures Ayurvedic treatment. He is very gentle& friendly . He made me comfortable in all aspects.I am really thankful and grateful to him to check my health condition almost every week.",
    },
    {
      name: "Meena Jesrani",
      role: "Patient",
      review: "Very good ayurvedic hospital. Doctors have so much confidence in recovering patients, and that is absolutely true. They also help change your lifestyle in a better way.The staff is also good and very polite. They help you each and every time. The cleanliness of the hospital is also good.The doctor who treated my mother for back pain was excellent. They gave us enough time to help my mother recover and supported us like a family.Overall, I have not seen any problems.",
    }

  ];

  const videoTestimonials = [
    {
      src: "https://drive.google.com/file/d/1FhkY8g7lraVnT51oSLw7Me8_4TBcP-18/view?usp=sharing",
      thumbnail: "/testimonials/thumbnails/thumb_1.png",
      title: "Patient Success Story - Arthritis Treatment"
    },
    {
      src: "https://drive.google.com/file/d/1XzfapIeqors_ZCi9duXJAk_6SxBNacuk/view?usp=sharing",
      thumbnail: "/testimonials/thumbnails/thumb_2.png",
      title: "Ayurvedic Treatment for Digestive Issues"
    },
    {
      src: "https://drive.google.com/file/d/1rhbwNGhwobtnts3W0O7Vc4cFWUg3a18m/view?usp=sharing",
      thumbnail: "/testimonials/thumbnails/thumb_3.png",
      title: "Panchkarma Experience"
    },
    {
      src: "https://drive.google.com/file/d/1vL_Eu7uMlc-fp1nXEhOQ4ooVUCTJxqEV/view?usp=drive_link",
      thumbnail: "/testimonials/thumbnails/thumb_4.png",
      title: "Stress Management Success"
    },
    {
      src: "https://drive.google.com/file/d/1iH95gcz3r_cBGpn-baU22_fSsii9qdm5/view?usp=sharing",
      thumbnail: "/testimonials/thumbnails/thumb_6.png",
      title: "Skin Treatment Journey"
    },
    {
      src: "https://drive.google.com/file/d/1eFiCJfYJ-wXC4Wv0qP6yy_QJGTk7wHDS/view?usp=sharing",
      thumbnail: "/testimonials/thumbnails/thumb_7.png",
      title: "Skin Treatment Journey"
    },
    {
      src: "https://drive.google.com/file/d/15r7MUK1ha61hPayho4NsCTzIP4Yp_IwF/view?usp=sharing",
      thumbnail: "/testimonials/thumbnails/thumb_5.png",
      title: "Skin Treatment Journey"
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const handleThumbnailClick = (videoSrc) => {
    // Convert Google Drive link to embeddable format if needed
    let processedSrc = videoSrc;
    if (videoSrc.includes('drive.google.com')) {
      const fileId = videoSrc.split('/')[5];
      processedSrc = `https://drive.google.com/file/d/${fileId}/preview`;
    }
    setCurrentVideo(processedSrc);
    setIsFullScreen(true);
  };

  useEffect(() => {
    if (isFullScreen && videoRef.current) {
      // Small delay to ensure smooth playback
      setTimeout(() => {
        videoRef.current.play().catch(error => {
          console.log("Auto-play failed:", error);
        });
      }, 100);
    }
  }, [isFullScreen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsFullScreen(false);
    setCurrentVideo(null);
  };

  const [visibleFormId, setVisibleFormId] = useState(null);

  const handleButtonClick = (formId) => {
    setVisibleFormId(formId);
  };

  const closeForm = () => {
    setVisibleFormId(null);
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-b from-[#F3FFEA] to-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#5FA02E]/5 rounded-t-3xl"></div>
        <div className="relative">
          <h1 className="font-bold text-[#394E29] text-3xl sm:text-4xl md:text-5xl mb-6">
            Patient <span className="text-[#5FA02E]">Testimonials</span>
          </h1>
          <p className="text-[#757575] text-lg sm:text-xl max-w-3xl">
            Hear from our patients about their experiences with Agni Ayurved. Their stories reflect our commitment to holistic healing and personalized care.
          </p>
        </div>
      </section>
      {visibleFormId === "form1" && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="relative">
            <Book_Appointment closeForm={closeForm} />
          </div>
        </div>
      )}

      {/* Written Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#394E29] mb-4">
            Patient Stories
          </h2>
          <p className="text-[#757575] text-lg">
            Real experiences from our valued patients
          </p>
        </div>
        <div className="relative">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-[320px] flex flex-col transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#5FA02E]/10 flex items-center justify-center mr-4">
                      <span className="text-[#5FA02E] font-semibold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#394E29] text-lg">{testimonial.name}</h3>
                      <p className="text-[#757575] text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <div className="absolute top-0 left-0 text-4xl text-[#5FA02E]/20 font-serif">"</div>
                    <p className="text-[#757575] text-base pl-6 pt-2">
                      {testimonial.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 bg-gradient-to-b from-white to-[#F3FFEA]">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#394E29] mb-4">
            Video Testimonials
          </h2>
          <p className="text-[#757575] text-lg max-w-2xl mx-auto">
            Watch our patients share their healing journeys and experiences with Agni Ayurved's treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              onClick={() => handleThumbnailClick(video.src)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#5FA02E] text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3v18l15-9L5 3z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm opacity-90">Click to watch full testimonial</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Screen Video Modal */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50"
          onClick={handleClose}
        >
          {/* Mobile View */}
          <div className="md:hidden h-screen w-screen flex items-center justify-center bg-[#757575]/90 backdrop-blur-md">
            <div className="relative w-full h-full max-w-2xl mx-auto">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-white hover:text-[#5FA02E] transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Player */}
              {currentVideo.includes('drive.google.com') ? (
                <iframe
                  src={currentVideo}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  ref={videoRef}
                  src={currentVideo}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  onEnded={handleClose}
                ></video>
              )}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-center h-full p-6">
            <div
              className="relative w-[90%] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-white hover:text-[#5FA02E] transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative pt-[56.25%]">
                {currentVideo.includes('drive.google.com') ? (
                  <iframe
                    src={currentVideo}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    ref={videoRef}
                    src={currentVideo}
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    onEnded={handleClose}
                  ></video>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Testimonials; 