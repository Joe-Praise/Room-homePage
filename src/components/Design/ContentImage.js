import React from "react";
const ContentImage = ({Img}) => {
  return (
    <figure className="content-image--figure">
      <img
        src={Img}
        alt="product image"
      />
    </figure>
  );
};

export default ContentImage;
