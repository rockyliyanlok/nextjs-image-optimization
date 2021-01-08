import Lazyload from 'react-lazyload'
import React from 'react'

const OptimizedImage = ({ filename, ...props }) => (
  <Lazyload>
    <img 
      className={'width-height--100p object-fit--cover'}
      src={require(`../../public/img/${filename}.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp`)}
      alt={filename}
      {...props}
    />
  </Lazyload>
)

export default OptimizedImage
