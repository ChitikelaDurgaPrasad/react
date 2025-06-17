import React from 'react'


const Images = (props) => {
  const {title,image1,image2,image3,image4,image5,image6}=props.value
  

  

  return (
    <div className="imagesection">
      <div className="image">
        <h3>{title}</h3>
      </div>
      <div className="imagesect">
      <img src={image1} alt="11111" />
      <img src={image2} alt="11111" />
      <img src={image3} alt="11111" />
      <img src={image4} alt="11111" />
      <img src={image5} alt="11111" />
      <img src={image6} alt="11111" />
      

      </div>
      <div className="banner">
      <img src="./assests/LadiesBanner.gif" alt="band" />
      </div>
      
    </div>
  )
}

export default Images
