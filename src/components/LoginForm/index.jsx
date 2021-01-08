import './index.css'
import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { createContext } from 'react';

const LOGIN_MUTATION = gql`
            mutation LoginMutation(
                $username: String!
                $password: String!
                ){
                login(username: $username, password: $password){
                    username
                    token
                    profile{
                        customerCode
                        contactNo
                        address
                    }
                }
            }
        `;

const UserContext = createContext();

function LoginForm(props) {
    const history = useHistory();
    const [state, setFormState] = useState({
        username: '',
        password: ''
    })

    function handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormState({
            ...state,
            [name]: value
        });
    }

    const [login, { error: mutationError }] = useMutation(LOGIN_MUTATION, {
        variables: {
            username: state.username,
            password: state.password
        },
        errorPolicy: 'all',
        onCompleted: ({ login }) => {
            localStorage.setItem("AUTH_TOKEN", login.token);
            localStorage.setItem("PROFILE", login.profile);
            UserContext.Provider.value = localStorage.getItem("PROFILE");
            history.push('/dashboard');
        },
        onError: () => {
            alert(mutationError)
        }
    });

    return <div>
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="row d-flex justify-content-center text-white">
                    <span className="h3">React + GraphQL Demo</span>
                </div>
            </nav>

            <div className="LoginForm">
                <div className="row">
                    <div className="col-sm-3">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Username"
                                    name="username"
                                    value={state.username}
                                    onChange={handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" placeholder="Password"
                                    name="password"
                                    value={state.password}
                                    onChange={handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={login}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>
}

export { UserContext };
export default LoginForm;