// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TextForm from './components/Textform';

function App() {
  return (
    <>
       <BrowserRouter>
            <Navbar title="TextUtils" aboutText="About"/>
            <Routes>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze" />}/>
              <Route exact path="/about" element={<About/>}/>
            </Routes>
       </BrowserRouter>
    </>
  );
}



export default App
  