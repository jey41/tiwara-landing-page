import React, { useState, useEffect } from 'react';

const FloatingMascot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setShowBubble(true);
      timer = setTimeout(() => {
        setShowBubble(false);
      }, 3000); // Fades out after 3 seconds
    } else {
      setShowBubble(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleMascot = () => {
    setIsOpen(!isOpen);
    // If opening, the bubble will be handled by useEffect
    // If we want to allow clicking again to re-trigger bubble, we could do it here
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end pointer-events-none">
      {/* Tooltip / Chat Bubble */}
      <div
        className={`bg-white text-slate-800 text-sm font-medium py-3 px-4 rounded-2xl rounded-br-sm shadow-xl border border-slate-100 mb-2 mr-4 md:mr-8 pointer-events-auto transition-all duration-300 transform origin-bottom-right ${
          showBubble ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-4'
        }`}
        style={{ pointerEvents: showBubble ? 'auto' : 'none' }}
      >
        <p>Aku Tiwa! siap membantumu melawan bakteri jahat dengan <span className="text-forest font-bold">TIWARA</span></p>
      </div>

      {/* Mascot Image Container */}
      <div 
        className="pointer-events-auto cursor-pointer relative flex items-end justify-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Full Mascot (Pop Up) */}
        <img
          src="/maskot.png"
          alt="TIWARA Mascot"
          className={`absolute bottom-0 right-0 mr-4 md:mr-8 w-48 h-auto md:w-72 object-contain drop-shadow-2xl transition-all duration-500 origin-bottom ${
            isOpen ? 'scale-100 opacity-100 translate-y-0 relative' : 'scale-75 opacity-0 translate-y-20 absolute pointer-events-none'
          }`}
        />

        {/* Peeking Mascot (Silent mode) */}
        <img
          src="/intip.png"
          alt="TIWARA Peeking"
          className={`bottom-0 right-0 w-32 h-auto md:w-48 object-contain drop-shadow-xl transition-all duration-500 origin-bottom ${
            !isOpen ? 'scale-100 opacity-100 translate-y-0 relative hover:scale-[1.02]' : 'scale-75 opacity-0 translate-y-20 absolute pointer-events-none'
          }`}
        />
      </div>
    </div>
  );
};

export default FloatingMascot;
