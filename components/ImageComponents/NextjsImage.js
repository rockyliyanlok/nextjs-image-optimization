import Image from 'next/image'
import React from 'react'

const NextjsImage = ({ filename, ...props }) => (
  <Image 
    objectFit="cover"
    src={`/img/${filename}.jpg`}
    alt={filename}
    {...props}
  />
)

export default NextjsImage
