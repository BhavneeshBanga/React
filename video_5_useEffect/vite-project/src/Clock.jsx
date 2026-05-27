import { useEffect, useState } from "react";

function Clock() {



    const [time, settime] = useState(new Date().toLocaleTimeString())
    const [show, setshow] = useState(true);


    useEffect(() => {

    if(!show)
        return;

       const intervalid =  setInterval(() => {
            console.log("hi");
            settime(new Date().toLocaleTimeString());
        }, 1000)

        return ()=>{
            clearInterval(intervalid);
        }


    }, [show])
    // show is liye likha 

    // useEffect ki vajh se har sec ek baar hi hi likha aa raha hai
    function handleclick() {
        setshow(!show);
    }


    return (
        <>
        <button onClick={handleclick} >
            {show ? "Hide": "show"}
        </button>
        {
            show && <h1>Current time: {time}</h1>
        }
            
        </>
    )
}


export default Clock