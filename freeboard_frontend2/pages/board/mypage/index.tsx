import withAuth from '../../../src/components/commons/hocs/withAuth'
import Mypage from '../../../src/components/query/mypage/Mypage.container'

const MypageIndex = (props) => {
  return <Mypage />
}

export default withAuth(MypageIndex)
