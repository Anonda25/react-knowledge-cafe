import { useEffect } from "react";
import { useState } from "react";
import Blog2 from "../Bolg2/Blog2";
import ShowBlogs from "../ShowBlogs/ShowBlogs";

function Blog() {
  const [posted, setPosted] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setPosted(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl">Blogs.length : {posted.length} </h1>
      <div className="flex gap-10 w-3/4 ">
        <div>
          {posted.map((post) => (
            <Blog2 key={post.id} post={post}></Blog2>
          ))}
        </div>
        <ShowBlogs></ShowBlogs>
      </div>
    </div>
  );
}

export default Blog;
