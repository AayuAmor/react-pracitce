// export const NetflixSeries = () =>{ //This is Named Export

const NetflixSeries = () =>{ // ### This is Default Export
  const name= 'Solo Leveling';
  const rating = '9.5';
  const summary = 'Summary: In a world where gates connect Earth to dangerous dungeons filled with monsters, some humans gain magical powers and are known as Hunters. Among them, Sung Jin-Woo is the weakest E-Rank Hunter, barely surviving low-level missions.One day, during a dungeon raid, Jin-Woo and his team enter a mysterious double dungeon. Most of his team dies, but Jin-Woo sacrifices himself to save the others.\n Instead of dying, he wakes up in a hospital with a unique ability — a mysterious “System” that allows him to level up like a video game character, which is unheard of in his world.\nJin-Woo begins to grow rapidly in strength, going from the weakest to the most powerful S-Rank Hunter — and eventually becomes something more than human. Along the way, he uncovers secrets about the System, the Monarchs, the Rulers, and the real purpose behind the gates and monsters.'
  let age = 21; // Example age, can be changed to test the condition
  const returnGenre = () => {
    const genre="Adventure, Action-Drama";
   return genre;
  }

  const watch = ()=>{
    if(age >= 18) {
      return "Watch Now";
    } 
    else {
      return "Not Available";
    }
  }
  
  return(
  <>
    <div>
    <img src="image.png" alt="image.png" width="40%" height="40%" />
    <h2>Name: {name} </h2>
    <h3>Rating: {rating} </h3>
    <p>Summary: {summary} </p>
    <p>Genre: {returnGenre()} </p> {/* //This is the Example of Calling Function */}
    <button>{watch()}</button> {/* returning value using function */}
    </div>
  </>
  );
};

// // ########## Overall below called Mixed Export ###########

// export default NetflixSeries; // #### This is default export.

// export const Header = ()=>{
//   return(
//     <>
//     <p>copyright @AayushDada</p>
//     </>
//   );
// }
// export const Footer = ()=>{
//   return(
//     <>
//     <p>copyright @AayushDada</p>
//     </>
//   );
// }


