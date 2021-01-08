import Image from 'next/image'
import React from 'react'

const NextjsImage = ({ filename, ...props }) => (
  <Image 
    objectFit="cover"
    src={`/img/${filename}.jpg`}
    alt={filename}
    layout={'responsive'}
    {...props}
  />
)

export default NextjsImage
