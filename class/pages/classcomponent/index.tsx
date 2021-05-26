import {Component, createRef, RefObject} from 'react'

class MyclassPage extends Component {
    Private inputRef:RefObject<HTMLInputElement>
  constructor(props) {
    super(props)
    this.state = {}
    this.inputRef = createRef()
  }

  componentDidMount() {
    console.log('aaaa')
    this.inputRef.current.focus()
  }

  componentDidUpdate() {
    console.log('bbb')
    this.inputRef.current.focus()
  }

  onChangeInput(event: any) {
    // console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <span>이름: </span>
        <input
          type="text"
          name="name"
          ref={this.inputRef}
          onChange={this.onChangeInput.bind(this)}
        ></input>
        <span>나이: </span>
        <input
          type="text"
          name="age"
          onChange={this.onChangeInput.bind(this)}
        ></input>
        <span>학교: </span>
        <input
          type="text"
          name="school"
          onChange={this.onChangeInput.bind(this)}
        ></input>
      </div>
    )
  }
}

export default MyclassPage
