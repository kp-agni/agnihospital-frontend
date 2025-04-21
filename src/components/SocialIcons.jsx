/* SocialIcons.js*/
import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const SocialIcons = () => {
  return (
    <div className="flex  space-x-4 mt-12">
      <a
        href="https://www.instagram.com/agni_ayurved_hospital/?igsh=aW5teGhzNDJzZGw2#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 insta rotate-animation" />
      </a>

      <a
        href="https://www.facebook.com/share/15mN4ccjjS"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiFacebook className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 fb bounce-animation" />
      </a>

      <a href="https://wa.me/message/7N3UE7CLCG56A1" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 whatsapp flash-animation" />
      </a>

      <a
        href="https://www.youtube.com/@Agni_Ayurved_Hospital/featured"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiYoutube className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 youtube shake-animation" />
      </a>

      <a
        href="https://www.linkedin.com/in/agni-ayurved-hospital-8b8492271/?originalSubdomain=in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 linkedin flip-animation" />
      </a>
    </div>
  );
};
export default SocialIcons;
