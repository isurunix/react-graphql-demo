import React, { useContext } from 'react';
import { UserContext } from "../LoginForm";
function Header() {
    const user = useContext(UserContext);
    console.log(user);
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row d-flex justify-content-center text-white">
                <span className="h3">React + GraphQL Demo</span>
                <span className="">Logout</span>
            </div>
        </nav>
    )
}
export default Header;