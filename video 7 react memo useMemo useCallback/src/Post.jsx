import { useMemo } from "react"

const Post = React.memo(({value})=>{

console.log('post render');
        
    
    return (
    <>
        <h1>Your name is {value.name} and age is {value.age}</h1>
        </>
    )

})


export default Post