import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hello, I would like to schedule an online consultation with Agni Ayurved Hospital.');
  const [isPulsing, setIsPulsing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showSocialTooltip, setShowSocialTooltip] = useState(false);

  // Add pulsing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Close social icons when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSocialIcons && !event.target.closest('.social-icons-container') && !event.target.closest('.info-button')) {
        setShowSocialIcons(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSocialIcons]);

  const handleWhatsAppClick = () => {
    // WhatsApp API URL with the message
    // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/+918980003635?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSocialClick = (platform) => {
    // Replace with your actual social media URLs
    const socialUrls = {
      facebook: 'https://www.facebook.com/share/15mN4ccjjS',
      instagram: 'https://www.instagram.com/agni_ayurved_hospital/?igsh=aW5teGhzNDJzZGw2#',
      youtube: 'https://www.youtube.com/@Agni_Ayurved_Hospital/featured',
      linkedin: 'https://www.linkedin.com/company/agni-ayurved-hospital/'
    };
    
    window.open(socialUrls[platform], '_blank');
    setShowSocialIcons(false); // Close social icons after clicking
  };

  const toggleSocialIcons = () => {
    setShowSocialIcons(prev => !prev);
    setShowSocialTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-10">
      {/* WhatsApp Message Dialog - Positioned absolutely to prevent movement */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-72 transform transition-all duration-300 ease-in-out animate-fadeIn">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[#5FA02E] font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Online Consultation
            </h3>
          </div>
          
          {/* Close button positioned absolutely */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors duration-300 bg-gray-100 hover:bg-gray-200 rounded-full p-1"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className="bg-gray-50 p-3 rounded-md mb-3">
            <p className="text-xs text-gray-600 mb-2">Our doctors are available for online consultation. Send your message to get started.</p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#5FA02E] focus:border-transparent transition-all duration-300"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#5FA02E] text-white py-2 rounded-md hover:bg-[#4a8a28] transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Message
          </button>
        </div>
      )}
      
      <div className="relative flex items-center">
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-16 right-0 bg-white text-gray-800 p-2 rounded-md shadow-lg text-sm w-48 animate-fadeIn">
            <div className="absolute bottom-0 right-4 transform translate-y-2 rotate-45 w-3 h-3 bg-white"></div>
            <p>Click to chat with our doctors</p>
          </div>
        )}
        
        {/* Social Media Icons Panel */}
        {showSocialIcons && (
          <div className="absolute bottom-16 right-16 bg-white rounded-lg shadow-lg p-4 mb-2 animate-fadeIn social-icons-container">
            <div className="absolute bottom-0 right-0 transform translate-y-2 rotate-45 w-3 h-3 bg-white"></div>
            <div className="flex space-x-3">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-2 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('youtube')}
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {/* Info Button */}
        <button
          onClick={toggleSocialIcons}
          onMouseEnter={() => !showSocialIcons && setShowSocialTooltip(true)}
          onMouseLeave={() => setShowSocialTooltip(false)}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 animate-pulse mr-4 info-button"
          aria-label="Social Media"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Social Media Tooltip */}
        {showSocialTooltip && !showSocialIcons && (
          <div className="absolute bottom-16 right-16 bg-white text-gray-800 p-2 rounded-md shadow-lg text-sm w-48 animate-fadeIn">
            <div className="absolute bottom-0 right-4 transform translate-y-2 rotate-45 w-3 h-3 bg-white"></div>
            <p>Connect with us on social media</p>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`bg-[#5FA02E] text-white p-4 rounded-full shadow-lg hover:bg-[#4a8a28] transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 ${isPulsing ? 'animate-pulse' : ''}`}
          aria-label="WhatsApp Consultation"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-bounce">1</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton; 