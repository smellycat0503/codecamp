import styled from '@emotion/styled'

export const Navi2Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100px;
`

export const Navi2 = styled.div`
  min-width: 1260px;
  /* height: 152px; */
  /* width: 1200px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    min-width: unset;
  }
`

export const Logo = styled.img`
  /* height: 100%;
  width: 100%; */
  width: 190px;
  object-fit: contain;
`

export const Wrapper_Login_SignIn = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;

  /* align-self: flex-end; */
`

export const Login = styled.button`
  background-color: white;
  color: black;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
  padding-right: 20px;
  cursor: pointer;

  /* identical to box height */

  text-align: center;
`

export const SignUp = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 44px;
  background-color: gold;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  /* padding: 10px 16px; */
`
export const UserIcon__InfoMenu__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InfoMenu = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
export const MyMenu__Wrapper = styled.div`
  width: 258px;
  height: 226px;
`
export const Icon__UserInfo__Wrapper = styled.div`
  /* background-color: gold; */
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 96px;
  align-items: center;
  border-bottom: 1px solid black;
`

export const Icon__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 48px;
  justify-content: flex-end;
  align-items: flex-end;
  //*얘가 이해안감
  margin-left: 26px;
  /* background-color: red; */
`
export const UserIcon = styled.img`
  /* margin-right: 15px; */
  cursor: pointer;
  width: 48px;
  height: 48px;
  /* position: absolute; */
`
export const ImgChange = styled.img`
  position: absolute;
  cursor: pointer;
  /* width: 16px; */
  /* height: 16px; */
  /* align-self: flex-end; */
`
export const Name__Point__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: blue; */
  margin-left: 12px;
`
export const UserName = styled.div`
  font-size: 16px;
`
export const UserPoint = styled.div`
  font-size: 12px;
  margin-top: 4px;
`

export const MyMenu__Sub__Wrapper = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 38px;
`
export const MyMenu__Charge__IMG = styled.img``
export const MyMenu__Charge = styled.div`
  color: #bdbdbd;
  margin-left: 14px;
  cursor: pointer;
`

export const Logout__IMG = styled.img``
export const Logout = styled.div`
  color: #bdbdbd;
  margin-left: 12px;
  cursor: pointer;
`
export const Info__Wrapper = styled.div``
