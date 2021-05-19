import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'
import {useRouter} from 'next/router'

export default function MutationPage(){

    const router = useRouter()

    const onClickRouting2 = () => {
        router.push('/quary/router')
    }
    // const [writer, setWriter] = useState("")
    // const [password, setPassword] = useState("")
    // const [title, setTitle] = useState("")
    // const [contents, setContents] = useState("")
    //-> 이거 4개를 하나로 묶는 방법이 있음.-> 객체 사용.
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
                // variables:{
                //     writer:aaa.writer,
                //     password:aaa.password,
                //     title:aaa.title,
                //     contents:aaa.contents
                // }
                variables:{...aaa}
            })

            console.warn('writer', writer)
            console.info('password', password)
            console.error('title', title)
            console.log('contents', contents)
            console.log(result)
            alert(result.data.createBoard.message)
        } catch(error){

            alert(error.message)

        }   
        // finally{
        //     alert(error.message)
        // }
            //-> finally는 캐치 트라이 상관없이 무조건 메세지 실행.
    }


    //     const result = await createBoard({
    //         variables: {
    //             writer,
    //             password,
    //             title: title,
    //             contents: contents
                //: 뒤에 위에 선언한 state를 넣는다. {} 안에 넣지는 않음.
                // 앞과 state가 같으면 앞 내용 생략 가능.
                // variables -> 
    //          }

    //     })
  
    //     console.log(result)
        // alert(result.data.createBoard.message)
        // console.log("게시물 등록하기입니다.")
        // const sendwriter = await bbb()
        // console.log(sendwriter)

        //콘솔로그 다양하게 활용
        //-> 실무에서는 괄호 안에 '' 를 넣음
    // } //여기 기준 윗 부분 JS, 아랫부분 HTML

    // const onChangeWritter = event => { 
        
        // setWriter(event.target.value)


    // }
    // const onChangePassword = event => {

        // setPassword(event.target.value)
        
    // }

    // const onChangeTitle = event => {
 
        // setTitle(event.target.value)
        
    // }

    // const onChangeContents = event => {

        // setContents(event.target.value)
        
    // }
    const onChangeInput = event => {
        // console.log(event.target)
        console.log(event.target.name, event.target.value)

        const data = {
            ...aaa,
            //스프레드(뿌리는것). aaa 객체 안의 내용을 꺼내어 뿌림.

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
                <button onClick={onClickPost}>게시물 등록하기</button>
                <button onClick = {onClickRouting2}>라우터 페이지로 이동</button>
            </>

        )
    
}