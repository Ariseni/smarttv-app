import { useRef, useEffect } from "react";
import Slider from "react-slick";

export const useSlider = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sliderRef.current) return;

      if (e.key === "ArrowLeft") {
        sliderRef.current.slickPrev();
      } else if (e.key === "ArrowRight") {
        sliderRef.current.slickNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return { sliderRef };
};
