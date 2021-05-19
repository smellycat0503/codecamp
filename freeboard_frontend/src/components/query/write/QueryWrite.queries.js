
import {gql} from '@apollo/client'


    export const DRAGONBALL = gql`
    mutation ZZZ( $writer:String, $password:String, $title:String!, $contents:String! ){
        createBoard(
            createBoardInput:
            {
                writer: $writer
                password: $password
                title: $title
                contents: $contents 
        })
            {
            _id
            writer
            title
            contents
            
        }}
    `