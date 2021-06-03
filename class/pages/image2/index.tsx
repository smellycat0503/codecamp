import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'
import {getStorageUrl} from '../../src/commons/libraries/utils'
import {checkImage} from '../../src/commons/libraries/validations'
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../src/commons/types/generated/types'

const Image2Page = () => {
  const [fileUrl, setFileUrl] = useState<string>()

  const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
      uploadFile(file: $file) {
        url
      }
    }
  `

  const [uploadFile] =
    useMutation<IMutation, IMutationUploadFileArgs>(UPLOAD_FILE)

  const onChangeFile = async (event) => {
    const file = event.target.files[0]
    // console.log(file)    if (!checkImage(file)) return
    //!파일 업로드 했을때 체크하고 이상 없을 시 리턴한다는 뜻

    //uploadFile 뮤테이션 실행!
    // uploadFile({
    //   variables: {file: file},
    // })

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      console.log(event.target.result)
    }

    try {
      const {data} = await uploadFile({variables: {file}})
      setFileUrl(getStorageUrl(data.uploadFile.url))
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={fileUrl}></img>
    </>
  )
}

export default Image2Page
