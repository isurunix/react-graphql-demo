import React from 'react';
import { UserContext } from "../LoginForm";
import './index.css';

class Header extends React.Component {
    static contextType = UserContext;

    render() {
        this.user = this.context;
        let isLoggedIn = this.user != null;

        if (isLoggedIn) {
            return (
                <nav className="navbar navbar-dark navbar-expand-md bg-primary justify-content-between justify-content-start">
                    <a className="navbar-brand d-inline" href="/">React + GraphQL Demo</a>
                    <a if className="navbar-brand d-inline" href="/logout">Logout</a>
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-dark navbar-expand-md bg-primary justify-content-between justify-content-start">
                    <a className="navbar-brand d-inline" href="/">React + GraphQL Demo</a>
                </nav>
            )
        }
    }
}

export default Header;