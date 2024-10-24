import { ArrowLeft, ArrowRight } from "lucide-react";

type ArrowProps = {
  onClick?: () => void;
};

export const CustomPrevArrow = (props: ArrowProps) => (
  <div
    className="absolute left-5 z-10 cursor-pointer rounded-full p-2 hover:bg-[rgba(255,255,255,0.2)]"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={props.onClick}
  >
    <ArrowLeft color="white" size={60} />
  </div>
);

// Custom right arrow
export const CustomNextArrow = (props: ArrowProps) => (
  <div
    className="absolute right-5 z-10 cursor-pointer rounded-full p-2 hover:bg-[rgba(255,255,255,0.2)]"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={props.onClick}
  >
    <ArrowRight color="white" size={60} />
  </div>
);
