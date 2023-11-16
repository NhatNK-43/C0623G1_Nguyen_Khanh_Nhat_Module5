import "./Header.css"
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
                                    <a className="nav-link active-cus hover" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover" href="#">FACILITIES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover" href="#">CUSTOMERS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover" href="#">CONTRACTS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}