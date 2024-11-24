import { useState } from "react";

const Parent = () => {

    const [username, setUsername] = useState("Demo")

    const changeUsername = () => {
        setUsername("value changed")
    }

    return (
        <> 
            <p>the value is {username}</p>
            <button onClick={() => changeUsername()}>Click Me</button>
        </>
    )
};

export default Parent