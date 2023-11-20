import "./Footer.css";
import {FacebookOutlined, Instagram, YouTube} from '@mui/icons-material';
import {IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container footer-top d-flex justify-content-end align-items-center">
                    <a href="https://www.facebook.com/furamaresort/" target="_blank"><IconButton
                        color="primary"><FacebookOutlined/></IconButton></a>
                    <a href="https://www.instagram.com/furama_resort_and_villas/" target="_blank"><IconButton
                        color="primary"><Instagram/></IconButton></a>
                    <a href="https://www.youtube.com/user/furamaresortvietnam/featured" target="_blank"><IconButton
                        color="primary"><YouTube/></IconButton></a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 footer-left">
                            <h5>CATEGORY</h5>
                            <span><NavLink to="/facilities">Facilities</NavLink></span>
                            <br/>
                            <span><NavLink to="/customers">Customers</NavLink></span>
                            <br/>
                            <span><NavLink to="/contracts">Contracts</NavLink></span>
                        </div>
                        <div className="col-sm-8 footer-right">
                            <h5>CONTACT</h5>
                            <span>Add: 103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</span>
                            <br/>
                            <span>Tel: 84-236-3847 333/888 * Fax: 84-236-3847 666</span>
                            <br/>
                            <span>Email: <a className="link"
                                            href="mailto:reservation@furamavietnam.com">reservation@furamavietnam.com</a>
                * <a className="link" href="https://www.furamavietnam.com/undefined/">www.furamavietnam.com</a></span>
                            <br/>
                            <span>GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236,</span>
                            <br/>
                            <span> Sabre-GD 032771, Worldspan- GD DADFU</span>
                            <br/>
                            <br/>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom"><span>&copy; 2023 Furama Resort Danang</span></div>
            </div>
        </>
    )
}
