import {useEffect, useRef, useState} from 'react'
import {useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

import {CREATE_BOARD, PILLOWS, UPLOAD_FILE} from './QueryWrite.queries'
import Presenter from './QueryWrite.presenter'
import {IMutation} from '../../../commons/types/generated/types'
import {ConsoleSqlOutlined} from '@ant-design/icons'

// interface IErrorMessage{

// }

const Container = () => {
  const [uploadimage] = useMutation(UPLOAD_FILE)

  const router = useRouter()

  const [myImg, setMyImg] = useState([])
  //! 얘 원래 ('')였음.
  const [isTrue, setIsTrue] = useState(false)

  const [qwer, setQwer] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
    images: [],
  })

  const [radio, setRadio] = useState('')
  const [error, setError] = useState('')

  const {data} = useQuery(PILLOWS, {
    variables: {boardId: router.query.ID},
  })
  // console.log(data)

  function onChangeInput(event) {
    const iphone = {...qwer, [event.target.name]: event.target.value}
    setQwer(iphone)

    if (
      !qwer.writer ||
      !qwer.title ||
      !qwer.password ||
      !qwer.contents ||
      !qwer.youtubeUrl
    ) {
      setError('내용을 작성해주세요')
    } else {
      setError('')
    }
    console.log(iphone)
  }

  const [muta] = useMutation(CREATE_BOARD)

  async function onClickPost() {
    const res = await Promise.all(
      qwer.images.map((___, index) =>
        uploadimage({
          variables: {file: qwer.images[index]},
        })
      )
    )
    //!res = [{a:b~url}] 콘솔로그 찍어보자
    console.log(res, 'res')
    let images = []
    for (let i = 0; i < res.length; i++) {
      images.push(res[i].data.uploadFile.url)
    }

    try {
      const result = await muta({
        variables: {...qwer, images}, //! 여기에 이미지 추가!!!!!
      })
      // const id = result.data.createBoard._id;
      // alert(result.data.createBoard.message);
      setA(result.data.createBoard._id)
      handleClickOpen()
      console.log('리절트', result)
      // router.push(`/board/${result.data.createBoard._id}`)
      //! 리절트를 밖으로 꺼내기 위해 1. 유즈스테이트 사용. 기본값 별도로 필요치 않으므로 '' 사용.
      //! 2. 여기서의 결과를 셋A로 꺼내어 a에 넣는다.
      //* push 경로 파악하기.
    } catch (error) {
      alert(error.message)
    }
  }

  //! 모달 시도.

  const [a, setA] = useState('')
  //!! 모달 작업 과정.

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    router.push(`/board/${a}`)
    //! 3. 팝업 뜬 후 확인 버튼 누른 다음에 다음 화면으로 넘어가야 하기 때문에 셋오픈이 false가 될 때 라우터푸쉬 적용.
  }

  //!

  //! useEffect 도전!

  const inputRef = useRef(null)

  // console.log('inputRef', inputRef)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  // 빈 배열은 페이지가 나온 후 한번만 실행되는것
  //언제 쓰는가 => 화면이 그려진 이후에 실행되어야 할 때.
  //ex) 페이지가 길거나, 스크롤을 어느위치에 고정시키거나, 스크롤 바 없애기 등.
  // 지금은 화면이 나오고 나서 커서를 깜빡이고 싶음
  // 여기서 useRef를 사용했는데 용도는 좀 더 지켜보자

  //! 이미지 도전

  const [imgArr, setImgaArr] = useState([])

  const onChangeImage = async (event) => {
    const file = event.target.files
    //map을 쓰려했으나 안됨. 파일 자체의 속성떄무ㅡㄴ에 배열 형태일지라도 안됨 그렇게 알기

    let fileURLs = []
    let newFileArr = []
    //미리보ㅓ기를 위해 미리 담아두기.
    for (let i = 0; i < file.length; i++) {
      newFileArr.push(file[i])
      const reader = new FileReader()
      reader.readAsDataURL(file[i]) //읽기만
      reader.onload = (event) => {
        //읽은거 업로드용
        fileURLs[i] = event.target.result
        // console.log(event.target.result, 'event.target.result')
        setMyImg([...fileURLs])
        console.log(myImg, 'myImg')
        setIsTrue((prev) => !prev)
      }
    }
    setQwer({...qwer, images: newFileArr})
  }

  const onClickdeleteImage = (event) => {
    // setIsTrue((prev) => !prev)
    // const newArrForDel = new Array(myImg.length).fill(1)
    const del = Number(event.target.id)
    console.log(del, 'del') //!내가 클릭한 놈의 id가 찍힘.
    // const newArrForDel = new Array(myImg.length)
    //   .fill(myImg)
    //   .map((_, index) => [...myImg]) // 실패버전
    const newArrForDel = [...myImg]
    console.log(newArrForDel, 'newArrForDel')

    newArrForDel.splice(del, 1)
    setMyImg(newArrForDel)
  }
  console.log(myImg, '잘렸는지 보자')
  return (
    <Presenter
      inputRef={inputRef}
      onChangeInput={onChangeInput}
      onClickPost={onClickPost}
      error={error}
      data={data}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      onChangeImage={onChangeImage}
      isTrue={isTrue}
      myImg={myImg}
      onClickdeleteImage={onClickdeleteImage}
    />
  )
}
export default Container

// try {
//   const {data} = Promise.all(
//     new Array(3)
//     .fill(1)
//     .map(()=>(    await uploadimage({
//       variables: {file: img1},
//     })) ))
// //! 여기 왜 안됨? ->   variables: {file: 여기}, '여기' 부분이 image,
//   //! 즉 const image = event.target.files[0] 이거가 들어가야함!!!
//   // console.log(data, '업로드잘되나')
//   setMyImg(`https://storage.cloud.google.com/${data.uploadFile.url}`) //state에 저장
//   // console.log(myImg, '이미지 잘 들어갔니')
//   setQwer({
//     ...qwer,
//     images: [data.uploadFile.url],
//   })
//   //!실제로 값이 들어가는 건 한박자 늦게 들어감. 모든 셋 함수가 그러함/
//   //! 여기의 함수가 끝나고  qwer로 값이 들어가는거임.
//   console.log(qwer, '이미지 잘 들어가니')
//   console.log(data.uploadFile, '업로드뮤테이션결과')
// } catch (error) {
//   alert(error.message)
// }
