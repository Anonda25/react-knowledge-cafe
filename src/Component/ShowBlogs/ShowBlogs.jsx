import Show from "./Show";
import PropTypes from "prop-types";

function ShowBlogs({ bookMark }) {

  return (
    <div className="">
      <h2>bookMark</h2>
      <div className="bg-gray-400 p-4 rounded">
        <p>bookmark {bookMark.length}</p>
        {bookMark.map((bookMark, idx) => (
          <Show key={idx} bookMark={bookMark}></Show>
        ))}
      </div>
    </div>
  );
}

ShowBlogs.proptypes={
  bookMark:PropTypes.array.isRequired

}

export default ShowBlogs