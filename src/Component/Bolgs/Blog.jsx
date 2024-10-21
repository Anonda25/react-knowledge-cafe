import { useEffect } from "react";
import { useState } from "react"


function Blog() {
    const [posted, setPosted]=useState([]);
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
  return (
    <div>
        <h1>Blogs.length : </h1>
    </div>
  )
}

export default Blog