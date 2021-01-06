import { createGlobalStyle } from 'styled-components'
import base from './base'
import custom from './custom'
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
 ${reset}
 ${base}
 ${custom}
`
 
export default GlobalStyle
