import {useMutation, gql} from '@apollo/client';
import {assertAbstractType} from 'graphql';
import {argsToArgsConfig} from 'graphql/type/definition';
import {useState} from 'react';
import {useRouter} from 'next/router';
import QueryUI from './QueryWrite.presenter';
import {PROFILE} from './QueryWrite.queries';

const Query = () => {
  const router = useRouter();

  const [aaaa, setAaaa] = useState({
    name: '',
    age: '',
    school: '',
  });
  const [isTrue, setIsTure] = useState(false);

  const [createProfile] = useMutation(PROFILE);

  async function onClickRegist() {
    try {
      const result = await createProfile({
        variables: {...aaaa, age: Number(aaaa.age)},
      });

      console.log(result);
      alert(result.data.createProfile.message);
      router.push(`/query/${aaaa.name}`);
    } catch (error) {
      alert('error.message');
    }
  }
  function onChangeInput(event) {
    const cccc = {
      ...aaaa,
      [event.target.name]: event.target.value,
    };
    setAaaa(cccc);
    //빈값은 언디파인드, 언디파인드는 곧 펄스.
    if (aaaa.name && aaaa.age && aaaa.school) {
      setIsTure(true);
    }
  }
  return (
    <QueryUI
      onClickRegist={onClickRegist}
      onChangeInput={onChangeInput}
      isTrue={isTrue}
    />
  );
};
export default Query;
