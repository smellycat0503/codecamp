import axios from 'axios';
import {useState} from 'react';

export default function AsyncAwaitPage() {
  // const [] = useState()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const [createdDate, setCreatedDate] = useState();

  async function handleClickGetPost() {
    console.log('게시물 가져와 주세요');
    const data = await axios.get('https://koreanjson.com/posts/1');
    console.log(data);
    setTitle(data.data.title);
    setContent(data.data.content);
    setUpdatedAt(data.data.updatedAt);

    console.log(new Date(data.data.createdAt).getFullYear());
    console.log(new Date(data.data.createdAt).getMonth());
    console.log(new Date(data.data.createdAt).getDate());

    let year = new Date(data.data.createdAt).getFullYear();
    let month = String(new Date(data.data.createdAt).getMonth() + 1).padStart(
      2,
      '0'
    );
    let date = String(new Date(data.data.createdAt).getDate()).padStart(2, '0');

    setCreatedDate(`${year}-${month}-${date}`);
  }

  return (
    <>
      <div>
        <span>제목:</span>
        <span>{title}</span>
      </div>
      <div>
        <div>내용</div>
        <div>{content}</div>
      </div>
      <br />
      <span>작성일:</span>
      <span>{createdDate}</span>
      <div>
        <button onClick={handleClickGetPost}>게시물 가져오기</button>
      </div>
    </>
  );
}
