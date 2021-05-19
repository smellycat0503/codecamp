//3-1. const Query와 export default QueryUI 작성.
//3-2. 리턴 뒤 html부분 가져오기.

import { defaultTypeResolver } from "graphql"
import {RegisterButton} from './QueryWrite.styles'
//7-1. props가 적용되도록  query 함수 안에 porps 넣고, 각 인풋과 버튼 뒤에도 props 새로 적용.
//7-2. emotion 사용 위해 import 새로 입력. styles.js파일과 연결.
const QueryUI = (props) => {

console.log(props.isTrue)
    return (        
        <div>
        <span>이름: </span> <input type="text" name = "name" onChange = {props.onChangeInput} /><br />
        <span>나이: </span> <input type="text" name = "age" onChange = {props.onChangeInput} /><br />
        <span>학교: </span> <input type="text" name = "school" onChange = {props.onChangeInput}/><br />
        <RegisterButton onClick= {props.onClickButton} isTrue={props.isTrue}>프로필 등록하기</RegisterButton>
        {/* 9. presenter 리턴 부분에서 온클릭시 props적용될 aaa 작성. 여기 aaa의 이름은 상관없고 ={} 형태가 중요한건가? 
                props 적용과 이모션 안의 함수 적용 두가지 용도로 쓰이는듯?*/}
        </div>    
    )
}

export default QueryUI