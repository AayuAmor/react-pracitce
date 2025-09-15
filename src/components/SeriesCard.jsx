import style from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({data}) => {
  const { img_url,name, rating, description, cast, genre, watch_url} = data;
  // const btn_style={
    
  //         padding:"1.2rem 2.4rem",
  //         border:"none",
  //         borderRadius: "100rem",
  //         fontSize:"1.6rem",
  //         backgroundColor:`${rating >= 8.5 ? "#51de51" : "#ffff00" }`,
  //         color:"#0a0a0a",
      
        
  // }

  // const Button = styled.button({ // Use of styled CSS component via curly braces
        
  //         padding:"1.2rem 2.4rem",
  //         border:"none",
  //         borderRadius: "100rem",
  //         fontSize:"1.6rem",
  //         backgroundColor:`${rating >= 8.5 ? "#51de51" : "#ffff00" }`,
  //         color:"#0a0a0a",
      
        
    
  // });

  const Button = styled.button`
          padding: 1.2rem 2.4rem;
          border: none;
          border-radius: 100rem;
          font-size: 1.6rem;
          background-color: ${(props) => props.rating >= 8.5 ? "#51de51" : "#ffff00" };
          color: var(--btn-color);
          font-weight: bold;
          cursor: pointer;
  `;

  const Rating = styled.h3`
  font-size:18px;
  color: ${(props) => props.rating >= 8.5 ? "#51de51" : "#dcdc35" };
  text-transform: captalize;
  `;

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
      {/* <div className={style["card-content"]}> */}
      <div className="flex flex-col gap-6 p-6">
      <h2>Name: {name}</h2>
      
      <Rating rating = {rating} ><span className="underline">Rating:</span>
        {/* <span className={`rating ${ rating >= 8.5 ? "superhit" : "average"}`}>  This is conditional stylingNow with Template Linerals `` which allows multiple className */}
          <span className={`${style.rating} ${ratingClass}`}>{rating}</span>
      </Rating>
       
      <p className="text-3xl font-bold underline">Summary: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank">
        {/* <button 
        style={btn_style}
        >
          <b>Watch Now</b>
          </button> */}
          <Button rating ={rating}>Watch Now</Button>
      </a>
      </div>
    </li>
  );
};
