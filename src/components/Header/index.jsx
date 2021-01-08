import React, { useContext } from 'react';
import { UserContext } from "../LoginForm";
import './index.css';

function Header() {
    const user = useContext(UserContext);

    let isLoggedIn = user != null;

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
export default Header;