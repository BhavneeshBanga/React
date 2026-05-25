//create a h1 element using js

const { createElement } = require("react");

// attributes = {
//     className : "element",
//     id : "first",
//     style : {
//         fontSize : "30px",

//     }
// }

// element = {
//     tag: "h1",
//     textContent : "hello coder army",
//     className : "element",
//     id : "first",
// }



// const element = document.createElement('h1');
// element.textContent = "hello coder army";

// element.className = 'element'
// element.id = 'first'
// element.style.fontSize = '30px'
// element.style.backgroundColor = 'orange'
// element.style.color = 'white'


// const element2 = document.createElement('h2');
// element2.textContent = "strike is launched";

// element2.className = 'element2'
// element2.id = 'first'
// element2.style.fontSize = '30px'
// element2.style.backgroundColor = 'pink'
// element2.style.color = 'green'

// const element3 = document.createElement('h2');
// element3.textContent = "strike is launched";

// element3.className = 'element3'
// element3.id = 'first'
// element3.style.fontSize = '30px'
// element3.style.backgroundColor = 'white'
// element3.style.color = 'black'


const React = {
    createElement : function(tag, attributes, children) {
       
        const element = document.createElement(tag);
        element.textContent = children;
        
        for(const key in attributes) {
            if(key=="style") {
                Object.assign(element.style, attributes.style)
            }

             else if(key === "className") {
                element.setAttribute("class", attributes[key]);
            }

            else{
                element.setAttribute('key', attributes[key]);
                // element[key] = attributes[key];
            }
        }
        return element;
    }
}

// function createElement(tag, attributes, children) {
//     const element = document.createElement(tag);
//     element.textContent = children;
//     for(const key in attributes) {
//         if(key=="style") {
//             Object.assign(element.style, attributes.style)
//         }
//         else{
//             element[key] = attributes[key];
//         }
//     }
//     return element;
// }

const element1 = React.createElement("h1", {className : "element", id : 'first', style : {fontSize: "30px", backgroundColor : "orange", color: "White"}}, "Hello coeder army");
const element2 = React.createElement("h2", {className : "element", id : 'second', style : {fontSize: "30px", backgroundColor : "pink", color: "green"}}, "My name is bhavi");


const root = document.getElementById("root");
root.append(element1)
root.append(element2)
// root.append(element3)


