import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  border-top: 1px solid #bdbdbd;
`

export const Title__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 43px;
`

export const Reply__Img = styled.img`
  margin-right: 12px;
`

export const Reply__Title = styled.div``

export const Reply__Input = styled.input`
  width: 1200px;
  height: 108px;
  padding: 20px;
  margin-top: 42px;
  text-align: top;
  /* outline-color: 1px 1px 1px 0px solid #bdbdbd; */
  border: 1px solid #bdbdbd;
  border-bottom: 0px;
  /* background-color: black; */
`
export const ReplyCount__Regint__Button__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Reply__Count = styled.input`
  max-width: 1108px;
  width: 100%;
  /* max-height: 52px; */
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: 1px solid#F2F2F2;
`

export const Regist__Button = styled.div`
  max-width: 91px;
  width: 100%;
  max-height: 52px;
  height: 52px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Reply__List__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* justify-content: center; */
  margin-top: 20px;
  margin-bottom: 300px;
  /* border: 1px solid red; */
`
export const Reply__Contents__Wrapper = styled.div`
  /* background-color: greenyellow; */
  display: flex;
  flex-direction: row;
  width: 1200px;
  justify-content: space-between;
  margin-top: 20px;
  /* margin-bottom: 200px; */
  /* border-bottom: 1px solid #bdbdbd; */

  /* border: 5px solid black; */
`
export const Line = styled.hr`
  width: 1200px;
  height: 1px;
  background-color: #bdbdbd;
  border: 0px;
`

export const UserIcon__UserInfo__Wrapper = styled.div`
  /* background-color: gold; */
  display: flex;
  flex-direction: row;
`
export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`
export const UserInfo__Reply__Content__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border-bottom: 5px solid #bdbdbd; */
`

export const Reply__UserName = styled.div``
export const Reply__Content = styled.div`
  color: #4f4f4f;
  max-width: 900px;
  margin-top: 4px;
`
export const Reply__Date = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #bdbdbd;
`

export const Delete__Edit__Wrapper = styled.div`
  /* background-color: brown; */
`
export const Delete__Button = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`
export const Edit__Buttom = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  cursor: pointer;
`

export const Reply__Edit__Wrapper = styled.div`
  margin-top: 6px;
`
export const Reply__Edit__Input = styled.input`
  width: 1140px;
  height: 64px;
  border: 1px solid #bdbdbd;
  border-bottom: 0px;
`
export const Reply__Edit__Count__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Reply__Edit__count = styled.input`
  width: 1049px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: 1px solid#F2F2F2;
`
export const Reply__Edit__Button = styled.button`
  width: 91px;
  height: 52px;
  background-color: gold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0px;
  cursor: pointer;
`

export const Nested__Reply__Button = styled.img`
  width: 18px;
  height: 18px;
  /* margin-right: 16px; */
  cursor: pointer;
`

export const Reply__And__Nested__Reply__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

//*임시* 여기부터 대댓글

export const Nested__Reply__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Arrow__Icon = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 55px;
  margin-right: 25px; ;
`
export const Nested__Reply__Input__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
`
export const Nested__Reply__Input = styled.input`
  /* max-width: 1096px; */
  width: 1096px;
  height: 64px;
  border: 1px solid #bdbdbd;
  border-bottom: 0px;
`
export const Nested__Reply__Count__Button__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Nested__Reply__Count = styled.input`
  /* max-width: 1004px; */
  /* width: 100%; */
  width: 1006px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: 1px solid#F2F2F2;
  border-right: 0px;
`
export const Nested__Reply__Post__Button = styled.div`
  max-width: 91px;
  width: 100%;
  height: 52px;
  background-color: gold;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
