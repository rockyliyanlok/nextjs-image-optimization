import React from 'react'

const OptimizedImage = ({ filename, ...props }) => (
  <img 
    className={'width-height--100p object-fit--cover'}
    src={require(`../../public/img/${filename}.jpg?resize&size=1920&format=webp`)}
    alt={filename}
    {...props}
  />
)

export default OptimizedImage
