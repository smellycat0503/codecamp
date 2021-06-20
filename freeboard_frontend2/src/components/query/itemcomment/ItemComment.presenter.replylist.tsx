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
import InfiniteScroll from 'react-infinite-scroller'
import {LayoutContext} from '../../../../pages/_app'
import {useContext} from 'react'

import ReplylistItem from './ItemComment.presenter.replylist.item'
// import ReplylistItem2 from './ItemComment.presenter.replylist.item2'

const Reply__List = ({
  readReply,
  onLoadMore,
  onClickDeleteQuestion,
  onClickEditButton,
  updateButton,
  onChangeReplyInput,
  onClickUpdataReply,
  // userInfo,
  //!유저정보가 프롭스로는 적용이 안되네.
}) => {
  const {accessToken, userInfo} = useContext(LayoutContext)

  return (
    <Reply__List__Wrapper>
      {readReply?.fetchUseditemQuestions && (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {readReply?.fetchUseditemQuestions.map((data, index) => (
            <ReplylistItem
              onChangeReplyInput={onChangeReplyInput}
              onClickUpdataReply={onClickUpdataReply}
              data={data}
              updateButton={updateButton}
              onClickEditButton={onClickEditButton}
              onClickDeleteQuestion={onClickDeleteQuestion}
            />
          ))}
        </InfiniteScroll>
      )}
    </Reply__List__Wrapper>
  )
}

export default Reply__List

// <Reply__List__Wrapper>
// {readReply?.fetchUseditemQuestions && (
//   <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
//     {readReply?.fetchUseditemQuestions.map((data) => (
//       <Reply__Contents__Wrapper>
//                          {!updateButton ? (1) : (<></>)}
//         <UserIcon__UserInfo__Wrapper>
//           <UserIcon src="/user40.png"></UserIcon>
//           <UserInfo__Reply__Content__Wrapper>
//             <Reply__UserName>{data.user.name}</Reply__UserName>

//             <Reply__Edit__Wrapper>
//               <Reply__Edit__Input></Reply__Edit__Input>
//               <Reply__Edit__Count__Wrapper>
//                 <Reply__Edit__count></Reply__Edit__count>
//                 <Reply__Edit__Button>수정하기</Reply__Edit__Button>
//               </Reply__Edit__Count__Wrapper>
//             </Reply__Edit__Wrapper>
//             {/* <Reply__Content>{data.contents}</Reply__Content>
//             <Reply__Date>{data.createdAt}</Reply__Date> */}
//           </UserInfo__Reply__Content__Wrapper>
//         </UserIcon__UserInfo__Wrapper>

//         <Delete__Edit__Wrapper>
//           {data.user._id !== userInfo?._id ? (
//             ''
//           ) : (
//             <>
//               <Edit__Buttom
//                 onClick={updateButton}
//                 src="/editicon.png"
//               ></Edit__Buttom>
//               <Delete__Button
//                 name={data.user._id}
//                 id={data._id}
//                 src="/deleteicon.png"
//               ></Delete__Button>
//             </>
//           )}
//         </Delete__Edit__Wrapper>
//       </Reply__Contents__Wrapper>
//     ))}
//   </InfiniteScroll>
// )}
// </Reply__List__Wrapper>
