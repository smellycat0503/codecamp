import {useRouter} from 'next/router';
import {useQuery, gql} from '@apollo/client';
import Query from '../../../src/components/query/detail/QueryDetail.container';
//0.playground에서 프로필 조회하기-> query
//1-1. 라우터 활용.
//1-2. 조회를 위해 Query,gql 활용.

export default function QuaryDetailPage() {
  return <Query />;
}
