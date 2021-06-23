import withAuth from '../../../../src/components/commons/hocs/withAuth'
import ItemDetail from '../../../../src/components/query/itemdetail/ItemDetail.container'

const ItemDetailIndex = (props) => {
  return <ItemDetail />
}

export default withAuth(ItemDetailIndex)
