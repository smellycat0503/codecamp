import{Wrapper, HeadLineWrapper, Time, BodyWrapper, 
     MainIcon, ItsloadText, InputId, UnderLine
     ,CancelIcon, IdWrapper, ErrorIdMessage, InputPassword
     ,PasswordWrapper, ErrorPwMessage, LoginButton
    , MenuWrapper, MenuContent, BarLine, KakaoButton } from '../../styles/emo.state.login'

import {useState} from 'react'

function LoginPage(){
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [errorId, seterrorId] = useState("")
    const [errorPw, seterrorPw] = useState("")

    function emailChange(event){
        const temp = event.target.value
        setEmail(temp)
        console.log(email)
    }

    function passwordChange(event){
        const temp2 = event.target.value
        setPw(temp2)
        console.log(pw)
    }

    function ErrorMessage(){
        let pattern1 = /[0-9]/;
        let pattern2 = /[a-zA-z]/;
        let pattern3 = /[~!@#$%^&|*()_<>?:{}?]/;
        console.log(email)
        console.log(pw)
        if(email.indexOf("@") === -1){
            seterrorId("이메일 주소를 다시 확인해주세요.")
        } if(pw.length< 8 || pw.length > 16 ){
            seterrorPw("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
            // } if(pw.length < 8 || pw.length > 16 || !pattern1.test(pw) || !pattern2.test(pw) || !pattern3.test(pw) ){
            //    seterrorPw("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
     
    }
    
    }


    return(
        <Wrapper>
            
            <HeadLineWrapper>
                <Time>12:30</Time>
            </HeadLineWrapper>

            <BodyWrapper>
                <MainIcon src='/itsicon.svg'></MainIcon>
                <ItsloadText>잇츠로드</ItsloadText>
                <IdWrapper>
                    <InputId type = "text" onChange={emailChange}></InputId>
                    <CancelIcon src ='/cancel.svg'></CancelIcon>
                </IdWrapper>
                <UnderLine></UnderLine>
                <ErrorIdMessage>{errorId}</ErrorIdMessage>

                <PasswordWrapper>
                    <InputPassword type = "password" onChange={passwordChange}></InputPassword>
                    <CancelIcon src ='/cancel.svg'></CancelIcon>
                </PasswordWrapper>
                <UnderLine></UnderLine>
                <ErrorPwMessage>{errorPw}</ErrorPwMessage>

                <LoginButton onClick={ErrorMessage}>로그인</LoginButton>

                <MenuWrapper>
                    <MenuContent>이메일 찾기</MenuContent>
                    <BarLine>|</BarLine>
                    <MenuContent>비밀번호 찾기</MenuContent>
                    <BarLine>|</BarLine>
                    <MenuContent>회원가입</MenuContent>
                </MenuWrapper>  

                <KakaoButton type="submit" src = '/kakao.svg'>카카오톡으로 로그인</KakaoButton>        

            </BodyWrapper>





        </Wrapper>
        
    )


}

export default LoginPage;


