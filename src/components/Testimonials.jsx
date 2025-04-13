import React, { useState, useRef, useEffect } from "react";
import Book_Appointment from "../components/Appointment/Book_Appointment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoUrls from "../config/videoUrls";

function Testimonials() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Patient",
      review: "The treatment I received at Agni Ayurved was exceptional. The doctors were very knowledgeable and the staff was extremely helpful. My health has improved significantly.",
    },
    {
      name: "Priya Patel",
      role: "Patient",
      review: "I had been suffering from chronic back pain for years. After just a few sessions of Panchakarma, I feel much better. The holistic approach really works!",
    },
    {
      name: "Amit Kumar",
      role: "Patient",
      review: "The personalized care and attention to detail at Agni Ayurved is unmatched. They don't just treat symptoms, they treat the root cause of the problem.",
    },
    {
      name: "Neha Gupta",
      role: "Patient",
      review: "The environment is so peaceful and healing. The doctors take time to understand your concerns and provide effective solutions. Highly recommended!",
    }
  ];

  const videoTestimonials = [
    {
      src: "/testimonials/videos/testimonial1.mp4",
      thumbnail: "/testimonials/thumbnails/thumb_1.png",
      title: "Patient Success Story - Arthritis Treatment"
    },
    {
      src: "/testimonials/videos/testimonial2.mp4",
      thumbnail: "/testimonials/thumbnails/thumb_2.png",
      title: "Ayurvedic Treatment for Digestive Issues"
    },
    {
      src: videoUrls.testimonials.testimonial3,
      thumbnail: "/testimonials/thumbnails/thumb_3.png",
      title: "Panchakarma Experience"
    },
    {
      src: videoUrls.testimonials.testimonial4,
      thumbnail: "/testimonials/thumbnails/thumb_4.png",
      title: "Stress Management Success"
    },
    {
      src: "/testimonials/videos/testimonial6.mp4",
      thumbnail: "/testimonials/thumbnails/thumb_6.png",
      title: "Skin Treatment Journey"
    }
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleThumbnailClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
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
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-[300px] flex flex-col transform hover:-translate-y-1">
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
                  alt={video.title}
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
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
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
          <div className=" md:hidden h-screen w-screen flex items-center justify-center bg-[#757575]/90 backdrop-blur-md">
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
              <video
                ref={videoRef}
                src={currentVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
                onEnded={handleClose}
              ></video>
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
                <video
                  ref={videoRef}
                  src={currentVideo}
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  onEnded={handleClose}
                ></video>
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