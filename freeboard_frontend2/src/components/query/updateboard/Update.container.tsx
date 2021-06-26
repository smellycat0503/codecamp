import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'

import {UPDATE_BOARD} from './Update.queries'

import QueryUI from './Update.presenter'

const Query = () => {
  const [bruma, setBruma] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
  })

  const [error, setError] = useState('')

  const [piccolo] = useMutation(UPDATE_BOARD)

  const router = useRouter()

  console.log('라우터', router)

  function onChangeInput(event) {
    const videl = {
      writer: bruma.writer,
      password: bruma.password,
      title: bruma.title,
      contents: bruma.contents,
      [event.target.name]: event.target.value,
    }
    setBruma(videl)

    if (!bruma.writer || !bruma.password || !bruma.title || !bruma.contents) {
      setError('내용을 입력하세요')
    } else {
      setError('')
    }
  }
  async function onClickPost() {
    try {
      const {data} = await piccolo({
        variables: {
          writer: '',
          password: '',
          title: '',
          contents: '',
          boardId: router.query.ID,
        },
      })
      router.push(`/board/${data.updateBoard._id}`)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <QueryUI
      onClickPost={onClickPost}
      onChangeInput={onChangeInput}
      error={error}
    />
  )
}

export default Query
