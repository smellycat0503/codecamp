import withAuth from '../../../src/components/commons/hocs/withAuth'
import MarketMain from '../../../src/components/query/marketmain/main.container'

const MarketMainIndex = (props) => {
  return <MarketMain />
}

export default withAuth(MarketMainIndex)
