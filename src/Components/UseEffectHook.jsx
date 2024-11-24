import { useEffect, useState } from "react"

const UseEffectHook = () => {
    const [username, setUsername] = useState("")


    // use effect hook will be called only when component is rendered.
    // it is used to fetch data from API .. from API data should be called only once soo we use this effect 
    useEffect(() => {
        console.log("gthis is use effect, called only once")
    }, [username])

    return (
        <>  
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </>
    )
}

export default UseEffectHook