import React, { useState } from 'react'
import Content from './Content'
import ContentImage from './ContentImage'
import furniture1 from "../../images/image-about-dark.jpg";
import furniture2 from "../../images/image-about-light.jpg";

const AboutFurniture = () => {
    
  return (
    <section className='about-furniture'>
        <ContentImage Img={furniture1}/>
        <Content className={"body--content--card"} header={"About Our Furniture"} message={"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."}/>
        <ContentImage Img={furniture2} />
    </section>
  )
}

export default AboutFurniture