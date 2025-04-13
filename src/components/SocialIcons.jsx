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
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 insta rotate-animation" />
      </a>

      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiFacebook className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 fb bounce-animation" />
      </a>

      <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 whatsapp flash-animation" />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiYoutube className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 youtube shake-animation" />
      </a>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin className="icon text-[#5FA02E] bg-white rounded-full sm:h-12 sm:w-12 h-8 w-8 p-1 linkedin flip-animation" />
      </a>
    </div>
  );
};
export default SocialIcons;
