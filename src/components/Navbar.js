import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="nav_container">
            <div className="navbar"></div>
            <h1>Random User React App</h1>
            </div>
        )
    }
}

export default Navbar;
