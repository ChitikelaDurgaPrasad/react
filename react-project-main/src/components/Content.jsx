import React from 'react'

const Content = (props) => {
  const {title,image1,image2,image3,image4,image5,image6}=props.name
  return (
    <div className="ladiesfashion">
      <div className="image">
      <h3>{title}</h3>
      </div>
      <div className="imagesect">
        <img src={image1} alt="123" />
        <img src={image2} alt="123" />
        <img src={image3} alt="123" />
        <img src={image1} alt="123" />
        <img src={image2} alt="123" />
        <img src={image3} alt="123" />
      </div>
    </div>
  )
}

export default Content
