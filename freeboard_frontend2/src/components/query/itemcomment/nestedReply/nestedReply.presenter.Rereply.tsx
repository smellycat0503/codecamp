import {
  Wrapper,
  Nested__Reply__Wrapper,
  Arrow__Icon,
  Nested__Reply__Input__Wrapper,
  Nested__Reply__Input,
  Nested__Reply__Count__Button__Wrapper,
  Nested__Reply__Count,
  Nested__Reply__Post__Button,
  Nest__Reply__Contents__Wrapper,
  Nest__Reply__User__Icon,
  Nest__Reply__Name__Contents__Wrapper,
  Nest__Reply__UserName,
  Nest__Reply__Contents,
  Nest__Reply__Date,
  Nest__Reply__Edit__Delete__Buttons__Wrapper,
  Nest__Reply__Edit__Button,
  Nest__Reply__Delete__Button,
  Nest__Reply__Icon__Contents__Wrapper,
  Click__Input__Nested__Reply__Wrapper,
  Nested__Reply__Input__Count__Button__Wrapper,
} from './nestedReply.styles'

const Rereply = (
  openNestedReply,

  onClickAnswerButton,
  inputAnswerReply,
  answerData
) => {
  return (
    <>
      <Nested__Reply__Wrapper>
        {answerData?.fetchUseditemQuestionAnswers.length > 0 && (
          <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
        )}
        <Nested__Reply__Input__Wrapper>
          {!openNestedReply ? (
            <>
              <Click__Input__Nested__Reply__Wrapper>
                <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
                <Nested__Reply__Input__Count__Button__Wrapper>
                  <Nested__Reply__Input
                    name="contents"
                    onChange={inputAnswerReply}
                  ></Nested__Reply__Input>
                  <Nested__Reply__Count__Button__Wrapper>
                    <Nested__Reply__Count></Nested__Reply__Count>
                    <Nested__Reply__Post__Button onClick={onClickAnswerButton}>
                      답글등록
                    </Nested__Reply__Post__Button>
                  </Nested__Reply__Count__Button__Wrapper>
                </Nested__Reply__Input__Count__Button__Wrapper>
              </Click__Input__Nested__Reply__Wrapper>
            </>
          ) : (
            answerData?.fetchUseditemQuestionAnswers.length > 0 && (
              <Nest__Reply__Contents__Wrapper>
                <Nest__Reply__Icon__Contents__Wrapper>
                  <Nest__Reply__User__Icon src="/icon4848.png"></Nest__Reply__User__Icon>
                  <Nest__Reply__Name__Contents__Wrapper>
                    <Nest__Reply__UserName>노원두</Nest__Reply__UserName>
                    <Nest__Reply__Contents>안녕하세요</Nest__Reply__Contents>
                    <Nest__Reply__Date>2021.02.22</Nest__Reply__Date>
                  </Nest__Reply__Name__Contents__Wrapper>
                </Nest__Reply__Icon__Contents__Wrapper>
                <Nest__Reply__Edit__Delete__Buttons__Wrapper>
                  <Nest__Reply__Edit__Button src="/editicon.png"></Nest__Reply__Edit__Button>
                  <Nest__Reply__Delete__Button src="/deleteicon.png"></Nest__Reply__Delete__Button>
                </Nest__Reply__Edit__Delete__Buttons__Wrapper>
              </Nest__Reply__Contents__Wrapper>
            )
          )}
        </Nested__Reply__Input__Wrapper>
      </Nested__Reply__Wrapper>
    </>
  )
}

export default Rereply
