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

// const Reply__List = ({
//   readReply,
//   onLoadMore,
//   onClickDeleteQuestion,
//   onClickEditButton,
//   updateButton,
//   onChangeReplyInput,
//   onClickUpdataReply,
//   // userInfo,
//   //!유저정보가 프롭스로는 적용이 안되네.
// }) => {
//   const {accessToken, userInfo} = useContext(LayoutContext)

//   return (
//     <Reply__List__Wrapper>
//       {readReply?.fetchUseditemQuestions && (
//         <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
//           {readReply?.fetchUseditemQuestions.map((data, index) => (
//             <>
//               <Reply__Contents__Wrapper>
//                 <UserIcon__UserInfo__Wrapper>
//                   <UserIcon src="/user40.png"></UserIcon>
//                   <UserInfo__Reply__Content__Wrapper>
//                     <Reply__UserName>{data.user.name}</Reply__UserName>
//                     {updateButton[index] ? (
//                       <Reply__Edit__Wrapper id={data._id}>
//                         <Reply__Edit__Input
//                           onChange={onChangeReplyInput}
//                           name="contents"
//                         ></Reply__Edit__Input>
//                         <Reply__Edit__Count__Wrapper>
//                           <Reply__Edit__count></Reply__Edit__count>
//                           <Reply__Edit__Button
//                             onClick={onClickUpdataReply}
//                             id={data._id}
//                             //! 마지막 수정하기 버튼 클릭 시의 위치에서 id를 찾아야 한다.
//                           >
//                             수정하기
//                           </Reply__Edit__Button>
//                         </Reply__Edit__Count__Wrapper>
//                       </Reply__Edit__Wrapper>
//                     ) : (
//                       <>
//                         <Reply__Content>{data.contents}</Reply__Content>
//                         <Reply__Date>{data.createdAt}</Reply__Date>
//                       </>
//                     )}
//                   </UserInfo__Reply__Content__Wrapper>
//                 </UserIcon__UserInfo__Wrapper>

//                 {updateButton[index] ? (
//                   ''
//                 ) : (
//                   <Delete__Edit__Wrapper>
//                     {data.user._id !== userInfo?._id ? (
//                       ''
//                     ) : (
//                       <>
//                         <Edit__Buttom
//                           onClick={onClickEditButton}
//                           // id={data._id}
//                           id={index}
//                           src="/editicon.png"
//                         ></Edit__Buttom>
//                         <Delete__Button
//                           name={data.user._id}
//                           id={data._id}
//                           src="/deleteicon.png"
//                         ></Delete__Button>
//                       </>
//                     )}
//                   </Delete__Edit__Wrapper>
//                 )}
//               </Reply__Contents__Wrapper>
//               {!updateButton ? '' : <Line></Line>}
//             </>
//           ))}
//         </InfiniteScroll>
//       )}
//     </Reply__List__Wrapper>
//   )
// }

// export default Reply__List

// // <Reply__List__Wrapper>
// // {readReply?.fetchUseditemQuestions && (
// //   <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
// //     {readReply?.fetchUseditemQuestions.map((data) => (
// //       <Reply__Contents__Wrapper>
// //                          {!updateButton ? (1) : (<></>)}
// //         <UserIcon__UserInfo__Wrapper>
// //           <UserIcon src="/user40.png"></UserIcon>
// //           <UserInfo__Reply__Content__Wrapper>
// //             <Reply__UserName>{data.user.name}</Reply__UserName>

// //             <Reply__Edit__Wrapper>
// //               <Reply__Edit__Input></Reply__Edit__Input>
// //               <Reply__Edit__Count__Wrapper>
// //                 <Reply__Edit__count></Reply__Edit__count>
// //                 <Reply__Edit__Button>수정하기</Reply__Edit__Button>
// //               </Reply__Edit__Count__Wrapper>
// //             </Reply__Edit__Wrapper>
// //             {/* <Reply__Content>{data.contents}</Reply__Content>
// //             <Reply__Date>{data.createdAt}</Reply__Date> */}
// //           </UserInfo__Reply__Content__Wrapper>
// //         </UserIcon__UserInfo__Wrapper>

// //         <Delete__Edit__Wrapper>
// //           {data.user._id !== userInfo?._id ? (
// //             ''
// //           ) : (
// //             <>
// //               <Edit__Buttom
// //                 onClick={updateButton}
// //                 src="/editicon.png"
// //               ></Edit__Buttom>
// //               <Delete__Button
// //                 name={data.user._id}
// //                 id={data._id}
// //                 src="/deleteicon.png"
// //               ></Delete__Button>
// //             </>
// //           )}
// //         </Delete__Edit__Wrapper>
// //       </Reply__Contents__Wrapper>
// //     ))}
// //   </InfiniteScroll>
// // )}
// // </Reply__List__Wrapper>
