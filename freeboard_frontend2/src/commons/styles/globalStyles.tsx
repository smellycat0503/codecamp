import {Global, css} from '@emotion/react'

const reset = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    /* font-size: 20px; */
  }

  @font-face {
    font-family: 'hanna';
    src: url('/fonts/HANNA.ttf');
  }
`

const GlobalStyles = () => {
  return <Global styles={reset} />
}
export default GlobalStyles
