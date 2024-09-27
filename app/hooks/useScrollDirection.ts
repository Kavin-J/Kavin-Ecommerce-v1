import { useState, useEffect } from "react";

// Custom hook เพื่อตรวจจับว่า scroll ขึ้นหรือลง
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );

  useEffect(() => {
    let lastScrollY = window.screenY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      console.log([lastScrollY, currentScrollY]);
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0; // Ensure scrollY is positive
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};
