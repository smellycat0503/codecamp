import withAuth from '../../../../src/components/commons/hocs/withAuth'
import ItemRegist from '../../../../src/components/query/itemregist/ItemRegist.container'

const ItemEditIndex = (props) => {
  return <ItemRegist />
}

export default withAuth(ItemEditIndex)
