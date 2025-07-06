
import './App.css'
import Descriptio from './description.jsx';
import ProductTab from './ProductTab.jsx';
import Msgbox from './Msgbox.jsx'
function Title()
{
  return (<h1>I am Title</h1>);
}
function prinhello(){
  console.log("hello");
}
function App() {
  return (
    <>
      <ProductTab/>
      <button onClick={prinhello}>Click Me</button>
     {/* <Msgbox userName="Saiji" color="green"/> */}
    </>


  );
}

export default App
