import React from 'react';
import { NavLink } from 'react-router-dom';

let navStyle = {
    backgroundColor: "#039be5",
    paddingLeft: "18px"
};

export default class Header extends React.Component {
    render() {
        return (
            <nav style={navStyle}>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Keela Teams</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>

                    </ul>
                </div>
            </nav>
        );
    }
}
