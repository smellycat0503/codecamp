import {Wrapper, HeadlineWrapper, Icon1, Icon2, Icon3, Time, SearchWrapper
    , IconSearch, MyinfoWrapper,MyinfoWrapperLeft, MyinfoWrapperRight
    , My, MyPicture, Name, Icon4, MenuWrapper, Notice, Event, FAQ
    , QNA, LineWrapper, BodyWrapper, BodyRight, BodyLeft
    , Question, QuestionContent, QuestionBox, DownArrow, BottomWrapper
    , BottomIcon, Bottom, BottomText } from '../../styles/fag.mypage'



export default function Mypage() {
 
 
    //자바스크립티
    return  (
        <Wrapper>
            <HeadlineWrapper>
                <Icon1>▽</Icon1><Icon2>◁</Icon2><Icon3>⚡︎</Icon3><Time>12:30</Time>
            </HeadlineWrapper>
            <SearchWrapper>
                <IconSearch>🔍</IconSearch>
            </SearchWrapper>
            <MyinfoWrapper>
                <MyinfoWrapperLeft>
                    <My>마이</My>
                </MyinfoWrapperLeft>
                <MyinfoWrapperRight>
                    <MyPicture src='/aaa/1.png'></MyPicture><Name>임정아</Name><Icon4>▷</Icon4>
                    {/* 이미지는 퍼블릭 폴더에 위치가 고정되어있음 */}
                </MyinfoWrapperRight>
            </MyinfoWrapper>
            <MenuWrapper>
                    <Notice>공지사항</Notice><Event>이벤트</Event><FAQ>FAQ</FAQ><QNA>QNA</QNA>

            </MenuWrapper>
            <LineWrapper></LineWrapper>
            <BodyWrapper>
                <BodyLeft>
                    <QuestionBox>
                        <Question>Q.01</Question>
                        <QuestionContent>리뷰 작성은 어떻게 하나요?</QuestionContent>
                    </QuestionBox>
                    <QuestionBox>
                        <Question>Q.02</Question>
                        <QuestionContent>리뷰 수정/삭제는 어떻게 하나요?</QuestionContent>
                    </QuestionBox>
                    <QuestionBox>
                        <Question>Q.03</Question>
                        <QuestionContent>아이디/비밀번호를 잊어버렸어요.</QuestionContent>
                    </QuestionBox>
                    <QuestionBox>
                        <Question>Q.04</Question>
                        <QuestionContent>회원탈퇴를 하고싶어요.</QuestionContent>
                    </QuestionBox>
                    <QuestionBox>
                        <Question>Q.05</Question>
                        <QuestionContent>출발지 설정은 어떻게 하나요?</QuestionContent>
                    </QuestionBox>
                    <QuestionBox>
                        <Question>Q.06</Question>
                        <QuestionContent>비밀번호를 변경하고 싶어요.</QuestionContent>
                    </QuestionBox>
                </BodyLeft>
                <BodyRight>
                    <DownArrow>▽</DownArrow>
                    <DownArrow>▽</DownArrow>
                    <DownArrow>▽</DownArrow>
                    <DownArrow>▽</DownArrow>
                    <DownArrow>▽</DownArrow>
                    <DownArrow>▽</DownArrow>
                </BodyRight>
            </BodyWrapper>
            <BottomWrapper>

                    <BottomIcon>🏠</BottomIcon>
                    <BottomIcon>🍔</BottomIcon>
                    <BottomIcon>💖</BottomIcon>
                    <BottomIcon>🧑‍💼</BottomIcon>
            </BottomWrapper>
            <Bottom>
                <BottomText>홈</BottomText>
                <BottomText>잇츠로드</BottomText>
                <BottomText>미이찜</BottomText>
                <BottomText>마이</BottomText>
            </Bottom>

                





        </Wrapper>
    )
}