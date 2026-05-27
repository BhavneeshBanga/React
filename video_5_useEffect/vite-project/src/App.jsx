import { useEffect, useState } from "react";



export default function App() {

  const [users, SetUser] = useState([]);
  const [count, setcount] = useState(30);

  // async function Githubprofile() {

  //   const response = await fetch ("https://api.github.com/users")
  //   const data =  await response.json();
  //   console.log(data);
  //   SetUser(data);
  //   console.log('hello dost');
  // }



  //ab sirf ek hi baar hello print hua hai , matlab sirf ek hi baar chala hai
  useEffect(()=>{
    async function Githubprofile() {

    const response = await fetch (`https://api.github.com/users?per_page=${count}`)
    const data =  await response.json();
    SetUser(data);
  }

  Githubprofile()
  }, [count])
    // empty array nahi denge toh yeh bhi baar baar execute hoga

    // future mai aisi condition aa sakti hai ki hame isko dubara call karna pade 
    
    // function handleChange(e) {
    //   console.log(e.target.value);
    //   setText(e.target.value.toUpperCase());
      
    // }
    


  return (
    <>
      <h1>Github users</h1>
      <input type="number" value={count} onChange={(e)=>{
        setcount(e.target.value)
      }} />
      <div style={{display: "flex", justifyContent:"center", alignItems: "center", flexWrap : "wrap", gap:"10px", 
        borderRadius : "5px"}}>
        {
          users.map(user => (
            <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}></img>
          ))
          // key unique deni zarui hai error nahi aayega
        }
      </div>
    </>
  );
}

