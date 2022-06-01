// 루트 jsx요소는 한개여야하는데 의미없는 div를 남발하면 dom에 성능을 저하 시킬 수 있음.
// 해결법으로 Wrapper컴포넌트와 같은 빈 컴포넌트를 만들어 사용하면(dom에 아무것도 렌더링하지 않음) html에 무의미한 div를 사용 안할 수 있음. 
const Wrapper = props =>{
  return props.children;
};
export default Wrapper;