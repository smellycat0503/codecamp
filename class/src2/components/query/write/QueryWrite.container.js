//1. 컨테이너에는 주된 기능들을 넣음. 쿼리 사용을 위해 먼저 쿼리 선언.

import QueryUI from "./QueryWrite.presenter"
//1-1. 경로가 프레젠터임. 부모가 자식에게 보내기 위함인가? 현재 폴더이므로 
//      ./ 사용하여 경로 찾기

//2. 기존에 사용했던 인덱스 안의 기능들 가져오기. import했던 기능들도 같이 가져오자.
//5. useMutation() 괄호 안에 넣었던 gql인 PROFILE 연결을 위해 import 작성.

import {PROFILE} from './QueryWrite.queries'
import {useState} from 'react'
import {gql, useMutation} from '@apollo/client'
import {useRouter} from 'next/router'

const Query = () => {

    const [mario, setMario] = useState({
        name:"",
        age:"",
        school:""
    })
    
    const router = useRouter()
    
    const [kupa] = useMutation(PROFILE)

    //8-1. 데이터 입력 유무 판별하여 true false 판별용 state 작성.
    //처음엔 비어있으므로 기본값 false로 놓기. 데이터 입력 확인 시 트루 들어갈 예정.
    const [isTrue, setIsTrue] = useState(false) 

    //8-2. 텍스트 인풋에 데이터 유무에 따라 색 변화 주기 위해 컨테이너 파일에서 인풋 함수 부분 추가 작성.
    function onChangeInput(event){
        const mush = {...mario, [event.target.name]:event.target.value}
        console.log(mush)
        setMario(mush)
    
        if(mario.name && mario.age && mario.school){
            setIsTrue(true)
            //8-3. 마리오 안에 이름,나이, 학교가 다들어가면 트루.
            // 빈값은 언디파인드. 언디파인드는 곧 펄스가 됨.
        }else{
            setIsTrue(false)
        }
       

    }



    async function onClickButton(){
        try{
            const result = await kupa({
                variables:{...mario, age:Number(mario.age)}
            })
            alert("성공")
            console.log(result)
            router.push(`/query3/${mario.name}`)
            // router.push(``)
        }catch(error){
            alert("실패")
        }
    }

    //  6. 텍스트 인풋과 실행 기능을 자식과 연결할 props 사용.
    //     리턴 안의 QueryUI에서 사용한다. 

    return (
        <QueryUI onChangeInput={onChangeInput}
                 onClickButton={onClickButton}
                 isTrue={isTrue}
                // 8-4. props적용되는 부분에 트루 변경시 isTure 적용.
                // 8-5!! 이 과정에서 props객체 안으로 들어감. 객체 형태.
        
        />
    )
}


export default Query
