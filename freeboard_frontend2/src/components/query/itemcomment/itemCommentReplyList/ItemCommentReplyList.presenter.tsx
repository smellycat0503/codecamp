// import {Reply__List__Wrapper} from './ItemComment.styled'

import {getDate} from '../../../../commons/libraries/utils'
import NestedReply from '../nestedReply/nestedReply.container'
import NestReplyWrite from '../nestReplyWrite/nestReplyWrite.container'
import {
  Wrapper,
  ReplyWrapper,
  Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper,
  Reply__UserIcon,
  Reply__UserName__Contents__Date__Wrapper,
  Reply__UserName,
  Reply__Content,
  Reply__Date,
  Delete__Edit__Wrapper,
  Delete__Button,
  Edit__Button,
  Reply__Contents__Wrapper,
  Reply__Edit__Input,
  Reply__Edit__InputCount__Button__Wrapper,
  Reply__Edit__InputCount,
  Reply__Edit__Post__Button,
  Nested__Reply__Icon,
} from './ItemCommentReplyList.styled'
//*댓글 목록/ 맵, 인피니트스크롤 적용 페이지

const Reply__ListUI = ({
  data,
  answerData,
  onClickDeleteReply,
  onClickEditIcon,
  onClickUpdataReply,
  onChangeReplyInput,
  isUpdate,
  isOwner,
  openNestedReply,
  onClickNestedReplyButton,
  setIsUpdate,
  setOpenNestedReply,
}) => {
  return (
    <Wrapper>
      <ReplyWrapper>
        {!isUpdate ? (
          <Reply__Contents__Wrapper>
            <Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper>
              <Reply__UserIcon src="/user40.png"></Reply__UserIcon>
              <Reply__UserName__Contents__Date__Wrapper>
                <Reply__UserName>{data?.user.name}</Reply__UserName>
                <Reply__Edit__Input
                  name="contents"
                  onChange={onChangeReplyInput}
                ></Reply__Edit__Input>
                <Reply__Edit__InputCount__Button__Wrapper>
                  <Reply__Edit__InputCount></Reply__Edit__InputCount>
                  <Reply__Edit__Post__Button onClick={onClickUpdataReply}>
                    수정하기
                  </Reply__Edit__Post__Button>
                </Reply__Edit__InputCount__Button__Wrapper>
              </Reply__UserName__Contents__Date__Wrapper>
            </Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper>
          </Reply__Contents__Wrapper>
        ) : (
          <Reply__Contents__Wrapper>
            <Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper>
              <Reply__UserIcon src="/user40.png"></Reply__UserIcon>
              <Reply__UserName__Contents__Date__Wrapper>
                <Reply__UserName>{data?.user.name}</Reply__UserName>
                <Reply__Content>{data?.contents}</Reply__Content>
                <Reply__Date>{getDate(data?.createdAt)}</Reply__Date>
              </Reply__UserName__Contents__Date__Wrapper>
            </Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper>
            {!isOwner ? (
              <Delete__Edit__Wrapper>
                <Edit__Button
                  src="/editicon.png"
                  onClick={onClickEditIcon}
                ></Edit__Button>
                <Delete__Button
                  src="/deleteicon.png"
                  onClick={onClickDeleteReply}
                ></Delete__Button>
              </Delete__Edit__Wrapper>
            ) : (
              <Nested__Reply__Icon
                src="/nestedreply.png"
                onClick={onClickNestedReplyButton}
              ></Nested__Reply__Icon>
            )}
          </Reply__Contents__Wrapper>
        )}
        {!openNestedReply && (
          <NestReplyWrite
            data={data}
            setOpenNestedReply={setOpenNestedReply}
          ></NestReplyWrite>
        )}

        {answerData?.fetchUseditemQuestionAnswers.map((commentReply, index) => (
          <NestedReply
            commentId={data?._id}
            commentReply={commentReply}
            key={index}
          ></NestedReply>
        ))}
      </ReplyWrapper>
    </Wrapper>
  )
}

export default Reply__ListUI
