import { useEffect, useState } from "react";

const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleScrollToTop();
        }
      }}
    >
      {/* Arrow with primary button gradient */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center hover:from-[#1d4ed8] hover:to-[#2563eb] transition-all duration-300 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
    </button>
  );
};

export default ToTopButton;