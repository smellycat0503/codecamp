import {IProps} from './Comments.types'
import {useState} from 'react'
import {UPDATAREPLY, DELETEREPLY, REPLY} from './Comments.queries'
import {useMutation, useQuery} from '@apollo/client'
import {
  ReplyWriter,
  ReplyPassword,
  Writer__Info__Wrapper,
  Content__textbox,
  Star__Wrapper,
  TextCount,
  Reply__Text__Bottom__Wrapper,
  Reply__Rewrite__Post__Button,
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
} from './Comments.styles'

import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import DialogTitle from '@material-ui/core/DialogTitle'

import {useRouter} from 'next/router'

const ReplyMapUI = ({data}: IProps) => {
  const [rewriteReply] = useMutation(UPDATAREPLY)
  const router = useRouter()
  const [replyRewrite, SetreplyRewrite] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0,
  })

  //!삭제 모달
  const [page, setPage] = useState(1)

  const {data: datareply, fetchMore} = useQuery(REPLY, {
    variables: {
      boardId: router.query.ID,
    },
  })
  // console.log(datareply)
  // console.log('댓글쿼리를 보자')

  const [open, setOpen] = useState(false)

  const [ID, setID] = useState('')
  const handleClickOpen = (event) => {
    setID(event.target.id)
    setOpen(true)
    // console.log(event.target.id)
  }

  const handleClose = () => {
    setOpen(false)
  }
  //!
  function onChangeReplyRewrite(event) {
    const ReplyRewriteInput = {
      ...replyRewrite,
      [event.target.name]: event.target.value,
    }
    // console.log(ReplyRewriteInput)
    SetreplyRewrite(ReplyRewriteInput)
    // console.log('댓글수정', ReplyRewriteInput)
  }

  async function onClickReplyRewritePost(event) {
    try {
      await rewriteReply({
        variables: {
          updateBoardCommentInput: {
            contents: replyRewrite.contents,
            rating: replyRewrite.rating,
          },
          password: replyRewrite.password,
          boardCommentId: event.target.id,
        },
        //!updateBoardCommentInput: 이 부분은 gql에서 요구하는 부분만 넣어줘야함!
        //!boardCommentId의 경로 -> 쿼리
        refetchQueries: [
          {
            query: REPLY,
            variables: {boardId: router.query.ID},
          },
        ],
      })
      // refetchQueries:[{query:REPLY,variables: {boardId: String(router.query.id) } }]
      //! 리패치쿼리 쓰는 법 파악하기!
    } catch (error) {
      alert('땡')
    }
  }

  const [isUpdate, setIsUptate] = useState(false)
  const handleIsUpdate = () => {
    setIsUptate((prev) => !prev)
    //! setIsUptate((prev) => !prev);
  }

  //! 여기부터 삭제 관련

  const [isDelete, setIsDelete] = useState(false)
  const handleIsDelete = () => {
    setIsDelete((prev) => !prev)
  }

  const [deletecomment] = useMutation(DELETEREPLY)

  async function onClickReplyDelete(event) {
    // console.log('=============')
    // console.log(event.target.id)
    // console.log('=============')
    try {
      await deletecomment({
        variables: {
          boardCommentId: ID,
          password: replyRewrite.password,
        },

        refetchQueries: [
          {
            query: REPLY,
            variables: {boardId: router.query.ID},
          },
        ],
        // variables: {
        // deleteBoardComment: {
        //   password: replyRewrite.password,
        //   boardCommentId: event.target.id,
        // },
        // },
      })
      setIsDelete((prev) => !prev)
    } catch (error) {
      alert('땡')
    }
  }

  const getDate = (date) => {
    // if (!date || typeof date !== 'string') return ''

    const value = new Date(date)
    const yyyy = value.getFullYear()
    const mm = String(value.getMonth() + 1).padStart(2, '0')
    const dd = String(value.getDate()).padStart(2, '0')

    return `${yyyy}.${mm}.${dd}`
  }

  //!별점

  const onMouseEnterHover = (event) => {
    SetreplyRewrite({...replyRewrite, rating: event.target.id})
    // console.log(replyRewrite, '수정호버')
  }

  const onMouseLeaveHover = () => {}

  const onSaveRating = (event) => {
    SetreplyRewrite({...replyRewrite, rating: event.target.id})
    // console.log(replyRewrite, '수정클릭')
  }

  return (
    <>
      {isUpdate ? (
        <>
          <Writer__Info__Wrapper>
            <ReplyWriter
              name="writer"
              type="text"
              onChange={onChangeReplyRewrite}
              placeholder="작성자"
            ></ReplyWriter>
            <ReplyPassword
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChangeReplyRewrite}
            ></ReplyPassword>
            <Star__Wrapper>
              {[1, 2, 3, 4, 5].map((index) => (
                <Star
                  id={String(index)}
                  src={
                    replyRewrite.rating >= index ? '/ystar.png' : '/Star.png'
                  }
                  onMouseEnter={onMouseEnterHover}
                  onMouseLeave={onMouseLeaveHover}
                  onClick={onSaveRating}
                ></Star>
              ))}
            </Star__Wrapper>
          </Writer__Info__Wrapper>
          <Content__textbox
            type="text"
            placeholder="개인정보 어쩌고고"
            name="contents"
            onChange={onChangeReplyRewrite}
          ></Content__textbox>
          <Reply__Text__Bottom__Wrapper>
            <TextCount type="text"></TextCount>
            <Reply__Rewrite__Post__Button
              id={data._id}
              onClick={onClickReplyRewritePost}
            >
              수정하기
            </Reply__Rewrite__Post__Button>
          </Reply__Text__Bottom__Wrapper>
        </>
      ) : (
        <Replyed__Contents__Wrapper>
          <UserIcon src="/useri.png"></UserIcon>
          <Comment__Rignt>
            <Id__And__Star__Wrapper>
              <Writed__UserID>{data.writer}</Writed__UserID>
              <Star__Wrapper>
                {[1, 2, 3, 4, 5].map((index) => (
                  <Star
                    id={data.rating}
                    src={data.rating >= index ? '/ystar.png' : '/star.png'}
                  ></Star>
                ))}
              </Star__Wrapper>
              <Rewrite__And__Delete__Wrapper>
                <Rewrite__Button
                  onClick={handleIsUpdate}
                  id={data._id}
                  src="/rewrite.png"
                ></Rewrite__Button>
                <Delete__Button
                  onClick={handleClickOpen}
                  id={data._id}
                  src="/delete.png"
                ></Delete__Button>
              </Rewrite__And__Delete__Wrapper>
            </Id__And__Star__Wrapper>
            <User__Comment>{data.contents}</User__Comment>
            <Writed__Date>{getDate(data.createdAt)}</Writed__Date>
          </Comment__Rignt>
        </Replyed__Contents__Wrapper>
      )}
      {open && (
        <>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'이 글을 삭제합니다.'}
              </DialogTitle>
              <DialogContent>
                <ReplyPassword
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={onChangeReplyRewrite}
                ></ReplyPassword>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  아니오
                </Button>
                <Button
                  onClick={(e) => {
                    handleClose()
                    onClickReplyDelete(e)
                  }}
                  color="primary"
                  autoFocus
                  id={data._id}
                >
                  네
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </>
      )}
    </>
  )
}

export default ReplyMapUI
