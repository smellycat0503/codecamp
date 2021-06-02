import {gql, useMutation} from '@apollo/client'
import {useRef, useState} from 'react'

const ImagePage = () => {
  // 값이 바뀌니까 스테이트 주자
  const [myImage, setMyImage] = useState('')

  const onChangeFile = (event) => {
    const file = event.target.files[0]
    //!files는 자체 속성. 기존 id, name과는 개념이 다름.
    console.log(event.target.files[0], 'asd')

    // if (file.size > 5 * 1024 * 1024) {
    //   alert('파일이 너무 큽니다(5MB 제한')
    //   return
    // }

    // if (!file.type.include('png')) {
    //   alert('png 파일만 업로드 가능합니다.')
    //   return
    // }

    const reader = new FileReader() //얘가 읽어주는 기능.

    console.log('리더', reader)
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      setMyImage(String(event.target.result))
      // 읽은 결과를 뱉어
    }
    setFile(file)
  }

  const onClickImage = () => {
    fileRef.current.click()
    //! 큐런트 와 클릭은 ref의 속성.
    //! 사용 빈도가 많지는 않음. 다른 속성도 있기는 하나 지금 바로 다 알고 활용할 필요는 없음!!
  }

  const fileRef = useRef(null)

  //
  const UPLOAD_FILE = gql`
    mutation ZZZ($file: Upload!) {
      uploadFile(file: $file) {
        url
      }
    }
  `

  const [uploadfileMutaiton] = useMutation(UPLOAD_FILE)

  const [file, setFile] = useState('')

  const onClickSubmit = async () => {
    const result = await uploadfileMutaiton({
      variables: {
        file: file,
      },
    })
    console.log(result)
    const start = new Date().getTime()
    await Promise.all(
      new Array(5)
        .fill(1)
        .map(() => uploadfileMutaiton({variables: {file: file}}))
    )
    // 1)
  }

  return (
    <div>
      <button onClick={onClickImage}>이미지 업로드하는 버튼</button>
      <input
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        style={{display: 'none'}}
      />

      <img src={myImage} />

      <button onClick={onClickSubmit}>서버에 파일 전송하기</button>
    </div>
  )
}

export default ImagePage
