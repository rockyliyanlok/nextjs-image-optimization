import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import React from 'react'
import { respondTo } from '../../styles/mixins'
import styled from 'styled-components'

const Container = styled(Grid)`
  ${respondTo.xs`
    padding-left: 0;
    padding-right: 0;
  `}
`

const Wrapper = styled.div`
  width: 100%;
`

const Layout = ({
  children
}) => (
  <>
    <Container>
      <Row>
        <Col 
          xs={12} 
          sm={10} smOffset={1}
          md={8} mdOffset={2}
          lg={6} lgOffset={3}
        >
          <Wrapper>
            {children}
          </Wrapper>
        </Col>
      </Row>
    </Container>
  </>
)

export default Layout
