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
} from './ItemComment.styled'
import InfiniteScroll from 'react-infinite-scroller'

const Reply__List = ({readReply, onLoadMore}) => {
  return (
    <Reply__List__Wrapper>
      {readReply?.fetchUseditemQuestions && (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {readReply?.fetchUseditemQuestions.map((data) => (
            <Reply__Contents__Wrapper>
              <UserIcon__UserInfo__Wrapper>
                <UserIcon src="/user40.png"></UserIcon>
                <UserInfo__Reply__Content__Wrapper>
                  <Reply__UserName>{data.user.name}</Reply__UserName>
                  <Reply__Content>{data.contents}</Reply__Content>
                  <Reply__Date>{data.createdAt}</Reply__Date>
                </UserInfo__Reply__Content__Wrapper>
              </UserIcon__UserInfo__Wrapper>
              <Delete__Edit__Wrapper>
                <Edit__Buttom src="/editicon.png"></Edit__Buttom>
                <Delete__Button src="/deleteicon.png"></Delete__Button>
              </Delete__Edit__Wrapper>
            </Reply__Contents__Wrapper>
          ))}
        </InfiniteScroll>
      )}
    </Reply__List__Wrapper>
  )
}

export default Reply__List
