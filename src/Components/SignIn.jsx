import { useState } from "react"



const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitFunc = () => {
        console.log("called")
    }
   
    return (
        <div className="container">
            Username: {" "} <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            Password: {" "} <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => submitFunc()}> Submit</button>
        </div>
    );
};

export default SignIn