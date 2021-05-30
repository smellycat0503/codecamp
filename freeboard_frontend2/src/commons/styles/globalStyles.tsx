import {Global, css} from '@emotion/react'

const reset = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 20px;
  }

  @font-face {
    font-family: 'testfont';
    src: url('/fonts/scifibit.ttf');
  }
`

const GlobalStyles = () => {
  return <Global styles={reset} />
}
export default GlobalStyles
