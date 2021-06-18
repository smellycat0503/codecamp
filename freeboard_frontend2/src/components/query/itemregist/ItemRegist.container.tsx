import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'
import withAuth from '../../commons/hocs/withAuth'
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
  console.log(inputInfo, 'inputInfo')

  const onChangeInputInfo = (event) => {
    const info = {...inputInfo, [event.target.name]: event.target.value}
    setInputInfo(info)
    console.log(info, '인포')
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
    />
  )
}

export default withAuth(ItemRegist)
