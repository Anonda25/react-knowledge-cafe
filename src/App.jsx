import { useState } from "react";
import "./App.css";
import Blog from "./Component/Bolgs/Blog";
import Navber from "./Component/Navber/Navber";

function App() {
  const [bookMark,setBookmark]=useState([]);
  
const handelAddToBookMark=(post)=>{
  console.log('i am clicked',post);
  const newBookMark = [...bookMark,post]
  setBookmark(newBookMark)
}

  return (
    <div className="w-11/12 mx-auto ">
      <Navber></Navber>
      <Blog
        handelAddToBookMark={handelAddToBookMark}
        bookMark={bookMark}
      ></Blog>
    </div>
  );
}

export default App;
