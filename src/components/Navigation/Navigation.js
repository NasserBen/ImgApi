import React from 'react';
import "./Navigation.css"
import Logo from "../Logo/Logo"

class Navigation extends React.Component {

    render() {

        return (
            
            <nav className="nav">< Logo /><a href="/">Sign Out</a></nav>

        );
    }
}

export default Navigation;
