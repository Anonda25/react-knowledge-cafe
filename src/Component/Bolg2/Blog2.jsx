import PropTypes from "prop-types";

function Blog2({ post, handelAddToBookMark }) {
  const { title, cover, author, author_img, post_minute, post_time, hashtags } =
    post;
  return (
    <div className=" mb-10 space-y-2">
      <img src={cover} alt="" className="w-full rounded" />

      <div className="flex justify-between ">
        <div className="flex gap-3">
          <img src={author_img} alt="" className="w-10 h-10" />
          <div>
            <p>{author}</p>
            <p>{post_time}</p>
          </div>
        </div>
        <span>{post_minute} min read
             <button>
             
             
             </button> </span>
      </div>
      <h1>{title}</h1>
      <p> {hashtags}</p>
      {/* style the button and show to the right side card */}
      <button
        onClick={() => handelAddToBookMark(post)}
        className="text-blue-500 font-xl underline"
      >
        {" "}
        Read More
      </button>
    </div>
  );
}
Blog2.propTypes = {
  post: PropTypes.object.isRequired,
  handelAddToBookMark:PropTypes.func.isRequired
};
export default Blog2;
