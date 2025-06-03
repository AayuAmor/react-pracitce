React does not render `false`, `null`, `undefined`, or `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions:

-**`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of expression, it will appear in your UI.
-**Empty strings** (`""`) are also considered valid and are rendered as well.

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

   {/* <button >{age>= 18 ? "Watch Now" : "Not Available"}</button> //////// Ternary Operator Example */}
    {/* <button>{canWatch}</button> */}  {/* returning valure using variable  */}