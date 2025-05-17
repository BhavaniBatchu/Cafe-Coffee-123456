import React from 'react';

const Collections = (props) => {
  const {title, image1, image2, image4,image3} = props.ColdCoffe
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      
    <div className="ColdImages">
      <img src = {image1} alt = {title}/>
      <img src = {image2} alt = {title}/>
      <img src = {image4} alt = {title}/>
      <img src = {image3} alt = {title}/>
    </div>
    </div>
)
}

export default Collections