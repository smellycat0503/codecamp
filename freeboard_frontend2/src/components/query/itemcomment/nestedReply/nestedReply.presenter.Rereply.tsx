// import {useContext, useState} from 'react'
// import {LayoutContext} from '../../../../../pages/_app'
// import {getDate} from '../../../../commons/libraries/utils'
// import {
//   Arrow__Icon,
//   Nested__Reply__Input__Wrapper,
//   Nested__Reply__Input,
//   Nested__Reply__Count__Button__Wrapper,
//   Nested__Reply__Count,
//   Nested__Reply__Post__Button,
//   Nest__Reply__Contents__Wrapper,
//   Nest__Reply__User__Icon,
//   Nest__Reply__Name__Contents__Wrapper,
//   Nest__Reply__UserName,
//   Nest__Reply__Contents,
//   Nest__Reply__Date,
//   Nest__Reply__Edit__Delete__Buttons__Wrapper,
//   Nest__Reply__Edit__Button,
//   Nest__Reply__Delete__Button,
//   Nest__Reply__Icon__Contents__Wrapper,
//   Click__Input__Nested__Reply__Wrapper,
//   Nested__Reply__Input__Count__Button__Wrapper,
//   Nested__Reply__Button,
// } from './nestedReply.styles'

// const Rereply = ({
//   openNestedReply,
//   data2,
//   onClickAnswerButton,
//   inputAnswerReply,
//   answerData,
//   onClickNestedReplyButton,
// }) => {
//   //*본인 글 권한 확인
//   const {accessToken, userInfo} = useContext(LayoutContext)

//   //*map으로 뿌린 뒤 불린값도 각 대댓글에 뿌림.
//   const [isupdateReply, setIsupdateReply] = useState(true)

//   const isOwner = data2.user._id === userInfo?._id

//   console.log(openNestedReply, '불란 잘 받아오니')

//   return (
//     <>
//       <Nested__Reply__Input__Wrapper>
//         {!openNestedReply ? (
//           <>
//             <Click__Input__Nested__Reply__Wrapper>
//               <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
//               <Nested__Reply__Input__Count__Button__Wrapper>
//                 <Nested__Reply__Input
//                   name="contents"
//                   onChange={inputAnswerReply}
//                 ></Nested__Reply__Input>
//                 <Nested__Reply__Count__Button__Wrapper>
//                   <Nested__Reply__Count></Nested__Reply__Count>
//                   <Nested__Reply__Post__Button onClick={onClickAnswerButton}>
//                     답글등록
//                   </Nested__Reply__Post__Button>
//                 </Nested__Reply__Count__Button__Wrapper>
//               </Nested__Reply__Input__Count__Button__Wrapper>
//             </Click__Input__Nested__Reply__Wrapper>
//           </>
//         ) : (
//           openNestedReply && (
//             <Nest__Reply__Contents__Wrapper>
//               <Arrow__Icon src="/arrow_right.png"></Arrow__Icon>
//               <Nest__Reply__Icon__Contents__Wrapper>
//                 <Nest__Reply__User__Icon src="/icon4848.png"></Nest__Reply__User__Icon>
//                 <Nest__Reply__Name__Contents__Wrapper>
//                   <Nest__Reply__UserName>
//                     {data2.user.name}
//                   </Nest__Reply__UserName>
//                   <Nest__Reply__Contents>
//                     {data2.contents}
//                   </Nest__Reply__Contents>
//                   <Nest__Reply__Date>
//                     {getDate(data2.createdAt)}
//                   </Nest__Reply__Date>
//                 </Nest__Reply__Name__Contents__Wrapper>
//               </Nest__Reply__Icon__Contents__Wrapper>
//               {openNestedReply && isOwner ? (
//                 <Nest__Reply__Edit__Delete__Buttons__Wrapper>
//                   <Nest__Reply__Edit__Button src="/editicon.png"></Nest__Reply__Edit__Button>
//                   <Nest__Reply__Delete__Button src="/deleteicon.png"></Nest__Reply__Delete__Button>
//                 </Nest__Reply__Edit__Delete__Buttons__Wrapper>
//               ) : (
//                 <Nested__Reply__Button
//                   onClick={onClickNestedReplyButton}
//                   src="/nestedreply.png"
//                 ></Nested__Reply__Button>
//               )}
//             </Nest__Reply__Contents__Wrapper>
//           )
//         )}
//       </Nested__Reply__Input__Wrapper>
//     </>
//   )
// }

// export default Rereply
