const QueryUI = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        이름:{!props.data ? '' : props.data.fetchProfile.name}
        {/* data앞에!가 들어가므로 data가 없을 때 '', 있을때 : 오른쪽이 적용 */}
      </div>
      <div>
        나이:{props.data === undefined ? '' : props.data.fetchProfile.age}
        {/* 데이터가 undefined면 '', 있을 때 오른쪽 적용. */}
      </div>
      <div>
        학교:{props.data && props.data.fetchProfile.school}
        {/* data가 true면 (있으면)&&뒤가 실행됨. false면 &&뒤가 실행 안됨. &&가 불린으로 감지하는듯. */}
      </div>
    </div>
  );
};

export default QueryUI;
