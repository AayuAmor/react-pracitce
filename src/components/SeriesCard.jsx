// File: SeriesCard.jsx
// ✅ This is a reusable component that receives props from the parent

export const SeriesCard = (props) => {
  // props.curElem contains one object of the seriesData array
  return (
    <li>
      <div>
        <img
          src={props.curElem.img_url}
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: {props.curElem.name}</h2>
      <h3>Rating: {props.curElem.rating}</h3>
      <p>Summary: {props.curElem.description}</p>
      <p>Cast: {props.curElem.cast}</p>
      <p>Genre: {props.curElem.genre}</p>
      <a href={props.curElem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
