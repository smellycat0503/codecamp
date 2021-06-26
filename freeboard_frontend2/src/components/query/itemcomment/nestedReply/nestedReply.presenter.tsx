import {getDate} from '../../../../commons/libraries/utils'
import {
  Wrapper,
  Nest__Reply__Contents__Wrapper,
  Nest__Reply__User__Icon,
  Arrow__Icon,
  Nest__Reply__Name__Contents__Wrapper,
  Nest__Reply__UserName,
  Nest__Reply__Contents,
  Nest__Reply__Date,
  Nest__Reply__Edit__Delete__Buttons__Wrapper,
  Nest__Reply__Edit__Button,
  Nest__Reply__Delete__Button,
  Nested__Reply__Edit__Wrapper,
  Nested__Reply__Edit__Input__Count__Button__Wrapper,
  Nest__Reply__UserName__Input__Wrapper,
  Nested__Reply__Edit__Input,
  Nested__Reply__Edit__Count__Button__Wrapper,
  Nested__Reply__Edit__Input__Count,
  Nested__Reply__Edit__Button,
  Nest__Reply__Icon__Name__Contents__Wrapper,
} from './nestedReply.styles'

//*대댓글 입력
const NestedReplyUI = ({
  commentReply,
  onClickDeleteButton,
  onClickEditIcon,
  isUpdate,
  onClickUpdateButton,
  onChangeAnswerReply,
}) => {
  return (
    <Wrapper>
      {!isUpdate ? (
        <Nest__Reply__Contents__Wrapper>
          <Nest__Reply__Icon__Name__Contents__Wrapper>
            <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
            <Nest__Reply__User__Icon src="/user40.png"></Nest__Reply__User__Icon>
            <Nest__Reply__Name__Contents__Wrapper>
              <Nest__Reply__UserName>
                {commentReply.user.name}
              </Nest__Reply__UserName>
              <Nest__Reply__Contents>
                {commentReply.contents}
              </Nest__Reply__Contents>

              <Nest__Reply__Date>
                {getDate(commentReply.createdAt)}
              </Nest__Reply__Date>
            </Nest__Reply__Name__Contents__Wrapper>
          </Nest__Reply__Icon__Name__Contents__Wrapper>
          <Nest__Reply__Edit__Delete__Buttons__Wrapper>
            <Nest__Reply__Edit__Button
              onClick={onClickEditIcon}
              src="/editicon.png"
            ></Nest__Reply__Edit__Button>
            <Nest__Reply__Delete__Button
              onClick={onClickDeleteButton}
              src="/deleteicon.png"
            ></Nest__Reply__Delete__Button>
          </Nest__Reply__Edit__Delete__Buttons__Wrapper>
        </Nest__Reply__Contents__Wrapper>
      ) : (
        <Nested__Reply__Edit__Wrapper>
          <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
          <Nest__Reply__User__Icon src="/user40.png"></Nest__Reply__User__Icon>
          <Nest__Reply__UserName__Input__Wrapper>
            <Nest__Reply__UserName>
              {commentReply.user.name}
            </Nest__Reply__UserName>
            <Nested__Reply__Edit__Input__Count__Button__Wrapper>
              <Nested__Reply__Edit__Input
                name="contents"
                onChange={onChangeAnswerReply}
              ></Nested__Reply__Edit__Input>
              <Nested__Reply__Edit__Count__Button__Wrapper>
                <Nested__Reply__Edit__Input__Count></Nested__Reply__Edit__Input__Count>
                <Nested__Reply__Edit__Button onClick={onClickUpdateButton}>
                  수정하기
                </Nested__Reply__Edit__Button>
              </Nested__Reply__Edit__Count__Button__Wrapper>
            </Nested__Reply__Edit__Input__Count__Button__Wrapper>
          </Nest__Reply__UserName__Input__Wrapper>
        </Nested__Reply__Edit__Wrapper>
      )}
    </Wrapper>
  )
}

export default NestedReplyUI
