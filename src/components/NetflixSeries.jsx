import seriesData from "../api/seriesData.json"
export const NetflixSeries = () =>{ 
  return(
  <>
    <ul>
      {seriesData.map((curElem)=>{
         return(
         <li key={curElem.id}>
      <div>
    <img src={curElem.img_url} 
     width="40%" 
     height="40%" />
    </div>
    <h2>Name: {curElem.name} </h2>
    <h3>Rating: {curElem.rating} </h3>
    <p>Summary: {curElem.description} </p>
    <p>Cast: {curElem.cast} </p> 
    <p>Genre: {curElem.genre} </p> 
    <a href={curElem.watch_url} target="_blank">
    <button>Watch Now</button> 
    </a>
    </li>
     );
      })}
    
    </ul>
    
  </>
  );
};




