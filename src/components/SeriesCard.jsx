// export const SeriesCard = (props) => {

export const SeriesCard = ({data}) => {
  // props.data contains one object of the seriesData array
  // const { img_url,name, rating, description, cast, genre, watch_url} = props.data;
  const { img_url,name, rating, description, cast, genre, watch_url} = data;
  const btn_style={
    
          padding:"1.2rem 2.4rem",
          border:"none",
          fontSize:"1.6rem",
          backgroundColor:"var(--btn-hover-bg-color)",
          color:"var(--bg-color)",
        
  }
  return (
    <li className="card">
      
        <div>
        <img
          src={img_url}
          width="40%"
          height="40%"
        />
      </div>
      <div className="card-content">
      <h2>Name: {name}</h2>
      {/* <h3 style={{margin:"1.2rem 0"}}>Rating: {rating}</h3>
      <p style={{margin:"1.2rem 0"}}>Summary: {description}</p>
      <p style={{margin:"1.2rem 0"}}>Cast: {cast}</p>
      <p style={{margin:"1.2rem 0"}}>Genre: {genre}</p> */}
      <h3 style={{fontSize:"18px"}}>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank">
        <button 
        style={btn_style}
        >
          Watch Now
          </button>
      </a>
      </div>
    </li>
  );
};
