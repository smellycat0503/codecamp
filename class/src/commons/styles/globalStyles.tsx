import {Global, css} from '@emotion/react'

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
`

const GlobalStyles = () => {
  return <Global styles={reset} />
}

export default GlobalStyles
