export const SeriesCard = ({data}) => {
  const { img_url,name, rating, description, cast, genre, watch_url} = data;
  const btn_style={
    
          padding:"1.2rem 2.4rem",
          border:"none",
          fontSize:"1.6rem",
          backgroundColor:"var(--btn-hover-bg-color)",
          color:"var(--bg-color)",
        
  }
  const rating_condition = rating >= 8.5 ? "superhit" : "average";
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
      <h3 style={{fontSize:"18px"}}>Rating:
        {""}

        {/* <span className={`rating ${ rating >= 8.5 ? "superhit" : "average"}`}>  This is conditional stylingNow with Template Linerals `` which allows multiple className */}

         <span className={`rating ${ rating_condition}`}>  {/* Passing  variable for conditional styling*/}

        {""} 
        {rating}
        </span>
        </h3>
       
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
