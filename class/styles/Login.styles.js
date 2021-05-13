import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const BodyWrapper = styled.div`
    display:flex;
    flex-direction: column;
    /* justify-content: ; */
    /* align-items: center */
    width:300px;
`

export const Login = styled.div`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const SubTitle = styled.div`
    padding-top:5px;
    font-size: 10px;
    font-weight: bold;
`

export const IdContent = styled.input`
    height: 28px;

`

export const ErrorID = styled.div`
    padding-top:5px;
    color:red;
    font-size:10px;
`

export const ErrorPw = styled.div`
    padding-top:5px;
    color:red;
    font-size:10px;
`

export const PwContent = styled.input`
    /* border-top:5px; */
    height: 28px;
    
`

export const LoginButton = styled.button`
    height: 40px;
    margin-top: 10px;
    background-color: #483D8B;
    color:white;
`