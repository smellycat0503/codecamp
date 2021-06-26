import axios from 'axios'

//* app.tsx에서 onError가 뜰 때매다 여기를 실행하여 새 액세스 토큰을 발급받는다
//* getAccessToken이 withAuth, app.tsx 에서 각각 사용됨
//* {setAccessToken} 객체로 쌓아놓는 편이 실수 예방에 있어 좋음
const getAccessToken = async ({setAccessToken}) => {
  const response = await axios.post(
    'https://backend.codebootcamp.co.kr/graphql',
    {
      query: `
                mutation restoreAccessToken {
                  restoreAccessToken{
                    accessToken
                  }}
                `,
    },
    {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
      //* withCredentials이 쿠키에 리프레시토큰을 첨부해서
      //* withAuth의 restoreAccessToken으로 보냄
    }
  )
  //*리프레시토큰을 통해 새 액세스토큰을 발급받음

  const newAccessToken = response.data.data.restoreAccessToken.accessToken
  setAccessToken(newAccessToken)
  return newAccessToken
}

export default getAccessToken
