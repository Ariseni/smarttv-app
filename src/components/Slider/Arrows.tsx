import { ArrowLeft, ArrowRight } from "lucide-react";

type ArrowProps = {
  onClick?: () => void;
};

export const CustomPrevArrow = (props: ArrowProps) => {
  return (
    <div
      className="group absolute -left-[5px] z-10 flex h-full w-40 cursor-pointer items-center justify-center p-2 hover:bg-[linear-gradient(to_left,_rgba(0,0,0,0.3),_rgba(0,0,0,0.8))]"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={props.onClick}
    >
      <ArrowLeft color="white" size={60} className="hidden group-hover:block" />
    </div>
  );
};

export const CustomNextArrow = (props: ArrowProps) => (
  <div
    className="group absolute -right-[5px] z-10 flex h-full w-40 cursor-pointer items-center justify-center p-2 hover:bg-[linear-gradient(to_right,_rgba(0,0,0,0.3),_rgba(0,0,0,0.8))]"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={props.onClick}
  >
    <ArrowRight color="white" size={60} className="hidden group-hover:block" />
  </div>
);
