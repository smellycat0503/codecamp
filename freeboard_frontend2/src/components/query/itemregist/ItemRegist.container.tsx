import {useMutation, useQuery} from '@apollo/client'
import image from 'next/image'
import {useRouter} from 'next/router'
import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
// import withAuth from '../../commons/hocs/withAuth'
import {Search__Input} from '../boardList/BoardList.styles'
import ItemRegistUI from './ItemRegist.presenter'
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from './ItemRegist.queries'

const ItemRegist = (props) => {
  const router = useRouter()

  const {userInfo} = useContext(LayoutContext)

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: router.query.ID},
  })

  const [updateData] = useMutation(UPDATE_USED_ITEM)
  //@ts-ignore
  const isOwner = data?.fetchUseditem.seller._id === userInfo._id

  const [ItemRegist] = useMutation(CREATE_USED_ITEM)

  const [imageUpload] = useMutation(UPLOAD_FILE)

  //* 이미지 담기 위한 state 선언// 이미지를 배열 안에 담을거임 이유는 뒤에 나옴
  const [itemImg, setItemImg] = useState([])

  const [inputInfo, setInputInfo] = useState({
    name: '',
    remarks: '',
    contents: '',
    price: '',
    tags: [],
    images: [],
  })

  console.log(inputInfo, 'inputInfo')

  const [isOpen, setIsOpen] = useState(true)

  const onChangeInputInfo = (event) => {
    const info = {...inputInfo, [event.target.name]: event.target.value}
    setInputInfo(info)
    if (
      info.name &&
      info.remarks &&
      info.contents &&
      info.price &&
      info.tags.length > 0
      //! 태그는 빈 배열이므로 이미 값이 있음. 불린값이 아닌 길이로 확인해야한다!
    ) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const [address, setAddress] = useState('')
  const [temp, setTemp] = useState('')

  const onChangeAddress = (event) => {
    const inputaddress = event.target.value
    setTemp(inputaddress)
  }

  const onClickAddressSearch = () => {
    setAddress(temp)
  }

  const onChangeEditor = (contents) => {
    setInputInfo({...inputInfo, contents: contents})
  }

  const onClickEditItem = async () => {
    try {
      const editResult = await updateData({
        variables: {
          updateUseditemInput: {
            ...inputInfo,
            price: Number(inputInfo.price),
            tags: [inputInfo.tags],
          },
          useditemId: router.query.ID,
        },
      })
      //!원래 수정 결과 아이디를 라우터로 가져와야 하는거 아닌가?

      router.push(`/board/marketboard/${router.query.ID}`)
    } catch (error) {
      alert(error.message)
    }
  }

  //? 이미지 미리보기

  // //* 불린값 state 선언
  // const [isTrue, setIsTrue] = useState(false)

  //* setItemImg에 업로드 예정인 이미지 담기
  const onChangeItemImg = (event) => {
    //*이미지 변수에 담기
    const file = event.target.files

    //*미리보기 위해 미리 담아둘 배열 만들기
    let newFileArr = []

    //*읽힌 파일의 결과를 최종 업로드 하기 위한 빈 배열
    let fileURLs = []

    //*이미지가 들어갈 때 마다 newFileArr에 배열 값이 하나씩 들어감. 들어가서 하나씩 업로드 및 state에 담기
    for (let i = 0; i < file.length; i++) {
      newFileArr.push(file[i])

      //* 파일 읽기
      const reader = new FileReader()
      reader.readAsDataURL(file[i])
      reader.onload = (event) => {
        //*읽은 파일 미리보기 업로드
        fileURLs[i] = event.target.result

        //*업로드 파일 state에 담기-> 미리보기
        setItemImg([...fileURLs])

        // //* 클릭 시 프레젠터에서 변경될 예정
        // setIsTrue((prev) => !prev)
      }
    }
    setInputInfo({...inputInfo, images: newFileArr})
  }

  //? 미리보기 이미지 삭제

  const onClickDeleteImg = (event) => {
    //* 변수에 삭제 버튼 클릭 한 id 넣기
    const del = event.target.id

    //* 기존 이미지 넣은 배열을 깊은 복사
    const newArrForDel = [...itemImg]

    //*복사한 배열에서 삭제 선택 된 이미지 실제 적용 위한 splice 사용
    //?del은 배열 변경을 시작할 인덱스/ 1은 제거할 요소의 수
    newArrForDel.splice(del, 1)

    //*삭제 후 남은 배열을 itemImg에 다시 담기
    setItemImg(newArrForDel)
  }

  //? 게시물 내용 + 이미지 업로드

  const onClickItemInfo = async () => {
    //? 이미지 업로드 promise.all 과정
    //*여러 이미지 파일 효율적으로 업로드 위해 promise.all 사용
    const result = await Promise.all(
      inputInfo.images.map((_, index) =>
        imageUpload({
          //*이미지에 몇개가 들어올 지 모름 -> index 지정
          variables: {
            file: inputInfo.images[index],
          },
        })
      )
    )
    console.log(result, ':result 내용 업로드 시 확인해보기')
    //* 서버에 업로드 될 파일을 담을 빈 배열 선언-> 이 배열이 실제 뮤테이션 통신 시 적용될 예정
    let upImg = []
    for (let i = 0; i < result.length; i++) {
      upImg.push(result[i].data.uploadFile.url)
      //?여기 result 뒤의 경로 파악해보기!
    }

    try {
      const result = await ItemRegist({
        variables: {
          createUseditemInput: {
            ...inputInfo,
            price: Number(inputInfo.price),
            tags: [inputInfo.tags],
            images: upImg,
            //?이미 upImg는 배열 형태로 되어 있음!
          },
        },
      })
      router.push(`/board/marketboard/${result.data.createUseditem._id}`)
      //! 여기서 넘어갈 사이트 경로를 위해 result 선언한 것?
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickReturnPage = () => {
    router.push(`/board/marketboard/${router.query.ID}`)
  }

  return (
    <ItemRegistUI
      onChangeInputInfo={onChangeInputInfo}
      onClickItemInfo={onClickItemInfo}
      onChangeEditor={onChangeEditor}
      onChangeAddress={onChangeAddress}
      address={address}
      onClickAddressSearch={onClickAddressSearch}
      isOpen={isOpen}
      isOwner={isOwner}
      data={data}
      onClickEditItem={onClickEditItem}
      onClickReturnPage={onClickReturnPage}
      itemImg={itemImg}
      onChangeItemImg={onChangeItemImg}
      onClickDeleteImg={onClickDeleteImg}
    />
  )
}

export default ItemRegist
