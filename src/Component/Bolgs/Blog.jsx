import { useEffect } from "react";
import { useState } from "react";
import Blog2 from "../Bolg2/Blog2";
import ShowBlogs from "../ShowBlogs/ShowBlogs";
import PropTypes from "prop-types";
function Blog({ handelAddToBookMark, bookMark }) {
  const [posted, setPosted] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setPosted(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl">Blogs.length : {posted.length} </h1>
      <div className="flex gap-10 ">
        <div className="w-3/4">
          {posted.map((post) => (
            <Blog2
              key={post.id}
              post={post}
              handelAddToBookMark={handelAddToBookMark}
            ></Blog2>
          ))}
        </div>
        <div className="w-1/3">
          <ShowBlogs bookMark={bookMark}></ShowBlogs>
        </div>
      </div>
    </div>
  );
}

Blog.prototypes = {
  Blog: PropTypes.func.isRequired,
};
export default Blog;
