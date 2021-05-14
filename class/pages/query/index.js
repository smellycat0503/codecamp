import {useMutation, gql} from '@apollo/client'
import { assertAbstractType } from 'graphql'
import { argsToArgsConfig } from 'graphql/type/definition'
import {useState} from 'react'
import {useRouter} from 'next/router'



export default function ProfilePage(){

    
    const router = useRouter()


    const [aaaa, setAaaa] = useState(
        {
            name:"",
            age:"",
            school:""
            //세개 다 적용하기 위하 스프레드 쓰려고 하나로 묶어버림
        }
    )

    // const onClickRouting3 = () =>{

    //     router.push(`/query/${aaaa.name}`)
    // }



    const PROFILE = gql`
        mutation bbbb ( $name:String, $age:Int, $school:String )
            {
                createProfile(
                name:$name,
                age:$age,
                school:$school
            
                ){
                message
                }
            }
        ` 
    //playground에 느낌표가 들어가면 느낌표도 같이 넣어야함.
    const [createProfile] = useMutation(PROFILE)
    //-> 뮤테이션 실행하기 위함.

    async function onClickRegist(){
        try{
            const result = await createProfile({
                variables:{...aaaa,
                    age:Number(aaaa.age) 
                    //이거 왜지??
                    //벨류로 꺼내면 텍스트가 되므로 다시 넘버로 변경해야함.
                    }
            }) 
            alert("성공시메세지데이터어디서볼까요")

            router.push(`/query/${aaaa.name}`)

            // aaaa.name

        } catch(error){
            alert("실패시메세지데이터어디서확인할까요")
        }

    }

    function onChangeInput(event){
        
        
        const cccc = {
            ...aaaa,
            [event.target.name]: event.target.value
        //키에 []가 있으면 객채에서의 키를 의미. 벨류에 []가 있으면 일반적인 대괄호.
        //키에 []가 없으면 객체 키가 아닌 값이 되어버림. 키로 만들기 위한JS에서의 약속.
        // 
        
        }

        // cccc.age.ggg
        // const cccc = {
        //     event: {
        //         target: {
        //             name: "124"
        //         }
        //     }
        // }

        setAaaa(cccc)

    }






    return(
        <div>
            <span>이름: </span><input type="text" name="name" onChange = {onChangeInput}></input>
            <span>나이: </span><input type="text" name="age" onChange = {onChangeInput}></input>
            <span>학교: </span><input type="text" name= "school" onChange = {onChangeInput}></input>
            <button onClick = {onClickRegist}>프로필 등록하기</button>



        </div>
    )


}