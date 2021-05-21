// export default function Listpage(){

//     const aaa = [ "철수","영희","훈이" ]
//     const bbb = aaa.map((data)=><div>{data}</div>)
// 다른 변수에 담아야함. 한번 더 선언.
//     return(
//         <div>{bbb}</div>
//     )

// }
// import { Wrapper, RankingNumber, RankingTitle } from './styled/list.style'

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
// 여기는 한 화면에서 하므로  export 빠져도 됨!

export const RankNumber = styled.span`
  font-weight: bold;
`;
export const RankTitle = styled.span`
  padding-left: 5px;
`;

export default function Ranking() {
  const fruit = [
    {number: 1, title: '레드향'},
    {number: 2, title: '샤인머스켓'},
    {number: 3, title: '산청딸기'},
    {number: 4, title: '한라봉'},
    {number: 5, title: '사과'},
    {number: 6, title: '애플망고'},
    {number: 7, title: '딸기'},
    {number: 8, title: '천혜향'},
    {number: 9, title: '과일선물세트'},
    {number: 10, title: '귤'},
  ];

  // function getEvenNumber(){
  //     let numb = fruit.number
  // }

  let a = fruit.filter((data) => data.number % 2 === 0);
  // let a = fruit.filter((data)=> 0=== 0)
  // let a = fruit.filter((data)=> true)
  // a = [{number :2, title: "샤인머스켓"}, {number :4, title: "한라봉"}]

  // a.map((data)=>)

  //짝수 구할 떄 -> 처음에 a.map부분에 fruit.map을 넣었음.프룻은 여기선 더이상 의미가 없음.
  //짝수2. {data.number}를 data.a.number로 넣었음. a를 기준으로 경로가 동일하므로 저기는 그대로.
  const rank = a.map((data) => (
    <Wrapper>
      <RankNumber>{data.number}</RankNumber>
      <RankTitle>{data.title}</RankTitle>
    </Wrapper>
  ));
  //처음엔{...data}를 넣었음.
  //그렇게 되면 <div>{number :10, title: "귤"}</div>이렇게 들어가게 되므로 안됨.
  // const ranknumber = fruit.map((data) => <div>{data.number}</div>)
  // const ranktitle = fruit.map((data) => <div>{data.title}</div>)
  return <div>{rank}</div>;
}
