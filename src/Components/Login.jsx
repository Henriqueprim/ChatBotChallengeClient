import api from "../Services/Api";
import React, { useState } from "react";

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = ({ target }) => {
        const { value } = target;
        setUsername(value);
    };

    const handlePasswordChange = ({ target }) => {
        const { value } = target;
        setPassword(value);
    };

    const handleLogin = async () => {
        await api
            .post("/login", {
                    username,
                    password,
                },
        ).then(() => {
            alert("Login successful");
            localStorage.setItem("username", username);
            props.setChatUsername();
            props.toggleButton();
            props.toggle();
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
    };

    const handleSignUp = async () => {
        await api
            .post("/register", {
                    username,
                    password,
                },
        ).then(() => {
            alert("Sign Up successful")
            props.setChatUsername(username);
            props.toggleButton();
            props.toggle();
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
    };

    return (
        <div>
            <div>
                <h2>Login or Sign Up</h2>
                <form>
                    <label>
                        Username:
                        <input
                            type="username"
                            placeholder="What can I call you?"
                            value={ username }
                            onChange={ handleUsernameChange }
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            placeholder="Be creative!"
                            value={ password }
                            onChange={ handlePasswordChange }
                        />
                    </label>
                    <button
                        type="button"
                        onClick={ handleLogin }
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={ handleSignUp }
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
