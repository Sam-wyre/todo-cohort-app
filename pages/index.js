import fetch from 'isomorphic-unfetch';
import Temp from './temp';

const Index = (props) => (
  <Temp todo={props.shows}/>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3001/api/v1/todos')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.todos
}
}
export default Index;