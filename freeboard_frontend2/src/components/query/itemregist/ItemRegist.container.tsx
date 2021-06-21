import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'
// import withAuth from '../../commons/hocs/withAuth'
import {Search__Input} from '../boardList/BoardList.styles'
import ItemRegistUI from './ItemRegist.presenter'
import {CREATE_USED_ITEM} from './ItemRegist.queries'

const ItemRegist = (props) => {
  const router = useRouter()
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
      setIsOpen((prev) => !prev)
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

  return (
    <ItemRegistUI
      onChangeInputInfo={onChangeInputInfo}
      onClickItemInfo={onClickItemInfo}
      onChangeEditor={onChangeEditor}
      onChangeAddress={onChangeAddress}
      address={address}
      onClickAddressSearch={onClickAddressSearch}
      isOpen={isOpen}
    />
  )
}

export default ItemRegist
