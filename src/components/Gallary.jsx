import React, { useState, useRef } from "react";
import Modal from "react-modal";
// import { assets } from "../assets/assets";
import Book_Appointment from "../components/Appointment/Book_Appointment";

function Gallary() {
  const images = [
    { src: "/gallary/image_1.png", cols: 2, rows: 1 },
    { src: "/gallary/image_2.png", cols: 1, rows: 1 },
    { src: "/gallary/image_3.png", cols: 1, rows: 1 },
    { src: "/gallary/image_9.png", cols: 1, rows: 2 },
    { src: "/gallary/image_4.png", cols: 1, rows: 2 },
    { src: "/gallary/image_5.png", cols: 2, rows: 2 },
    { src: "/gallary/image_12.png", cols: 2, rows: 1 },
    { src: "/gallary/image_6.png", cols: 1, rows: 1 },
    { src: "/gallary/image_7.png", cols: 2, rows: 1 },
    { src: "/gallary/image_8.png", cols: 1, rows: 1 },
    { src: "/gallary/image_10.png", cols: 2, rows: 2 },
    { src: "/gallary/image_11.png", cols: 1, rows: 1 },
  ];
  const socialimages = [
    { src: "/gallary/social_1.png", cols: 2, rows: 1 },
    { src: "/gallary/social_2.png", cols: 1, rows: 1 },
    { src: "/gallary/social_3.png", cols: 1, rows: 1 },
    { src: "/gallary/social_4.png", cols: 1, rows: 2 },
    { src: "/gallary/social_5.png", cols: 2, rows: 2 },
    { src: "/gallary/social_6.png", cols: 1, rows: 1 },
  ];
  const videos = [
    {
      src: "/gallary/videos/agni_aayurved.mp4",
      thumbnail: "/gallary/thumbnail/thumb_1.png",
    },
    {
      src: "/gallary/videos/mukh_lepan.mp4",
      thumbnail: "/gallary/thumbnail/thumb_2.png",
    },
    {
      src: "/gallary/videos/shirodhara.mp4",
      thumbnail: "/gallary/thumbnail/thumb_3.png",
    },
  ];
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  const handleThumbnailClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsFullScreen(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const handleClose = () => {
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(""); // 'gallery' or 'social'

  // Open modal based on section
  const openModal = (index, section) => {
    setCurrentIndex(index);
    setActiveSection(section);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveSection("");
  };

  const nextImage = () => {
    const currentArray = activeSection === "gallery" ? images : socialimages;
    if (currentIndex < currentArray.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full mx-auto bg-[#F3FFEA]">
     <section className="py-16 px-4 sm:px-8 md:px-12 xl:px-40  overflow-hidden">
        <div className=" ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#394E29] mb-6">
            A Glimpse into Holistic Wellness
          </h1>
          <p className="text-[#757575] text-lg sm:text-xl  leading-relaxed">
            Step into the world of Agni Ayurved through our gallery. Explore
            moments of care, tradition, and transformation captured in our
            serene spaces, expert treatments, and community stories. Witness how
            we blend ancient wisdom with modern excellence to bring holistic
            healing to life.
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
      <section className="py-20 px-12 xl:px-40">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`col-span-${image.cols === 2 ? "2" : "1"} row-span-${
                image.rows === 2 ? "2" : "1"
              } rounded-xl overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105`}
              onClick={() => openModal(index, "gallery")}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {modalIsOpen && (
          <div
            className="fixed inset-0 bg-[#757575] bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full flex flex-col items-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  activeSection === "gallery"
                    ? images[currentIndex].src
                    : socialimages[currentIndex].src
                }
                alt="Full Screen"
                className="max-w-full max-h-full rounded-lg"
                loading="eager"
              />
              <div
                className="absolute inset-y-1/2 left-4 text-white text-3xl cursor-pointer"
                onClick={prevImage}
              >
                &#9665;
              </div>
              <div
                className="absolute inset-y-1/2 right-4 text-white text-3xl cursor-pointer"
                onClick={nextImage}
              >
                &#9655;
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="py-20 px-12 xl:px-40">
        <div className="mb-10">
          <p className="font-bold text-[#394E29]">Social Images</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px]">
          {socialimages.map((socialimage, index) => (
            <div
              key={index}
              className={`col-span-${
                socialimage.cols === 2 ? "2" : "1"
              } row-span-${
                socialimage.rows === 2 ? "2" : "1"
              } rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105`}
              onClick={() => openModal(index, "social")}
            >
              <img
                src={socialimage.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-12 xl:px-40">
        <div className="mb-10">
          <p className="font-bold text-[#394E29]">
            Know what Agni Ayurveda is with the help of Videos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
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
                <p className="text-sm opacity-90">
                  Click to watch full testimonial
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isFullScreen && (
        <div className="fixed inset-0 z-50" onClick={handleClose}>
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

export default Gallary;
