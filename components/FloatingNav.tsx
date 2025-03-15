"use client";
import { useState, useEffect, useRef } from "react";
import { dmSans } from "../app/fonts";

export default function FloatingNav() {
  const [active, setActive] = useState(""); // Ensure lowercase IDs for consistency
  const navItems = [
    { name: "Home", id: "" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ];

  const [bgStyle, setBgStyle] = useState({ width: "0px", left: "0px" });
  const navRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isClickingRef = useRef(false); // Prevent scroll from overriding clicks

  // 🔹 Updates active tab position
  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.id === active);
    const activeButton = navRefs.current[activeIndex];

    if (activeButton) {
      const parent = activeButton.parentElement as HTMLElement;
      const parentRect = parent.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setBgStyle({
        width: `${buttonRect.width}px`,
        left: `${buttonRect.left - parentRect.left}px`,
      });
    }
  }, [active, navItems]);

  // 🔹 Scroll detection logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingRef.current) return; // Ignore scroll updates when clicking
  
        let mostVisibleSection = "";
        let maxRatio = 0;
  
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            mostVisibleSection = entry.target.id;
            maxRatio = entry.intersectionRatio;
          }
        });
  
        if (mostVisibleSection) {
          setActive(mostVisibleSection);
        }
      },
      { threshold: 0.6 }
    );
  
    navItems.forEach(({ id }) => {
      if (id) {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      }
    });
  
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActive(""); // Activate "Home"
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);
  
  

  // 🔹 Handles clicking smoothly
  const handleNavClick = (id: string) => {
    isClickingRef.current = true; // Disable observer temporarily
    setActive(id);
  
    if (id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  
    // Wait until scrolling is done before re-enabling the observer
    setTimeout(() => {
      isClickingRef.current = false; // Allow observer updates again
      setActive(id); // Ensure "About" is still active after scroll completes
    }, 1200); // Adjust to match scroll duration
  };
  

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[rgba(255,255,255,0.5)] backdrop-blur-md shadow-lg py-2 flex rounded-full border border-[0.3px] border-[#dfdfdf] z-100">
      <div className="relative flex gap-2 px-2">
        {/* Animated Background */}
        <div
          className="absolute top-0 bottom-0 bg-[#2EAFFF] rounded-full transition-all duration-300 ease-in-out"
          style={{ width: bgStyle.width, left: bgStyle.left }}
        ></div>

        {/* Navigation Items */}
        {navItems.map(({ name, id }, index) => (
          <button
            key={id}
            ref={(el) => {
              if (el) navRefs.current[index] = el;
            }}
            onClick={() => handleNavClick(id)}
            className={`relative z-10 flex items-center justify-center px-6 py-2 text-[16px] font-medium ${dmSans.className} cursor-pointer rounded-full transition-all duration-300 ${
              active === id ? "text-white" : "text-[#293245]"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
