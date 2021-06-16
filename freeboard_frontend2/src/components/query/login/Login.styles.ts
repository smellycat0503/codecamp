import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 10px solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`
export const Background = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: -1;
  position: absolute;
  background: black;
  filter: brightness(40%);
`

export const Body__Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0px;
  /* border-top: 80px; */
`

export const Title = styled.img`
  width: 288px;
  height: 44px;
  margin-bottom: 80px;
`

export const Input__Wrapper = styled.div`
  /* background-color: blue; */
  padding-bottom: 20px;
  /* margin-top: 80px; */

  /* height: 124px; */
`

export const Input__Title = styled.div`
  color: white;
`

export const Input__Input = styled.input`
  width: 384px;
  height: 64px;
  /* opacity: 0.9; */
  font-size: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding-left: 16px;
  border-color: white;
  margin-top: 12px;
  outline: none;
`

export const Warning__Input = styled.div`
  font-size: 14px;
  color: red;
  padding-left: 14px;
  margin-top: 4px;
  height: 14px;
`
export const SignUpButton__Disabled = styled.button`
  width: 384px;
  height: 64px;
  background: #4f4f4f;
  border-radius: 16px;
  color: #ffffff;
`

export const SignUpButton = styled.button`
  width: 384px;
  height: 64px;
  background: gold;
  border-radius: 16px;
  cursor: pointer;

  :disabled {
    width: 384px;
    height: 64px;
    background: #4f4f4f;
    border-radius: 16px;
    color: #bdbdbd;
  }
`
// export const Background = styled.img`
//   width: 100%;
//   height: 100%;
//   opacity: 0.5;
//   /* z-index: 1; */
//   /* position: absolute; */
// `
// export const PrevPage__Button__Wrapper = styled.div`
//   width: 100%;
//   height: 20px;
//   padding-top: 82px;
//   background-color: gray;
// `
// export const PrevPage__Button = styled.div`
//   width: 20px;
//   height: 20px;
// `