import withAuth from '../../../../src/components/commons/hocs/withAuth'
import Query from '../../../../src/components/query/write/QueryWrite.container'

const UpdateBoard = (props) => {
  return <Query />
}

export default withAuth(UpdateBoard)
