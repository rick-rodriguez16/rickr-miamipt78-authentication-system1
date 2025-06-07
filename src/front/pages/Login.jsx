import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { login } from "../fetch";

export const Login = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        login(email, password, dispatch)
            .then(() => console.log("It worked!"))
    }

    return (
        <>
            <div className="text-center mt-5">
                {
                    // create a ternary for the following:
                    // check the store for a valid token
                    // if there is a token, welcome the user
                    // otherwise, direct the user to login
                    (store.token && store.token !== undefined && store.token !== "")
                        ?
                        <>
                            <h1>Hello! You are logged in!</h1>
                        </>
                        :
                        <>
                            <h1>Login</h1>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    onClick={handleClick}
                                >Login
                                </button>
                            </div>
                        </>
                }
            </div>
        </>
    );
}