import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
        <div style={{height:"50px"}}></div>
        <Footer></Footer>
    </>
  );
}

export default App;
