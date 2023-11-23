import "./Header.css"
import {NavLink} from "react-router-dom";
export function Header(){
    return(
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="/images/logo_furama.png" alt="Logo"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active-cus hover" aria-current="page">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/facilities" className="nav-link hover">FACILITIES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/customers" className="nav-link hover">CUSTOMERS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contracts" className="nav-link hover">CONTRACTS</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}