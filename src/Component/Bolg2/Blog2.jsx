import PropTypes from "prop-types";

function Blog2({ post }) {
  console.log(post);
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
        <span>{post_minute} min read </span>
      </div>
      <h1>{title}</h1>
      <p> {hashtags}</p>
    </div>
  );
}
Blog2.propTypes={
    post:PropTypes.object.isRequired,
}
export default Blog2;
