import React from 'react'
import {IQuery} from '../../../commons/types/generated/types'

export interface IProps {
  data: IQuery
  onClickBoard: any
  dataComments: IQuery
  onClickPageNumber: any
  currentPage: number
  isActive: boolean
  Page: String
  onClickPostButton: () => void
  bestPostList: any
  onClickextPage: any
  clickNumber: number
  nextPage: number
  boardcount: any
  onClickPrevPage: () => void
  InputSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  search: string
  onClickSearch: any
}
