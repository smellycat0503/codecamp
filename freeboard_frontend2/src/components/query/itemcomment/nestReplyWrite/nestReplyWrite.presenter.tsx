import {from} from '@apollo/client'
import {
  Wrapper,
  Nested__Reply__Wrapper,
  Arrow__Icon,
  Nested__Reply__Input__Wrapper,
  Nested__Reply__Input,
  Nested__Reply__Count__Button__Wrapper,
  Nested__Reply__Count,
  Nested__Reply__Post__Button,
} from './nestReplyWrite.styled'

const NestReplyWriteUI = ({onChangeAnswerReply, onClickAnswerButton}) => {
  return (
    <Wrapper>
      <Nested__Reply__Wrapper>
        <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
        <Nested__Reply__Input__Wrapper>
          <Nested__Reply__Input
            onChange={onChangeAnswerReply}
            name="contents"
          ></Nested__Reply__Input>
          <Nested__Reply__Count__Button__Wrapper>
            <Nested__Reply__Count></Nested__Reply__Count>
            <Nested__Reply__Post__Button onClick={onClickAnswerButton}>
              답글등록
            </Nested__Reply__Post__Button>
          </Nested__Reply__Count__Button__Wrapper>
        </Nested__Reply__Input__Wrapper>
      </Nested__Reply__Wrapper>
    </Wrapper>
  )
}

export default NestReplyWriteUI
