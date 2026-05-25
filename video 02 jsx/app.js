// // const element = React.createElement('h1', { id: 'title' }, "Hello coder army");

// //JSX : javascript XML : look like html



// // const element = <h1 id="title" className="first" > Hello Bhavi Banga</h1>;



// //babel ka kaam hai JSX ko react.createElement() mai conver kar dena

// // (   ) brackets ka use kare

// const element2 = (
//     <div>
//         <h1>Hello Bhavay kay haal haal hai</h1>
//         <h2>Hello bhavAI</h2>
//     </div>
// )


// //REact Element
// const element3 = (
//     <div>
//         <h1>hello Bhavi Banga</h1>
//         <h2>hello Bhavi Banga</h2>
//     </div>
// )



// // React component kya hota hai
// // function hai jo sirf jsx return karke dega
// // funciton ka pehle letter capital hona chaahiyae
// function App(name) {
//     return (
//         <h1>Hello {name} Coder {10 + 40 - 30}</h1>
//     )
// }

// //js ka expression aap iske andar likkh sakte hain



// // number, string, null, undefined, true, false,array,  
// // *****************************************************
// // object error maarega
// // *****************************************************


// // Number string, array ko dikha sakte hai
// // true, false null undefined render honge lekin show kuch nahi hoga, 
// // object : Error

// const age = 10;

// // const element = <h1>hello coder {age > 10 ? "Adult" : "kid"}</h1>
// // const element = <h1>hello coder {<h1>hi ji</h1>}</h1>


// const isloggedin = true;


// const element = <h1>hello coder {isloggedin ? <h1>hn ji aap logged in hai</h1> : <h2>nahi aap loggedin nahi hai</h2>}</h1>




// const courses = ['html', 'css', 'javascript','react'];
// //[<li>HTML</li>, <li>css</li>, <li>javaxcript</li>, <li>react</li>, ]
// const element2 = (
//     <ul>
//     {
//         courses.map((course) => (
//             <li>{course}</li>
//         ))
//     }
//     </ul>
// );


// function App(props) {
//      return  (
//         <h1>Hello {props.name} {props.age}</h1>
//      )
// }
//argument ko hi props bolte hai
// props kuch nahi hai


// {
//     name : "bhavi", 
//     age : 30,
// }




function Header({name}) {
    return (
        <h1> {name}Welcome to Indian Election Commission</h1>
    )
}

function Main() {
    return (
        <h2>Thsi si information about us</h2>
    )
}

function Footer() {
    return (
        <h2>Thanks for visitiing our website</h2>
    )
}

//  <> fragment create kar diye
function App() {
    return (
        <>
            <Header name="Bhavi"></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

// number pass karna hai oth { }
// const element = <App name = {"Bhavi"} age = {20} ></App>

// const ab = {backgroundColor : "orange", color : "white"}

// const element = <h1 id="titel" className="firstt" style={ab}>Hello Bhavi Banga</h1>
// const element = <h1 id="titel" className="firstt" style={{backgroundColor : "orange", color : "white"}}>Hello Bhavi Banga</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));



// root.render(element2);
// root.render(element2);
// root.render(App());
// root.render(App('bhavi'));
root.render(<App></App>);



//<h1 id="title"> Hello Bhavi Banga</h1>; ---> React.createElement('h1', { id: 'title' }, "Hello coder army");------> React Element(JS object) -----> Real Dom (HTML ELEMENT)