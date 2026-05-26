import React from "react";
import ReactDOM from "react-dom/client"


function Header({ name }) {
    return (
        <h1 style={{
            color: "white", backgroundColor: "lightblue", display: "flex", height: "100px", width: "450px", borderRadius: "20px", display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}> thsi is Special for {name}</h1>
    )
}

function Main({ arr }) {
    return (
        <div>
            <h1 style={{
                color: "white", backgroundColor: "lightpink", display: "flex", height: "100px", width: "70%", borderRadius: "20px", display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}> this is the main body of website {name}</h1>
            
            <h2 style={{ color: "white", backgroundColor: "lightgreen" }} >this is array list</h2>
            {arr.map((arr, idx) => {
                return <h3 style={{ backgroundColor: "lightpink", color: "white" }} key={idx}>{arr}</h3>
            })}
        </div>
    );
}

function Footer() {
    return (
        <h1 style={{
            color: "white", backgroundColor: "lightgreen", display: "flex", height: "100px", width: "50vw", borderRadius: "20px", display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>this is the footer of website {name}</h1>
    );
}

//  <> fragment create kar diye
function App() {
    const arr = ['01', '02', '03', '04']
    return (
        <>
            <Header style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} name="Bhavi"></Header>
            <Main arr={arr}></Main>
            <Footer></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App></App>);


