import { aspectRatio } from '../../styles/mixins'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  ${aspectRatio(1920, 1080)}
`

const ImageWrapper = ({ children }) => (
  <Container>
    <div>
      {children}
    </div>
  </Container>
)

export default ImageWrapper
