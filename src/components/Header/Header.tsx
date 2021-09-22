import React, { Fragment, useState } from 'react'
import "./header.css";
import logo from "../../images/logo.png";
// import logoIcon from "./../../images/icon.png";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    // const {count} = useSelector((state: RootState) => state.cart);
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div className="main__header">
                <div className="inner__section">
                    <div className="logo__box">
                        <img src={logo} className="logo" alt="logo"/>
                        {/* <img src={logoIcon} className="logo_icon" alt="logo"/> */}
                    </div>

                    <div className="menu_bar">
                        <ul className="nav_menu_inner_main">
                            <li>Blog</li>
                            <li>Hearing Center</li>
                            <li>Foot Diagnosis</li>
                            <li>Fabrication of insoles</li>
                            <li>Promotions and discounts</li>
                        </ul>
                    </div>
                    <div>
                        <button className="login_button">Log In</button>
                        <button className="subscribe_button">Subscribe</button>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Header;