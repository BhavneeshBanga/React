
import React from "react";

const Sum = React.memo((number)=>{
    function calculatesum() {
        let sum = 0;
        for (let i = 0; i <= number.number; i++) {
            sum += i
        } 
        return sum;
    }
    const total = calculatesum();
    
    console.log('sum render');

    return (
        <>
        <h1>this is our math library</h1>
        <h2>Suum : {total}</h2>
        </>
    )
    
})

export default Sum;