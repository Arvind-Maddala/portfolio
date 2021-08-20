import React from 'react';
import './style.css';
import DownloadCV from '../DownloadCV'

const Picture = ({props}) => {
  return (
    <div className="picture">
      <img className ="picture__img" src={`images/${props}.png`} alt="Hello" />
      <DownloadCV />
    </div>
  )
}

export default Picture
