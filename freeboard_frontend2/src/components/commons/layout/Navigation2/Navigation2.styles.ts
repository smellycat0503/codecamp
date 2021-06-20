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
  @media (max-width: 1260px) {
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

  /* padding: 10px 16px; */
`
export const UserIcon__InfoMenu__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const UserIcon = styled.img`
  margin-right: 15px;
`
export const InfoMenu = styled.img`
  width: 24px;
  height: 24px;
`
