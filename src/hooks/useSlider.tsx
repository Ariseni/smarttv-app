import { useRef, useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../components/Slider/Arrows";

export const useSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [dragging, setDragging] = useState(false);

  function beforeChange() {
    setDragging(true);
  }
  const afterChange = () => {
    setDragging(false);
  };

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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow/>,
  };

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
  return { sliderRef, settings, dragging };
};
