import {useState} from 'react'
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
// const [updateButton, setUpdateButton] = useState(false)

const ReplylistItem2 = ({
  onClickEditButton,
  // index,
  data,
  onClickDeleteQuestion,
}) => {
  const {accessToken, userInfo} = useContext(LayoutContext)
  return (
    <>
      <Delete__Edit__Wrapper>
        {data.user._id !== userInfo?._id ? (
          ''
        ) : (
          <>
            <Edit__Buttom
              onClick={onClickEditButton}
              // id={data._id}
              id={data._id}
              src="/editicon.png"
            ></Edit__Buttom>
            <Delete__Button
              name={data.user._id}
              id={data._id}
              src="/deleteicon.png"
              onClick={onClickDeleteQuestion}
            ></Delete__Button>
          </>
        )}
      </Delete__Edit__Wrapper>
    </>
  )
}

export default ReplylistItem2
