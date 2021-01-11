import React from 'react'

const OptimizedImage = ({ filename, ...props }) => (
  <img 
    className={'width-height--100p object-fit--cover'}
    src={require(`../../public/img/${filename}.jpg?resize&sizes[]=640&sizes[]=740&sizes[]=828&sizes[]=1080&sizes[]=1920&sizes[]=2048&sizes[]=3840&format=webp`)}
    alt={filename}
    {...props}
  />
)

export default OptimizedImage
