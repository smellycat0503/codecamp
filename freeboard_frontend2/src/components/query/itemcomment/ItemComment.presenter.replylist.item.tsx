import {useContext} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import {
  Reply__List__Wrapper,
  Reply__Contents__Wrapper,
  UserIcon__UserInfo__Wrapper,
  UserIcon,
  UserInfo__Reply__Content__Wrapper,
  Reply__UserName,
  Reply__Content,
  Reply__Date,
  Delete__Edit__Wrapper,
  Delete__Button,
  Edit__Buttom,
  Reply__Edit__Wrapper,
  Reply__Edit__Input,
  Reply__Edit__Count__Wrapper,
  Reply__Edit__count,
  Reply__Edit__Button,
  Line,
} from './ItemComment.styled'
import ReplylistItem2 from './ItemComment.presenter.replylist.item2'

const ReplylistItem = ({
  onClickEditButton,
  updateButton,
  onChangeReplyInput,
  onClickUpdataReply,
  onClickDeleteQuestion,
  data,

  index,
}) => {
  const {accessToken, userInfo} = useContext(LayoutContext)
  return (
    <>
      <Reply__Contents__Wrapper>
        <UserIcon__UserInfo__Wrapper>
          <UserIcon src="/user40.png"></UserIcon>
          <UserInfo__Reply__Content__Wrapper>
            <Reply__UserName>{data.user.name}</Reply__UserName>
            {!updateButton ? (
              <Reply__Edit__Wrapper id={data._id}>
                <Reply__Edit__Input
                  onChange={onChangeReplyInput}
                  name="contents"
                ></Reply__Edit__Input>
                <Reply__Edit__Count__Wrapper>
                  <Reply__Edit__count></Reply__Edit__count>
                  <Reply__Edit__Button
                    onClick={onClickUpdataReply}
                    id={data._id}
                    //! 마지막 수정하기 버튼 클릭 시의 위치에서 id를 찾아야 한다.
                  >
                    수정하기
                  </Reply__Edit__Button>
                </Reply__Edit__Count__Wrapper>
              </Reply__Edit__Wrapper>
            ) : (
              <>
                <Reply__Content>{data.contents}</Reply__Content>
                <Reply__Date>{data.createdAt}</Reply__Date>
              </>
            )}
          </UserInfo__Reply__Content__Wrapper>
        </UserIcon__UserInfo__Wrapper>

        {!updateButton ? (
          ''
        ) : (
          <ReplylistItem2
            onClickEditButton={onClickEditButton}
            data={data}
            onClickDeleteQuestion={onClickDeleteQuestion}
          />
        )}
      </Reply__Contents__Wrapper>
      {!updateButton ? '' : <Line></Line>}
    </>
  )
}

export default ReplylistItem

// import {useState} from 'react'
// import {
//   Reply__List__Wrapper,
//   Reply__Contents__Wrapper,
//   UserIcon__UserInfo__Wrapper,
//   UserIcon,
//   UserInfo__Reply__Content__Wrapper,
//   Reply__UserName,
//   Reply__Content,
//   Reply__Date,
//   Delete__Edit__Wrapper,
//   Delete__Button,
//   Edit__Buttom,
//   Reply__Edit__Wrapper,
//   Reply__Edit__Input,
//   Reply__Edit__Count__Wrapper,
//   Reply__Edit__count,
//   Reply__Edit__Button,
//   Line,
// } from './ItemComment.styled'
// import InfiniteScroll from 'react-infinite-scroller'
// import {LayoutContext} from '../../../../pages/_app'
// import {useContext} from 'react'
// // const [updateButton, setUpdateButton] = useState(false)

// const ReplylistItem = ({
//   data,
//   onChangeReplyInput,
//   onClickUpdataReply,
//   index,
// }) => {
//   return (
//     <Reply__Edit__Wrapper>
//       <Reply__Edit__Input
//         onChange={onChangeReplyInput}
//         name="contents"
//       ></Reply__Edit__Input>
//       <Reply__Edit__Count__Wrapper>
//         <Reply__Edit__count></Reply__Edit__count>
//         <Reply__Edit__Button
//           onClick={onClickUpdataReply}
//           id={data._id}
//           //! 마지막 수정하기 버튼 클릭 시의 위치에서 id를 찾아야 한다.
//         >
//           수정하기
//         </Reply__Edit__Button>
//       </Reply__Edit__Count__Wrapper>
//     </Reply__Edit__Wrapper>
//   )
// }

// export default ReplylistItem
