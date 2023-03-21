import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const SliderButton = ({onHandlePrev, onHandleNext, className}) => {

  return (
    <div className={`slider--btn--container ${className}`}>
      <button type="button" onClick={onHandlePrev}><HiChevronLeft/><span className="hidden">previous</span></button>
      <button type="button" onClick={onHandleNext}><HiChevronRight/><span  className="hidden">next</span></button>
    </div>
  );
};

export default SliderButton;
