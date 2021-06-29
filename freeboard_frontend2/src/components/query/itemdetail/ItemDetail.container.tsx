import ItemDetailUI from './ItemDetail.presenter'
import ItemComment from '../itemcomment/itemCommentReply/ItemCommentReply.container'
import {
  FETCH_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from './ItemDetail.queries'
import {useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import withAuth from '../../commons/hocs/withAuth'
import {useContext} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import Head from 'next/head'

const ItemDetail = (props) => {
  const {userInfo} = useContext(LayoutContext)
  const router = useRouter()

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: router.query.ID},
  })
  //! 여기 쿼리할 때 베리어블스 들어가야함.

  const onClickToMain = () => {
    router.push(`/board/marketmain/`)
  }

  console.log(data?.fetchUseditem, ':상품정보')
  //@ts-ignore
  const isOwner = data?.fetchUseditem.seller._id === userInfo._id

  const onClickEditPage = () => {
    router.push(`/board/${data?.fetchUseditem._id}/edit_item/`)
  }

  //?구매하기 도전!!

  const {accessToken} = useContext(LayoutContext)
  // console.log(userInfo?.email, '유저정보')
  // console.log(accessToken, '엑세스토큰')
  // console.log(data?.fetchUseditem.name, '상품이름')

  const [buyItem] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)

  const onClickChargeButton = () => {
    //@ts-ignore
    const IMP = window.IMP // 생략해도 괜찮습니다.
    IMP.init('imp89386405') // "imp00000000" 대신 발급받은 "가맹점 식별코드"를 사용합니다.
    // IMP.request_pay(param, callback) 호출
    IMP.request_pay(
      {
        // param
        //!여기 들어가는 유저 정보는 userInfo인지, 충전 뮤테이션의 리턴값을 가져오는건지??-> userinfo라고 함.
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        //! merchant_uid이 아이디는 상품의 고유의 값!/ 원래 결제 서버에 중복이 있으면 바로 오류가 뜸. 지금은 백엔드에서 얘를 주는 게 없음
        name: data?.fetchUseditem.name,
        amount: data?.fetchUseditem.price,
        //@ts-ignore
        buyer_email: userInfo?.email,
        //@ts-ignore
        buyer_name: userInfo?.name,
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          await buyItem({
            variables: {
              useritemId: data?.fetchUseditem?._id,
            },
            context: {
              header: {
                authorization: `Bearer ${accessToken}`,
              },
            },
          })
          alert('결제에 성공했습니다.')
          // 결제 성공 시 로직,
        } else {
          alert('결제에 실패했습니다.')
        }
      }
    )
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>

      <ItemDetailUI
        data={data}
        onClickToMain={onClickToMain}
        isOwner={isOwner}
        onClickEditPage={onClickEditPage}
        onClickChargeButton={onClickChargeButton}
      />
      <ItemComment />
    </>
  )
}

export default withAuth(ItemDetail)
