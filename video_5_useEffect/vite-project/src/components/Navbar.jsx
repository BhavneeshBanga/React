import React, { useEffect } from 'react'



const Navbar = ({ color }) => {
    // Case 1 : Run on every render
    useEffect(() => {
        alert("Hey I will run on every render")
    });

    // Case 2 : Run only on first
    useEffect(() => {
        alert("Hey welcome to the page this is the first render")
    }, []);


    // Case 3 : Run only when certain values change
    useEffect(() => {
        alert("i am running because color ws changed")
        setcolor(color + 1);
    }, [color]);



    return (
        <div>
            I am a navbar of {color} color hehehe....
        </div>
    )
}

export default Navbar
