import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {FacilityList} from "./components/facilities/FacilityList";
import {FacilityCreate} from "./components/facilities/FacilityCreate";
import {FacilityUpdate} from "./components/facilities/FacilityUpdate";
import {CustomerList} from "./components/customers/CustomerList";
import {CustomerCreate} from "./components/customers/CustomerCreate";
import {CustomerUpdate} from "./components/customers/CustomerUpdate";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="" element={<FacilityList/>}></Route>
                <Route path="/facilities" element={<FacilityList/>}></Route>
                <Route path="/facilities/create" element={<FacilityCreate/>}></Route>
                <Route path="/facilities/update/:id" element={<FacilityUpdate/>}></Route>
                <Route path="/customers" element={<CustomerList/>}></Route>
                <Route path="/customers/create" element={<CustomerCreate/>}></Route>
                <Route path="/customers/update/:id" element={<CustomerUpdate/>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
