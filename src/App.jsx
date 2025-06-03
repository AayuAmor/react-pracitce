// import { Fragment } from "react";
// export const App = () => {
//   return(   
//  <Fragment>
//  <Beta/>
//   <Beta/>
//   <Beta/>
//   <Beta/>
//  </Fragment>
  
 

//   );
// };
export const App = () =>{
  return(
    <>
    
    <Beta/>
    <Beta/>
    <Beta/>
    <Beta/>
    <Beta/>
    </>
  ) 
}
const Beta = () =>{
  const name= 'Solo Leveling';
  const rating = '9.5';
  const summary = 'Summary: In a world where gates connect Earth to dangerous dungeons filled with monsters, some humans gain magical powers and are known as Hunters. Among them, Sung Jin-Woo is the weakest E-Rank Hunter, barely surviving low-level missions.One day, during a dungeon raid, Jin-Woo and his team enter a mysterious double dungeon. Most of his team dies, but Jin-Woo sacrifices himself to save the others.\n Instead of dying, he wakes up in a hospital with a unique ability — a mysterious “System” that allows him to level up like a video game character, which is unheard of in his world.\nJin-Woo begins to grow rapidly in strength, going from the weakest to the most powerful S-Rank Hunter — and eventually becomes something more than human. Along the way, he uncovers secrets about the System, the Monarchs, the Rulers, and the real purpose behind the gates and monsters.'
  let age = 21; // Example age, can be changed to test the condition
  const returnGenre = () => {
    const genre="Adventure, Action-Drama";
   return genre;
  }
// ################### Example of using a function to return a value ##########################
  // if (age < 18) {
  //   return (
  //     <>
  //   <div>
  //   <img src="image.png" alt="image.png" width="40%" height="40%" />
  //   <h2>Name: {name} </h2>
  //   <h3>Rating: {rating} </h3>
  //   <p>Summary: {summary} </p>
  //   <p>Genre: {returnGenre()} </p> {/* //This is the Example of Calling Function */}
  //   <button >Not Available</button>
  //   </div>
  // </>
  //   );
  // }


  // ################### Example of using a variable to return a value ##########################
  // Example of conditional rendering using a variable:
  // Set canWatch to "Watch Now" if age is 18 or above, otherwise "Not Available"
  // let canWatch = "Not Available";
  // if(age>=18) canWatch="Watch Now";


  // #################### Example of using a function to return a value ##########################
  // Example of conditional rendering using a function:
  // This function returns "Watch Now" if age is 18 or above, otherwise "Not Available"
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
    {/* <button >{age>= 18 ? "Watch Now" : "Not Available"}</button> //////// Ternary Operator Example */}
    {/* <button>{canWatch}</button> */}  {/* returning valure using variable  */}
    <button>{watch()}</button> {/* returning value using function */}
    </div>
  </>
  );
};



