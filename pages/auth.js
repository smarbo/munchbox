import Layout from "@/components/Layout";
import validateEmail from "@/utils/validateEmail";
import { montserrat } from "@/components/Fonts";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorNotification } from "@/components/Notifications";
const authKey = JSON.parse(process.env.NEXT_PUBLIC_AUTH_KEY)[0];

async function validateForm(type, data, router, err, errNum) {
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
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "munchbox-auth-key": authKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
				await fetch("/api/users/login", {
					method: "POST",
					headers: {
						"munchbox-auth-key": authKey,
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ username: data.username, password: data.password })
				})
        router.push("/");
      } else if (res.status === 409) {
        err(
          `${(await res.json()).message ? "Email" : "Username"} already exists.`
        );
        errNum(Date.now());
      } else {
        err("Server error. Try again later.");
        errNum(Date.now());
      }
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
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "munchbox-auth-key": authKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });
      if (res.ok) {
        router.push("/");
      } else if (res.status === 404) {
        err("User not found.");
        errNum(Date.now());
      } else if (res.status === 401) {
        err("Incorrect password.");
        errNum(Date.now());
      }
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

function SignupForm(props) {
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
          validateForm(
            "signup",
            {
              username: document.getElementById("username").value,
              email: document.getElementById("email").value,
              password: document.getElementById("password").value,
              passwordConf: document.getElementById("passwordConf").value,
            },
            props.router,
            props.updateError,
            props.errNum
          );
        }}
      >
        Continue
      </button>
    </div>
  );
}

function LoginForm(props) {
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
          validateForm(
            "login",
            {
              username: document.getElementById("Lusername").value,
              password: document.getElementById("Lpassword").value,
            },
            props.router,
            props.updateError,
            props.errNum
          );
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default function Authentication() {
  const router = useRouter();
  const [loginToggled, setLoginToggled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorNum, setErrorNum] = useState(0);

  return (
    <Layout
      title="Munchbox - Authentication."
      topClass={`Authentication ${montserrat.className} w-full min-h-screen`}
    >
      <div className="AUTHCONTAINER justify-center shadow-2xl shadow-gray-950 items-center absolute top-[50%] left-[50%] rounded-lg flex flex-col -translate-y-[50%] -translate-x-[50%] bg-gradient-to-tl from-gray-700 via-gray-800 to-gray-700 bg-opacity-50 w-[300px] md:w-[400px] lg:w-[500px] h-[450px] lg:h-[600px]">
        {loginToggled ? (
          <SignupForm
            router={router}
            updateError={setErrorMessage}
            errNum={setErrorNum}
          />
        ) : (
          <LoginForm
            router={router}
            updateError={setErrorMessage}
            errNum={setErrorNum}
          />
        )}
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
          {loginToggled ? "Already have an account?" : "Don't have an account?"}
        </button>
      </div>
      {errorMessage && (
        <ErrorNotification message={errorMessage} num={errorNum} />
      )}
    </Layout>
  );
}
