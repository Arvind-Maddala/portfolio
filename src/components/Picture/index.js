import React from 'react';
import './style.css';

const Picture = ({props}) => {
  return (
    <div className="picture">
      <img className ="picture__img" src={`images/${props}.png`} alt="Hello" />
    </div>
  )
}

export default Picture
