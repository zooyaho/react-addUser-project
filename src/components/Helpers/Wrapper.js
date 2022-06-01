// 루트 jsx요소는 한개여야하는데 의미없는 div를 남발하면 dom에 성능을 저하 시킬 수 있음.
// 1. 해결법으로 Wrapper컴포넌트와 같은 빈 컴포넌트를 만들어 사용하면(dom에 아무것도 렌더링하지 않음) html에 무의미한 div를 사용 안할 수 있음. 
const Wrapper = props =>{
  return props.children;
};
export default Wrapper;

// 2. 내장되어 있는 <React.Fragment>사용 : 항상 사용 가능, 빈 Wrapper를 렌더링함.
// 3. <></>: 빌드 워크플로우가 지원을해야 사용할 수 있음. 빈 Wrapper를 렌더링함.
// -> 보통은 자체적으로 Wrapper를 만들지 않음.