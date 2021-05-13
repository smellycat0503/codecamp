import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'

export default function MutationPage(){

    const [aaa, setAaa] = useState({
        writer:'',
        password:'',
        title:'',
        contents:'',
    })
    
    const CREATE_BOARD = gql`
            mutation createBoard($writer: String, $password: String, $title: String, $contents: String) { 
                
                    createBoard( 
                        writer: $writer,
                        password: $password,
                        title: $title,
                        contents: $contents
                    
                ){
                    message
                }
                }
    
    `
   const [createBoard] = useMutation(CREATE_BOARD)
    
    async function onClickPost(){
        try{
            const result = await createBoard({

                variables:{...aaa} })

            console.warn('writer', writer)
            console.info('password', password)
            console.error('title', title)
            console.log('contents', contents)
            console.log(result)
            alert(result.data.createBoard.message)
        } catch(error){

            alert(error.message)

        }   

    }


    const onChangeInput = event => {

        console.log(event.target.name, event.target.value)

        const data = {
            ...aaa,

            [event.target.name]:event.target.value
            //
        } 
        setAaa(data)

        console.log(data)

    }
    
        return (
            <>
                작성자: <input type="text" name="writer" onChange = {onChangeInput}></input><br />
                비밀번호: <input type="password" name="password" onChange = {onChangeInput}></input><br />
                제목: <input type="text" name="title"onChange = {onChangeInput}></input><br />
                내용: <input type="text" name="contents" onChange = {onChangeInput}></input><br />
                <button onClick={onClickPost}>게시물 등록하기.</button>
            </>

        )
    
}