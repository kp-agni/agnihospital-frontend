import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import Book_Appointment from "../components/Appointment/Book_Appointment";
import useAppointmentForm from "../hook/useAppointmentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open
  const [isSticky, setIsSticky] = useState(false);

  // Refs to detect clicks outside the dropdowns
  const aboutRef = useRef(null);
  const treatmentRef = useRef(null);
  const facilityRef = useRef(null);
  const panchkarmaRef = useRef(null);

  // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !aboutRef.current?.contains(e.target) &&
        !treatmentRef.current?.contains(e.target) &&
        !facilityRef.current?.contains(e.target) &&
        !panchkarmaRef.current?.contains(e.target)
      ) {
        setOpenDropdown(null); // Close all dropdowns when clicking outside
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    // If the current dropdown is open, close it; otherwise, open the clicked one
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown
    } else {
      setOpenDropdown(dropdownName); // Open the new dropdown
    }
  };

  const handleLinkClick = (path) => {
    window.location.href = path; // Trigger a full page reload before navigating
  };

  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  return (
    <div>
      <header className="hidden xl:flex items-center justify-between px-12 py-4 bg-[#F3FFEA]">
        <img src={assets.header_logo} alt="Logo" />
        <div className="flex items-center space-x-6 text-[#5FA02E]">
          <img src={assets.timing} alt="" className="items-start" />
          <div className="flex flex-col">
            <span className="font-semibold text-[16px] mb-1">OPD Timing</span>
            <p className="text-[14px]">9:00 AM to 1:00 PM</p>
            <p className="text-[14px]">5:00 PM to 9:00 PM</p>
          </div>
          <img src={assets.call} alt="" className="items-start" />
          <div className="flex flex-col">
            <span className="font-semibold text-[16px] mb-1">Contact us</span>
            <p className="text-[14px]">
              {" "}
              <a href="tel:+918980003635" className="hover:underline">
                +91 89800 03635
              </a>
            </p>
            <p className="text-[14px]">
              {" "}
              <a href="tel:+917016986245" className="hover:underline">
                +91 70169 86245
              </a>
            </p>
          </div>
          <button
            className="hidden xl:block border border-[#5FA02E] px-4 py-2 rounded-full text-[#5FA02E] font-bold"
            onClick={() => handleButtonClick("form1")}
          >
            Book Appointment
          </button>
          {visibleFormId === "form1" && (
            <div className="fixed inset-0 flex justify-center items-center z-10">
              <div className="relative">
                <Book_Appointment closeForm={closeForm} />
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="">
        <div
          className={`${
            isSticky
              ? "bg-[#5FA02E] hidden xl:flex rounded-b-3xl rounded-t-3xl fixed top-0 left-0 w-full z-20"
              : "bg-[#5FA02E] hidden xl:flex"
          }  py-4 px-10 mx-auto transition-all w-full z-50 `}
        >
          <div className="container flex justify-between items-center mx-auto">
            <ul className="hidden xl:flex gap-20  text-white mx-auto">
              <span
                onClick={() => handleLinkClick("/")}
                className="cursor-pointer hover:text-[#2d4918] "
              >
                Home
              </span>

              {/* About Us Dropdown */}
              <li
                className="cursor-pointer relative"
                ref={aboutRef}
                onClick={() => toggleDropdown("about")}
              >
                <span
                  className={`flex items-center px-2 rounded-t-md transition-all gap-1  ${
                    openDropdown === "about"
                      ? "bg-white text-black"
                      : "hover:text-[#2d4918]"
                  }`}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                  About Us
                </span>
                {openDropdown === "about" && (
                  <div className="absolute bg-white text-white shadow-md rounded-b-md w-auto mt-0 z-10">
                    <ul className="text-black w-max">
                      <span
                        onClick={() => handleLinkClick("/about-hospital")}
                        className="block px-4 py-2 "
                      >
                        - About Hospital
                      </span>
                      <span
                        onClick={() => handleLinkClick("/about-doctor")}
                        className="block px-4 py-2 relative group"
                      >
                        - About Doctor
                        {/* Nested dropdown for doctors */}
                        <ul className="absolute right-full top-0 hidden w-max group-hover:block bg-white text-black shadow-md rounded-b-md mt-0">
                          <li
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing the dropdown
                              handleLinkClick("/dr_dharmik");
                            }}
                            className="block px-4 py-2  hover:text-[#5FA02E]"
                          >
                            - Dr. Dharmik Kachachhi
                          </li>
                          <li
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing the dropdown
                              handleLinkClick("/dr_rushi");
                            }}
                            className="block px-4 py-2 hover:text-[#5FA02E]"
                          >
                            - Dr. Rushi Patel
                          </li>
                          <li
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing the dropdown
                              handleLinkClick("/dr_darshan");
                            }}
                            className="block px-4 py-2 hover:text-[#5FA02E]"
                          >
                            -Dr. Darshan Dudhat
                          </li>
                        </ul>
                      </span>
                    </ul>
                  </div>
                )}
              </li>

              {/* Treatment Dropdown */}
              <li
                className="cursor-pointer relative"
                ref={treatmentRef}
                onClick={() => toggleDropdown("treatment")}
              >
                <span
                  className={`flex items-center px-2 rounded-t-md transition-all gap-1 ${
                    openDropdown === "treatment"
                      ? "bg-white text-black"
                      : "hover:text-[#2d4918]"
                  }`}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                  What we treat? (Treatment)
                </span>
                {openDropdown === "treatment" && (
                  <div className="absolute bg-white text-white shadow-md rounded-b-md w-auto mt-0 z-10 p-2">
                    <ul className="text-black grid grid-cols-2 gap- w-max">
                      <span
                        onClick={() => handleLinkClick("/digestive")}
                        className="block px-4 py-2"
                      >
                        - Digestive Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/joint-disorder")}
                        className="block px-4 py-2"
                      >
                        - Joint Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/skin&hair-disorder")}
                        className="block px-4 py-2"
                      >
                        - Skin & Hair Disorders
                      </span>
                      <span
                        onClick={() => handleLinkClick("/female-disorder")}
                        className="block px-4 py-2"
                      >
                        - Female Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/lifestyle-disorder")}
                        className="block px-4 py-2"
                      >
                        - Lifestyle Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/ano-rectal-disorder")}
                        className="block px-4 py-2"
                      >
                        - Ano-Rectal Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/respiratory-disorder")}
                        className="block px-4 py-2"
                      >
                        - Respiratory Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/ent-disorder")}
                        className="block px-4 py-2"
                      >
                        - ENT Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/pediatrics-disorder")}
                        className="block px-4 py-2"
                      >
                        - Pediatrics Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/liver-disorder")}
                        className="block px-4 py-2"
                      >
                        - Liver Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/male-disorder")}
                        className="block px-4 py-2"
                      >
                        - Male Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/psycatric-disorder")}
                        className="block px-4 py-2"
                      >
                        - Psycatric Disorder
                      </span>
                      <span
                        onClick={() => handleLinkClick("/kidney-disorder")}
                        className="block px-4 py-2"
                      >
                        - Kidney & Urinary Disorders
                      </span>
                    </ul>
                  </div>
                )}
              </li>

              {/* Facility  */}
              <span
                onClick={() => handleLinkClick("/facilities")}
                className="cursor-pointer hover:text-[#2d4918] "
              >
                Facility
              </span>

              {/* Panchkarma Dropdown */}
              <li
                className="cursor-pointer relative"
                ref={panchkarmaRef}
                onClick={() => toggleDropdown("panchkarma")}
              >
                <span
                  className={`flex items-center px-2 rounded-t-md transition-all gap-1 ${
                    openDropdown === "panchkarma"
                      ? "bg-white text-black"
                      : "hover:text-[#2d4918]"
                  }`}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                  Panchkarma
                </span>
                {openDropdown === "panchkarma" && (
                  <div className="absolute bg-white text-white shadow-md rounded-b-md w-auto mt-0 z-10">
                    <ul className="text-black w-max">
                      <span
                        onClick={() => handleLinkClick("/basic-panchkarma")}
                        className="block px-4 py-2"
                      >
                        - Basic Panchkarma For all Diseases
                      </span>
                      <span
                        onClick={() => handleLinkClick("/panchkarma-pain")}
                        className="block px-4 py-2"
                      >
                        - Panchkarma For Pain
                      </span>
                      <span
                        onClick={() =>
                          handleLinkClick("/panchkarma-stress-management")
                        }
                        className="block px-4 py-2"
                      >
                        - Panchkarma For Stress Management
                      </span>
                      <span
                        onClick={() =>
                          handleLinkClick("/panchkarma-weight-loss")
                        }
                        className="block px-4 py-2"
                      >
                        - Panchkarma For Weight Loss
                      </span>
                      <span
                        onClick={() => handleLinkClick("/a-to-z-panchkarma")}
                        className="block px-4 py-2"
                      >
                        - A to Z Panchkarma
                      </span>
                    </ul>
                  </div>
                )}
              </li>

              <a href="/testimonials" className="cursor-pointer hover:text-[#2d4918]">
                Testimonials
              </a>
              <a href="/gallary" className="cursor-pointer hover:text-[#2d4918]">
                Success
              </a>
              <span
                onClick={() => handleLinkClick("/contact-us")}
                className="cursor-pointer hover:text-[#2d4918] "
              >
                Contact Us
              </span>
            </ul>

            {/* <img src={assets.header_logo} alt="Logo" className="xl:hidden" /> */}
          </div>
        </div>

        {/* first Mobile menu */}

        {/* second mobile menu */}
      </div>
    </div>
  );
};

export default Navbar;
