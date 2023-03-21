import React, { useState } from "react";
import ShopNowButton from "../UI/ShopNowButton";
import SliderButton from "../UI/SliderButton";
import Card from "../UI/Card";
import Dslide1 from "../../images/desktop-image-hero-1.jpg";
import Dslide2 from "../../images/desktop-image-hero-2.jpg";
import Dslide3 from "../../images/desktop-image-hero-3.jpg";

const SliderImageCard = () => {
  const [show, setShow] = useState(0);
  const [sliderInfo] = useState([
    {
      desktopImg: Dslide1,
      // mobileImg: slide1,
      header: "Discover innovative ways to decorate",
      message:
        "We provide unmatched quality, comfort and style forproperty owners across the country. Our experts combine from and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      desktopImg: Dslide2,
      // mobileImg: slide2,
      header: "We are available all across the globe",
      message:
        "With stores all over the world, it's easy for you to find the future for your home or place of bussiness. Locally, we're in most major cities throughout the country. Find the branch nearest to you using our store locator. Any question? Don't hesitate to contact us today.",
    },
    {
      desktopImg: Dslide3,
      // mobileImg: slide3,
      header: "Manufactured with the best materials",
      message:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and consistent as possible. with three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ]);

  const handleNextSlide = () => {
    setTimeout(() => {
      const isLastSlide = show === sliderInfo.length - 1;
      const newIndex = isLastSlide ? 0 : show + 1;
      setShow(newIndex);
    }, 500);
  };

  const handlePrevSlide = () => {
    setTimeout(() => {
      const isFirstSlide = show === 0;
      const newIndex = isFirstSlide ? sliderInfo.length - 1 : show - 1;
      setShow(newIndex);
    }, 500);
  };
  return (
    <React.Fragment>
      <div className="slider-block">
        <div className="slider-img--container">
          <figure>
            <img
              src={sliderInfo[show].desktopImg}
              alt={sliderInfo[show].header}
            />
          </figure>
          <SliderButton
            className={"slider-btn--position"}
            onHandlePrev={handlePrevSlide}
            onHandleNext={handleNextSlide}
          />
        </div>
        <Card className={"slider-info--container"}>
          <div className="slider-info">
            <h2>{sliderInfo[show].header}</h2>
            <p>{sliderInfo[show].message}</p>
            <ShopNowButton className={"shop-btn--space"} />
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default SliderImageCard;
