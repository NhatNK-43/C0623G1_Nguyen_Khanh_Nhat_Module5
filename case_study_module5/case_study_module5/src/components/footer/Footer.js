import "./Footer.css";
import {FacebookOutlined, Instagram, YouTube} from '@mui/icons-material';
import { IconButton } from "@mui/material";

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-top navbar">
                    <IconButton color="primary"><FacebookOutlined/></IconButton>
                    <IconButton color="primary"><Instagram/></IconButton>
                    <IconButton color="primary"><YouTube/></IconButton>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 footer-left">
                            <h5>CATEGORY</h5>
                            <span><a href="#">Facilities</a></span>
                            <br/>
                            <span><a href="#">Customers</a></span>
                            <br/>
                            <span><a href="#">Contracts</a></span>
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
