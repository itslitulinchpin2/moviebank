//import logo from './logo.svg';
import './App.css';
function Title(props){
  var name="into the unknown"
  var number=parseInt(props.number)
  console.log(typeof(number))
  return(
    <div>
      {name} {number}
    </div>
  )
}
function App() {
  return (
    <div>
      <Title number="3" ></Title>
    </div>
  );
}

export default App;
