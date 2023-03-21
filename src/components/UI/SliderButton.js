import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const SliderButton = ({onHandlePrev, onHandleNext, className}) => {

  return (
    <div className={`slider--btn--container ${className}`}>
      <button type="button" className="" onClick={onHandlePrev}><HiChevronLeft/></button>
      <button type="button" className="" onClick={onHandleNext}><HiChevronRight/></button>
    </div>
  );
};

export default SliderButton;
