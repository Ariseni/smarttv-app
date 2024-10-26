import { useEffect, useState, RefObject, useRef } from "react";
import Slider, { Settings } from "react-slick";

export const useSlider = (intersectionRef: RefObject<HTMLDivElement>) => {
  const sliderRef = useRef<Slider>(null);
  const [dragging, setDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function beforeChange() {
    setDragging(true);
  }
  const afterChange = () => {
    setDragging(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio === 1);
      },
      {
        threshold: 1.0, 
      },
    );
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    beforeChange,
    afterChange,
    className: "center",
    centerMode: true,
    variableWidth: true,
    arrows: true,
    responsive: [{ breakpoint: 480, settings: { arrows: false } }],
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sliderRef.current || !isVisible) return;
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
  }, [isVisible]);
  return { sliderRef, settings, dragging };
};
