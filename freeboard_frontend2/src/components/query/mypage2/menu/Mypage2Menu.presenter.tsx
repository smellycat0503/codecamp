import styled from '@emotion/styled'
import {useRouter} from 'next/router'

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
`

const Mypage2MenuUI = () => {
  const router = useRouter()

  return (
    <div>
      <MenuItem
        // isActive={router.pathname.includes('market')}
        onClick={() => router.push('/board/mypage2/market')}
      >
        내장터
      </MenuItem>
      <MenuItem
        // isActive={router.pathname.includes('point')}
        onClick={() => router.push('/board/mypage2/point')}
      >
        내포인트
      </MenuItem>
      <MenuItem
        // isActive={router.pathname.includes('profile')}
        onClick={() => router.push('/board/mypage2/profile')}
      >
        내프로필
      </MenuItem>
    </div>
  )
}
export default Mypage2MenuUI
/* color: ${({isActive}) => (isActive ? 'red' : 'black')}; */
