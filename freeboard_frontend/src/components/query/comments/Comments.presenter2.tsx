import {
  Star,
  Replyed__Contents__Wrapper,
  UserIcon,
  Writed__UserID,
  Comment__Rignt,
  User__Comment,
  Id__And__Star__Wrapper,
  Writed__Date,
  Rewrite__Button,
  Delete__Button,
  Rewrite__And__Delete__Wrapper,
} from "./Comments.styles";

const ReplyMapUI = (props) => {
  return (
    <>
      {props.datareply?.fetchBoardComments.map((asd) => (
        <Replyed__Contents__Wrapper>
          <UserIcon src="/useri.png"></UserIcon>
          <Comment__Rignt>
            <Id__And__Star__Wrapper>
              <Writed__UserID>{asd.writer}</Writed__UserID>

              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Rewrite__And__Delete__Wrapper>
                <Rewrite__Button src="/rewrite.png"></Rewrite__Button>
                <Delete__Button src="/delete.png"></Delete__Button>
              </Rewrite__And__Delete__Wrapper>
            </Id__And__Star__Wrapper>
            <User__Comment>{asd.contents}</User__Comment>
            <Writed__Date>{asd.createdAt}</Writed__Date>
          </Comment__Rignt>
        </Replyed__Contents__Wrapper>
      ))}
    </>
  );
};

export default ReplyMapUI;
