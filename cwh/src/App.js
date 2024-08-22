import './App.css';
import About from './MyComponents/About';
import {Navbar} from './MyComponents/Navbar';
// import TextForm from './MyComponents/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText = "ABOUT" /> 
    {/* <TextForm/> */}
    <div className="container my-3">
   <About/>
    </div> 
    </>
  );
}

export default App;