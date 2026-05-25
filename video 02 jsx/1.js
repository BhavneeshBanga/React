// const element = React.createElement('h1', { id: 'title' }, "Hello coder army");

//JSX : javascript XML : look like html
const element = <h1 id="title"> Hello Bhavi Banga</h1>;
//babel ka kaam hai JSX ko react.createElement() mai conver kar dena
const element2 = <div>
    <h1>Hello Bhavay kay haal haal hai</h1>
    <h2>Hello bhavAI</h2>
</div>

const root = ReactDOM.createRoot(document.getElementById('root')
);

root.render(element2);


//<h1 id="title"> Hello Bhavi Banga</h1>; ---> React.createElement('h1', { id: 'title' }, "Hello coder army");------> React Element(JS object) -----> Real Dom (HTML ELEMENT)