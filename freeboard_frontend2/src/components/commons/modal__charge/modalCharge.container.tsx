import {useMutation} from '@apollo/client'
import Head from 'next/head'
import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import ModalChargeUI from './modalCharge.presenter'
import {CREATE_POINT_TRANSACTION_OF_LOADING} from './modalCharge.queries'

const ModalCharge = () => {
  //* 엑세스 토큰 가져오기
  const {userInfo, accessToken} = useContext(LayoutContext)

  //* 충전 금액 스테이트
  const [amount, setAmount] = useState('')

  //* 포인트 충전 뮤테이션
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)

  //? 창 여닫기 스테이트
  const [isOpenSelect, setIsOpenSelect] = useState(true)

  //? 충전 모달 창 여닫이 스테이트.
  const [open, setOpen] = useState(true)

  // //* 창 클릭 시 오픈 함수
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  //* 창 클릭 시 닫기
  const handleClose = () => {
    setOpen(false)
  }

  //* 충전 금액 메뉴 클릭 시 오픈 클로즈 함수
  const onClickPointSelectMenu = () => {
    setIsOpenSelect((prev) => !prev)
  }

  //* 금액 충전 모달 창 클릭 시 닫기 함수.
  const onClickCloseCharge = () => {
    setOpen(false)
  }

  // //*최종 충전하기 클릭 시 금액 스테이트
  // const [chargeResult, setChargeResult] = useState('')

  //*충전 금액 메뉴 클릭 시 amount에 이벤트 금액 넣고 금액 선택 메뉴 창 닫기
  const onClickSelectedAmount = (event) => {
    const selectedAmount = event.target.id

    setAmount(selectedAmount)
    setIsOpenSelect((prev) => !prev)
    //!요거로 금액 선택 시 자동으로 닫힌다!!
  }

  console.log(open, 'open')

  //*최종 충전하기 클릭 시 최종 금액 스테이트 및 충전 뮤테이션 통신
  const onClickChargeButton = () => {
    setAmount(amount)
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
        name: '비비고만두',
        amount: Number(amount),
        buyer_email: 'gildong@gmail.com',
        buyer_name: '만두왕',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          await createPoint({
            variables: {
              impUid: rsp.imp_uid,
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

      <ModalChargeUI
        handleClose={handleClose}
        open={open}
        onClickCloseCharge={onClickCloseCharge}
        onClickChargeButton={onClickChargeButton}
        isOpenSelect={isOpenSelect}
        onClickPointSelectMenu={onClickPointSelectMenu}
        amount={amount}
        onClickSelectedAmount={onClickSelectedAmount}
      />
    </>
  )
}

export default ModalCharge
