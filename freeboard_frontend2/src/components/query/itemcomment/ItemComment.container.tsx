import {useApolloClient, useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import withAuth from '../../commons/hocs/withAuth'
import ItemCommentUI from './ItemComment.presenter'
import Reply__List from './ItemComment.presenter.replylist'
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
  DELETE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from './ItemComment.queries'

const ItemComment = (props) => {
  return (
    <>
      <ItemCommentUI />
      <Reply__List />
    </>
  )
}

export default withAuth(ItemComment)
