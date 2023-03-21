import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const SliderButton = ({onHandlePrev, onHandleNext, className}) => {

  return (
    <div className={`slider--btn--container ${className}`}>
      <div className="slide-btn" onClick={onHandlePrev}><HiChevronLeft/></div>
      <div className="slide-btn" onClick={onHandleNext}><HiChevronRight/></div>
    </div>
  );
};

export default SliderButton;
