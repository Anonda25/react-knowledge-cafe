
import PropTypes from 'prop-types'

const Show = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div className="bg-white p-4 m-4 rounded">
      <p className="text-2xl">{title}</p>
    </div>
  );
};

Show.propTypes = {
  Show: PropTypes.array.isRequired
};

export default Show