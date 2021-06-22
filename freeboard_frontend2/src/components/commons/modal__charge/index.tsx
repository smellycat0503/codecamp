import withAuth from '../hocs/withAuth'
import ModalCharge from './modalCharge.container'

const ModalChangeIndex = () => {
  return <ModalCharge />
}

export default withAuth(ModalChangeIndex)
