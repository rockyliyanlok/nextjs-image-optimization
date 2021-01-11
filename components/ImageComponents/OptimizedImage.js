import React from 'react'

const OptimizedImage = ({ filename, ...props }) => (
  <img 
    className={'width-height--100p object-fit--cover'}
    src={require(`../../public/img/${filename}.jpg?resize&sizes[]=576&sizes[]=768&sizes[]=992&sizes[]=1200&format=webp`)}
    alt={filename}
    {...props}
  />
)

export default OptimizedImage
