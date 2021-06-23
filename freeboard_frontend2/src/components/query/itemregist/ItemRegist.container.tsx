import {useMutation, useQuery} from '@apollo/client'
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
} from './ItemRegist.queries'

const ItemRegist = (props) => {
  const router = useRouter()

  const {userInfo} = useContext(LayoutContext)

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: router.query.ID},
  })

  const [updateData] = useMutation(UPDATE_USED_ITEM)

  const isOwner = data?.fetchUseditem.seller._id === userInfo._id

  const [ItemRegist] = useMutation(CREATE_USED_ITEM)

  const [inputInfo, setInputInfo] = useState({
    name: '',
    remarks: '',
    contents: '',
    price: '',
    tags: [],
  })
  // console.log(inputInfo, 'inputInfo')

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

    // console.log(info, '인포')
  }

  const [address, setAddress] = useState('')
  const [temp, setTemp] = useState('')

  const onChangeAddress = (event) => {
    const inputaddress = event.target.value
    setTemp(inputaddress)
  }
  console.log(address)

  const onClickAddressSearch = () => {
    setAddress(temp)
  }

  const onChangeEditor = (contents) => {
    setInputInfo({...inputInfo, contents: contents})
  }

  const onClickItemInfo = async () => {
    try {
      // let arr: []
      const result = await ItemRegist({
        variables: {
          createUseditemInput: {
            ...inputInfo,

            price: Number(inputInfo.price),
            tags: [inputInfo.tags],
          },
        },
      })
      // console.log(result, 'result')
      router.push(`/board/marketboard/${result.data.createUseditem._id}`)
      //! 여기서 넘어갈 사이트 경로를 위해 result 선언한 것?

      // console.log(result)
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickReturnPage = () => {
    router.push(`/board/marketboard/${router.query.ID}`)
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
      //!원래 수정 결과 아이디를 가져와야 하는거 아닌가?
      // router.push(`board/marketboard/${editResult?.data.updateUseditem._id}`)
      // console.log(
      //   editResult?.data.updateUseditem._id,
      //   '수정뮤테이션 결과 아이디'
      // )
      router.push(`/board/marketboard/${router.query.ID}`)
    } catch (error) {
      alert(error.message)
    }
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
    />
  )
}

export default ItemRegist
