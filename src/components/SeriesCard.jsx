import style from "./Netflix.module.css";

export const SeriesCard = ({data}) => {
  const { img_url,name, rating, description, cast, genre, watch_url} = data;
  const btn_style={
    
          padding:"1.2rem 2.4rem",
          border:"none",
          borderRadius: "100rem",
          fontSize:"1.6rem",
          backgroundColor:`${rating >= 8.5 ? "#51de51" : "#ffff00" }`,
          color:"#0a0a0a",
      
        
  }
  const ratingClass = rating >= 8.5 ? style.superhit : style.average;
  return (
    <li className={style.card}>
      <div>
        <img
          src={img_url}
          width="40%"
          height="40%"
        />
      </div>
      <div className={style["card-content"]}>
      <h2>Name: {name}</h2>
      <h3 style={{fontSize:"18px"}}>Rating:


        {/* <span className={`rating ${ rating >= 8.5 ? "superhit" : "average"}`}>  This is conditional stylingNow with Template Linerals `` which allows multiple className */}

         <span className={`${style.rating} ${ratingClass}`}>
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
          <b>Watch Now</b>
          </button>
      </a>
      </div>
    </li>
  );
};
