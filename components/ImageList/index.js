import ImageWrapper from '../ImageWrapper'
import PropTypes from 'prop-types'
import React from 'react'

const ImageList = ({ ImageComponent }) => (
  <>
    {[...Array(10).keys()].map(index => {
      const filename = `landscape${('' + (index + 1)).padStart(3, '0')}`
      return (
        <ImageWrapper key={filename}>
          <ImageComponent filename={filename} />
        </ImageWrapper>
      )
    })}
  </>
)

ImageList.propTypes = {
  ImageComponent: PropTypes.elementType
}

export default ImageList
