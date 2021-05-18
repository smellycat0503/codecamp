import {RegisterButton} from './QueryWrite.styles'

const QueryUI = (props) => {

    return(
        <div>
            <span>이름: </span><input type="text" name="name" onChange = {props.onChangeInput}></input>
            <span>나이: </span><input type="text" name="age" onChange = {props.onChangeInput}></input>
            <span>학교: </span><input type="text" name= "school" onChange = {props.onChangeInput}></input>
            <RegisterButton onClick= {props.onClickRegist} aaa={props.isTrue}>프로필 등록하기</RegisterButton>
        </div>
    )

}

export default QueryUI