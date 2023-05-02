import { MISSING_IMAGE_PATH } from "../constants";

const ListItem = ({ name, posterImage }) => {
	const addDefaultSrc = (ev) => {
		ev.target.src = MISSING_IMAGE_PATH
	}
  return (
    <div className="movie_list">
      <img onError={addDefaultSrc} src={`/react-ott-app/slices/${posterImage}`} alt={name} height='272px' width={'180px'}></img>
			<p>{name.length > 12 ? `${name.substring(0,12)}...` : name}</p>
    </div>
  );
};

export default ListItem;
