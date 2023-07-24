import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import validateEmail from "../other/validateEmail";
import { useState } from "react";

function validateForm(type, data) {
    if (type === "signup") {
        const usernameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const passwordcInput = document.getElementById("passwordConf");
        let errors = [];
        if (!data.username) {
            errors.push(usernameInput);
        } else {
            usernameInput.style.background = "transparent";
        }
        if (!data.email || !validateEmail(data.email)) {
            errors.push(emailInput);
        } else {
            emailInput.style.background = "transparent";
        }
        if (!data.password) {
            errors.push(passwordInput);
        } else {
            passwordInput.style.background = "transparent";
        }
        if (!data.passwordConf || data.password !== data.passwordConf) {
            errors.push(passwordcInput);
        } else {
            passwordcInput.style.background = "transparent";
        }

        if (errors.length > 0) {
            errors.forEach((errorInput) => {
                errorInput.style.background = "rgba(212, 17, 17, 0.64)";
            });
        } else {
            console.log("Signup Validation passed! Here should create account");
        }
    } else if (type === "login") {
        const usernameInput = document.getElementById("Lusername");
        const passwordInput = document.getElementById("Lpassword");
        let errors = [];
        if (!data.username) {
            errors.push(usernameInput);
        } else {
            usernameInput.style.background = "transparent";
        }
        if (!data.password) {
            errors.push(passwordInput);
        } else {
            passwordInput.style.background = "transparent";
        }

        if (errors.length > 0) {
            errors.forEach((errorInput) => {
                errorInput.style.background = "rgba(212, 17, 17, 0.64)";
            });
        } else {
            console.log("Login Validation passed! Here should login");
        }
    }
}

function AuthInput(props) {
    return (
        <input
            className="AUTHINPUT focus:py-4 transition-all text-left py-2 px-4 rounded-lg my-2 lg:my-4 w-[260px] lg:w-[300px] focus:outline-none border-4 border-gray-800 bg-gray-500 text-white font-semibold placeholder:font-semibold"
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            onKeyDown={props.keydown}
        />
    );
}

function LoginForm() {
    return (
        <div className="AUTHFORM flex-col h-full w-[50%] flex justify-center items-center">
            <h1 className="font-bold text-gray-900 bg-gray-400 px-4 py-2 rounded-lg mb-4 border-4 border-gray-900   ">
                Sign Up
            </h1>
            <AuthInput
                type="text"
                placeholder="Username"
                id="username"
                keydown={(e) => {
                    if (e.key === "Enter") {
                        document.getElementById("signupSubmit").click();
                    }
                }}
            />
            <AuthInput
                type="email"
                placeholder="Email"
                id="email"
                keydown={(e) => {
                    if (e.key === "Enter") {
                        document.getElementById("signupSubmit").click();
                    }
                }}
            />
            <AuthInput
                type="password"
                placeholder="Password"
                id="password"
                keydown={(e) => {
                    if (e.key === "Enter") {
                        document.getElementById("signupSubmit").click();
                    }
                }}
            />
            <AuthInput
                type="password"
                placeholder="Confirm Password"
                id="passwordConf"
                keydown={(e) => {
                    if (e.key === "Enter") {
                        document.getElementById("signupSubmit").click();
                    }
                }}
            />
            <button
                id="signupSubmit"
                className="bg-gray-900 shadow-2xl transition-all duration-300 hover:shadow-none font-bold lg:w-[300px] hover:mt-6 text-white py-2 px-4  mt-4 rounded-lg lg:mt-8 w-[260px]"
                onClick={() => {
                    validateForm("signup", {
                        username: document.getElementById("username").value,
                        email: document.getElementById("email").value,
                        password: document.getElementById("password").value,
                        passwordConf:
                            document.getElementById("passwordConf").value,
                    });
                }}
            >
                Continue
            </button>
        </div>
    );
}

function SignupForm() {
    return (
        <div className="AUTHFORM flex-col h-full w-[50%] flex justify-center items-center">
            <h1 className="font-bold text-gray-900 bg-gray-400 px-4 py-2 rounded-lg mb-4 border-4 border-gray-900   ">
                Log In
            </h1>
            <AuthInput
                type="text"
                placeholder="Username or Email"
                id="Lusername"
                keydown={(e) => {
                    if (e.key === "Enter") {
                        document.getElementById("loginSubmit").click();
                    }
                }}
            />
            <AuthInput
                type="password"
                placeholder="Password"
                id="Lpassword"
                keydown={(e) => {
                    if (e.key === "Enter") {
                        document.getElementById("loginSubmit").click();
                    }
                }}
            />
            <button
                className="bg-gray-900 shadow-2xl transition-all duration-300 hover:shadow-none font-bold lg:w-[300px] hover:mt-6 text-white py-2 px-4  mt-4 rounded-lg lg:mt-8 w-[260px]"
                id="loginSubmit"
                onClick={() => {
                    validateForm("login", {
                        username: document.getElementById("Lusername").value,
                        password: document.getElementById("Lpassword").value,
                    });
                }}
            >
                Continue
            </button>
        </div>
    );
}

export default function Authentication() {
    const [loginToggled, setLoginToggled] = useState(false);
    return (
        <div className="Authentication w-full min-h-screen">
            <Navbar />
            <div className="AUTHCONTAINER justify-center shadow-2xl shadow-gray-950 items-center absolute top-[50%] left-[50%] rounded-lg flex flex-col -translate-y-[50%] -translate-x-[50%] bg-gray-700 w-[300px] md:w-[400px] lg:w-[500px] h-[450px] lg:h-[600px]">
                {loginToggled ? <LoginForm /> : <SignupForm />}
                <button
                    className={`relative text-white font-bold hover:underline ${
                        loginToggled
                            ? "bottom-[10px] lg:bottom-[40px]"
                            : "bottom-[80px] lg:bottom-[120px]"
                    }`}
                    onClick={() => {
                        setLoginToggled(!loginToggled);
                    }}
                >
                    {loginToggled
                        ? "Already have an account?"
                        : "Don't have an account?"}
                </button>
            </div>
            <Footer />
        </div>
    );
}
