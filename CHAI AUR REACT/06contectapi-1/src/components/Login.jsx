import UserContext from "../context/usercontext";
import { useState, useContext } from "react";

function Login() {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const{setUser} = useContext(UserContext)
    const handleSubmit = (e) => { 
        e.preventDefault();
        setUser({UserName,Password})
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="usename"
                onChange={(e) => setUserName(e.target.value)}
            />
            {" "}
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}

export default Login;
