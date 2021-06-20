import withAuth from '../hocs/withAuth'
import UserInfoModal from './UserInfo.container'

const UserInfoModalIndex = () => {
  return <UserInfoModal />
}

export default withAuth(UserInfoModalIndex)
