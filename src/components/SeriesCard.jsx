// export const SeriesCard = (props) => {
export const SeriesCard = ({data}) => {
  // props.data contains one object of the seriesData array
  // const { img_url,name, rating, description, cast, genre, watch_url} = props.data;
  const { img_url,name, rating, description, cast, genre, watch_url} = data;
  return (
    <li>
      <div>
        <img
          src={img_url}
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
