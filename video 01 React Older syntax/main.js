// const { createElement } = require("react");

const { Children } = require("react");


//Custome React
// const React = {
//     createElement: function (tag, attributes, children) {

//         const element = document.createElement(tag);
//         element.textContent = children;

//         for (const key in attributes) {

//             if (key === "style") {
//                 Object.assign(element.style, attributes.style);
//             }

//             else if (key === "className") {
//                 element.setAttribute("class", attributes[key]);
//             }

//             else {
//                 element.setAttribute(key, attributes[key]);
//             }
//         }

//         return element;
//     }
// }


// const ReactDOM = {
//     render: function (child, parent) {
//         parent.append(child);
//     }
// }



const React = {
    createElement : function(type, props, children) {
        return {
            type : type ,
            props:{
                ...props,
                children: children
            }
        }
    }
}


// const reactElement = {
//     type : 'h1',
//     props: {
//         className: "element",
//         id: 'first',
//         style: {
//             fontSize: "30px",
//             backgroundColor: "orange",
//             color: "white",
//         },
//         Children : "Hello coder army"
//     }
// }

const ReactDOM= {
    render: function(reactElement, root) {
        const element = document.createElement(reactElement.type);
        
        const {props} = reactElement;
        for(const key in props) {
            if(key === 'style') {
                Object.assign(element.style, props.style)
            }
            else if(key == 'children' ) {
                element.textContent = props[key];
            }
            else {
                element[key] = props[key];
            }
        }
        root.append(element);

    }
}


const element1 = React.createElement(
    "h1",
    {
        className: "element",
        id: 'first',
        style: {
            fontSize: "30px",
            backgroundColor: "orange",
            color: "white"
        }
    },
    "Hello coder army"
);


console.log(element1);



const root = document.getElementById("root");
// root.append(element1)
ReactDOM.render(element1, root)