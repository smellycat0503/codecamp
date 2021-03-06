import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ItemRegist__Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 80px 102px 80px 102px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 600px) {
    border: 10px solid blue;
  }
`

export const ItemRegist__Title = styled.div`
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`

export const Body__Wrapper = styled.div`
  margin-top: 80px;
`
export const Item__Title__Wrapper = styled.div``

export const Item__Name__Title = styled.div`
  /* max-width: 996px; */
  /* background-color: gray; */
  /* @media only screen and (max-width: 600px) {
    border: 10px solid blue;
  } */
`

export const Item__Name__Input = styled.input`
  max-width: 996px;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
`
export const Summary__Wrapper = styled.div``
export const Summary__Title = styled.div`
  margin-top: 40px;
`
export const Summary__Input = styled.input`
  max-width: 996px;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
`
export const Item__Detail__Wrapper = styled.div`
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    height: 268px;
  }
`
export const Item__Detail__Title = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
`
export const Item__Detail__Input = styled.input`
  max-width: 996px;
  width: 100%;
  height: 320px;
  margin-top: 16px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
`
export const Sale__Price__Wrapper = styled.div``
export const Sale__Price__Title = styled.div`
  margin-top: 40px;
`
export const Sale__Price__Input = styled.input`
  max-width: 996px;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
`
export const Tag__Wrapper = styled.div`
  margin-top: 16px;
`
export const Tag__Title = styled.div``
export const Tag__Input = styled.input`
  max-width: 996px;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
`
export const Location__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
`
export const Location__Map__Wrapper = styled.div`
  margin-right: 24px;
  max-width: 384px;
  width: 100%;
`
export const Location__Title = styled.div`
  margin-bottom: 16px;
`
export const Location__Map = styled.div`
  margin-top: 16px;
  height: 100%;
  max-height: 252px;
  width: 100%;
  max-width: 384px;
`
export const GPS__Address__Wrapper = styled.div`
  max-width: 588px;
  width: 100%;
`

export const GPS__Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    margin-top: 60px;
  }
`
export const GPS__Title = styled.div``
export const GPS__Button__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`
export const LAT__Input = styled.input`
  width: 108px;
  height: 52px;
  background-color: white;
  color: #4f4f4f;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  padding: 18px;
`
export const Map__Button = styled.img`
  margin-left: 21px;
  margin-right: 21px;
  cursor: pointer;
`
export const LNG__Input = styled.input`
  width: 108px;
  height: 52px;
  background-color: white;
  color: #4f4f4f;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  padding: 18px;
`
export const Address__Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`
export const Address__Title = styled.div``
export const Address_Input1 = styled.input`
  margin-top: 16px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
`

export const Input2__Button__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

export const Address_Input2 = styled.input`
  margin-top: 16px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  border: 1px solid #bdbdbd;
  width: 500px;
`

export const SearchAddressButton = styled.button`
  width: 80px;
  height: 52px;
  margin-top: 24px;
  background-color: black;
  color: white;
  cursor: pointer;
`

export const IMG__Attach_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  margin-top: 40px;
  height: 100%;
  flex-wrap: wrap;
  width: 100%;
`
export const IMG__Attach__Title = styled.div``
export const IMG__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`
export const IMG__Upload__Preview__Wrapper = styled.div`
  /* width: 180px; */
  height: 100%;
  max-height: 180px;
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`

export const IMG__Upload__Cancel__Button = styled.img`
  width: 14px;
  height: 14px;
  align-self: flex-end;
  position: absolute;
  cursor: pointer;
`

export const IMG__Upload__Preview = styled.img`
  width: 180px;
  height: 180px;
`

export const IMG__Upload__Button = styled.label`
  width: 180px;
  height: 180px;
  background-color: silver;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  margin-top: 10px;
`
export const PhotoInput = styled.input`
  position: absolute;
  /* width: 1px; */
  /* height: 1px; */
  /* padding: 0px; */
  /* margin: -1px; */
  /* overflow: hidden; */
  /* border: 0; */
  clip: rect(0, 0, 0, 0);
`
export const Plus = styled.div`
  font-size: 20px;
`

export const Main__IMG__Setting__Wrapper = styled.div`
  margin-top: 40px;
`
export const Main__IMG__Title = styled.div``

export const Main__IMG__Radio__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`
export const IMG__Radio = styled.input`
  margin-right: 10px;

  background-color: gold;
`

export const Radio1: any = styled.div`
  margin-right: 24px;
`

export const Radio2: any = styled.div``

export const Regist__Button__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`

export const Regist__Button = styled.button`
  background-color: gold;
  width: 179px;
  height: 52px;
  border: 0px solid;
  cursor: pointer;
  :disabled {
    background-color: #bdbdbd;
    width: 179px;
    height: 52px;
    border: 0px solid;
  }
`

export const Cancel__Edit__Button = styled.button`
  background-color: #bdbdbd;
  width: 179px;
  height: 52px;
  border: 0px solid;
  margin-right: 24px;
  cursor: pointer;
`
export const Edit__Button = styled.button`
  background-color: gold;
  width: 179px;
  height: 52px;
  border: 0px solid;
  cursor: pointer;
  :disabled {
    background-color: #bdbdbd;
    width: 179px;
    height: 52px;
    border: 0px solid;
  }
`
