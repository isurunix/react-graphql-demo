import React from 'react';
import { UserContext } from "../LoginForm/User";
import './index.css';

class Header extends React.Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.logout = () => {
            localStorage.clear();
        }
    }

    render() {
        this.user = this.context;
        let isLoggedIn = this.user != null;

        if (isLoggedIn) {
            return (
                <nav className="navbar navbar-dark navbar-expand-md bg-primary justify-content-between justify-content-start">
                    <a className="navbar-brand d-inline" href="/">React + GraphQL Demo</a>
                    <a className="navbar-brand d-inline" onClick={this.logout} href="/">Logout</a>
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