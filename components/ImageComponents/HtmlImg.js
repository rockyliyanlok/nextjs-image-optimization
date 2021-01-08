import React from 'react'

const HtmlImg = ({ filename, ...props }) => (
  <img 
    className={'width-height--100p object-fit--cover'}
    src={`/img/${filename}.jpg`}
    alt={filename}
    {...props}
  />
)

export default HtmlImg
