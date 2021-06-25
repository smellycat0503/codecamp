// import {Reply__List__Wrapper} from './ItemComment.styled'

import NestedReply from '../nestedReply/nestedReply.container'
import NestReplyWrite from '../nestReplyWrite/nestReplyWrite.container'
import {
  Wrapper,
  ReplyWrapper,
  Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper,
  Reply__UserIcon,
  Reply__UserName__Contents__Date__Wrapper,
} from './ItemCommentReplyList.styled'
//*댓글 목록/ 맵, 인피니트스크롤 적용 페이지

const Reply__ListUI = ({data, answerData}) => {
  return (
    <Wrapper>
      <ReplyWrapper>
        <Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper>
          <Reply__UserIcon src="/user40.png"></Reply__UserIcon>
          <Reply__UserName__Contents__Date__Wrapper>
            <div>{data?.user.name}</div>
            <div>{data?.contents}</div>
            {/* <div>{data?.createAt}</div> */}
          </Reply__UserName__Contents__Date__Wrapper>
        </Reply__UserName__Contents__Date__Wrapper__Icon__Wrapper>

        <NestReplyWrite></NestReplyWrite>

        {answerData?.fetchUseditemQuestionAnswers.map((data, index) => (
          <NestedReply data={data} key={index}></NestedReply>
        ))}
      </ReplyWrapper>
    </Wrapper>
  )
}

export default Reply__ListUI
