import QueryUI from "./QueryWrite.presenter"
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import {Router, useRouter} from 'next/router'
import {DRAGONBALL} from './QueryWrite.queries'


const Query = () => {


    const [isTrue, setIsTrue] = useState(false)

    const [radio, setRadio] = useState("")
    const [error, setError] = useState("")
    
    const [kakarot, setKakarot] = useState(
        {
            writer:"",
            password:"",
            title:"",
            contents:""      
        }
    )


    
    const [buruma] = useMutation(DRAGONBALL)
    //const 뒤에 [] 잊지말기. []는 state처럼 그냥 약속인가?
    

    function onChangeInput(event){
        const begita = {...kakarot, [event.target.name]:event.target.value}
            setKakarot(begita)

            if(kakarot.writer && kakarot.password && kakarot.title && kakarot.contents){
                setKakarot(true)
            } else{
                setKakarot(false)
            }




        // const begita = {...kakarot, [event.target.name]:event.target.value}
        // setKakarot(begita) //value 입력값을 kakarot에 넣어라? 
    }

    const router = useRouter()
    
    async function onClickPost(){
        try{
            const result = await buruma({
                variables:{...kakarot}
                
            })
            console.log(result)
            router.push(`/board/${result.data.createBoard._id}`)
            

        } catch(error){
            alert(error.message)
            }// catch()뒤에 중괄호 있어야함.

    }
    //     try{
    //         const result = await buruma({
    //             variables:{...kakarot}
    //         })//buruma() 괄호는 원래 넣는건가?
    //         alert("성공")
    //         console.log(result)
    //         console.log(kakarot)
          
    //         router.push(`/board/${result.data.createBoard._id}`)
    //     }catch(error){
    //         alert(error.message)
    //     }
    // }


    function WriteAddress(event){
        const temp5 = event.target.value
        setAddress(temp5)
    }
    function WriteRadio(event){
        const temp6 = event.target.value
        setRadio(temp6)
    }

    function ErrorMessage(){
        if (id.length === 0 || pw === "" || title1 === "" || content2 === "" || address === "" ){
            setError("내용을 입력하세요.")
            
        }
    }



    





    
    return(
        <QueryUI
                onChangeInput={onChangeInput}
                onClickPost={onClickPost}
                isTrue={isTrue}
        />
    )
}

export default Query