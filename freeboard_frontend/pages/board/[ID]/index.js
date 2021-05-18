import {useRouter} from  "next/router"
import {useQuery, gql} from '@apollo/client'

import { Wrapper, HeadWrapper
        , HeadLeft, Icon,IdAndDateWrapper
        ,CreateDate, HeadRightWrapper1, AddressBox, IconWrapper
        , AttachIcon , MapIcon , WriterID, BodyWrapper, BoardTitle
        , Picture, Contents, Movie, BottomWrapper
        , GoodWrapper, GoodIcon, GoodNumber
        , HateWrapper, HateIcon, HateNumber
    } from "../../../styles/id.index"


export default function QuaryDetailPage(){
    
    const router = useRouter()
    //여기서의 라우터는 이동 용도가 아닌 프론트 쪽의 데이터를 가져오기 위한 용도. 

    const glass = gql`
    query family($dad: ID!)
    {fetchBoard(boardId:$dad)
        {
          _id
          writer
          title
          contents
        }
        }
     `
    
     console.log('router.query', router.query)
        const {data} = useQuery(glass, {variables:{ dad:router.query.ID }
            //여기 경로는 서버가 아니 우리쪽 기준.
            
        })
        
    
    // console.log(router.query)
    
    return(
        <Wrapper>
            <HeadWrapper>
                <HeadLeft>
                    <Icon></Icon>
                    <IdAndDateWrapper>
                            <WriterID>{data === undefined ? '' : data.fetchBoard.writer}</WriterID>
                            <CreateDate type="text">Date:2021.02.18</CreateDate>
                    </IdAndDateWrapper>
                </HeadLeft>
                <HeadRightWrapper1>
                    <AddressBox type="text">서울특별시 영등포구 양산로 200 (영등포5가, 영등포시장역) 영등포 타임스퀘어 2층</AddressBox>
                    <IconWrapper>
                        <AttachIcon></AttachIcon>
                        <MapIcon></MapIcon>
                    </IconWrapper>                    
                </HeadRightWrapper1>
            </HeadWrapper>
            <BodyWrapper>
                <BoardTitle>{data && data.fetchBoard.title}</BoardTitle>
                <Picture></Picture>
                <Contents>{!data ? '' : data.fetchBoard.contents}</Contents>
                <Movie></Movie>
                <BottomWrapper>
                    <GoodWrapper>
                        <GoodIcon></GoodIcon>
                        <GoodNumber>1920</GoodNumber>
                    </GoodWrapper>
                    <HateWrapper>
                        <HateIcon></HateIcon>
                        <HateNumber>1920</HateNumber>                            
                    </HateWrapper>
                </BottomWrapper>
            </BodyWrapper>

        </Wrapper>
        
    ) 
}