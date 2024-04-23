import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import JSPopup from "reactjs-popup";
import logo from "./components/bsu-logo.png";

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.boisestate.edu/" target="_blank" rel="noopener noreferrer">
                <img alt="[LOGO]" className="bsu-logo" src={logo} style={{resizeMode: 'contain', flex: 1}} />
            </a>
            <span className="separator">|</span>
            <JSPopup
                trigger={<Link className="important-notice-title">Important Notice</Link>}
                position="top center"
                positionOffset={{ top: -10 }} // Adjust offset as needed
            >
                <div className="important-notice">
                    For the best search experience be sure to select the Year, Variable, and Color
                    from each menu before searching.
                    <br />
                    The Color menu is giving you the choice for which color the census tracts will
                    be displayed on the map.
                    <br />
                    This accommodates color-blind individuals for inclusivity.
                </div>
            </JSPopup>
            <span className="separator">|</span>
            <JSPopup
                trigger={<Link className="important-notice-title">Search Tips</Link>}
                position="top center"
                positionOffset={{ top: -10 }} // Adjust offset as needed
            >
                <div className="important-notice">
                    Be sure to select a Year, Variable, and Color from the drop-down menus
                    before searching or the search will not work as expected.
                    <br />
                    The Year menu will filter the data shown based on the year selected.
                    <br />
                    The Variable description's are listed on the About page that can be
                    navigated to from the Navigation Menu at the top of the page. They are
                    also available when hovered over in the Variable drop-down menu.
                </div>
            </JSPopup>
        </footer>
    );
}

export default Footer;
