import { useEffect, useState, RefObject } from "react";
import Slider, { Settings } from "react-slick";

// let config = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.9,
// };

export const useSlider = (sliderRef: RefObject<Slider>) => {
  const [dragging, setDragging] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  function beforeChange() {
    setDragging(true);
  }
  const afterChange = () => {
    setDragging(false);
  };
  /*Not working  yet

  let slickSliders = document.querySelectorAll(".slick-slider");
  let observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  }, config);
  slickSliders.forEach((slider) => observer.observe(slider)); */

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
      //TODO: fix all sliders activated by keyboard arrows
      if (!sliderRef.current /*  || !isVisible */) return;

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
  return { sliderRef, settings, dragging };
};
