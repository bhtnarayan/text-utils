import {useState} from "react"; 
import ReactDOM from "react-dom"; 
import Navbar from "./Header"; 
import Textarea from "./Car"; 
// import Calculator from "./App"; 
// import { ModalBody } from "react-bootstrap";

const Home = () => {

  const [mode, setMode] = useState('light'); 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar mode = {mode} toggleMode = {toggleMode}/>
    <Textarea heading = 'Enter Your Text To Analyze'/>
    </>
    
    );
};

ReactDOM.render(<Home />, document.getElementById('root-2'));