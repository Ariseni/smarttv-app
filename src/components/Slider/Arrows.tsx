import { ArrowLeft, ArrowRight } from "lucide-react";

type ArrowProps = {
  onClick?: () => void;
};

export const CustomPrevArrow = (props: ArrowProps) => (
  <div
    className="absolute -left-[5px] z-10 flex h-full w-40 cursor-pointer items-center justify-center p-2 hover:bg-[linear-gradient(to_left,_rgba(0,0,0,0.3),_rgba(0,0,0,0.8))]"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={props.onClick}
  >
    <ArrowLeft color="white" size={60} />
  </div>
);

// Custom right arrow
export const CustomNextArrow = (props: ArrowProps) => (
  <div
    className="absolute -right-[5px] z-10 flex h-full w-40 cursor-pointer items-center justify-center p-2 hover:bg-[linear-gradient(to_right,_rgba(0,0,0,0.3),_rgba(0,0,0,0.8))]"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={props.onClick}
  >
    <ArrowRight color="white" size={60} />
  </div>
);
