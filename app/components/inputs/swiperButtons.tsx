import { useSwiper } from "swiper/react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Button from "../Button";

export default function SlideButtons() {
  const swiper = useSwiper();

  return (
    <div className="order-3 mt-7 flex items-center gap-4 px-7 md:px-14 lg:px-28">
      <Button
        onClick={() => swiper.slidePrev()}
        outline
        icon={AiFillLeftCircle}
        label="left"
      ></Button>
      <Button
        onClick={() => swiper.slideNext()}
        outline
        icon={AiFillRightCircle}
        label="right"
      ></Button>
    </div>
  );
}
