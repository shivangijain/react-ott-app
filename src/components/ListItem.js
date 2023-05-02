import { MISSING_IMAGE_PATH } from "../constants";

const ListItem = ({ name, posterImage }) => {
	const addDefaultSrc = (ev) => {
		ev.target.src = MISSING_IMAGE_PATH
	}
  return (
    <div className="movie_list">
      <img onError={addDefaultSrc} src={`slices/${posterImage}`} alt={name} height='272px' width={'180px'}></img>
			<p>{name.length > 15 ? `${name.substring(0,15)}...` : name}</p>
    </div>
  );
};

export default ListItem;
