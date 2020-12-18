import { css } from 'styled-components'

const aspectRatio = (width, height) => {
  return css`
    position: relative;
    height: auto;
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: ${(height / width) * 100}%;
    }
    & > .content, 
    & > .section-heading, 
    & > img,
    & > div,
    & > svg,
    & > path {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `
}

export default aspectRatio
