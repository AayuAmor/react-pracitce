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

    ############################################## Export and Import  ##########################################################


    #################################################        NetFlix.jsx      ###########################################################

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


################################## App.jsx ###############################
import NetflixSeries, { Footer, Header} from "./components/NetflixSeries"; // ### This is Mixed Import

// import  { NetflixSeries} from "./components/NetflixSeries"; // ### This is Named Import

// import NetflixSeries from "./components/NetflixSeries"; ##### This was Default Import


export const App = () =>{
    return(
        <>
        {/* <Header/> */}
        <NetflixSeries/>
        <NetflixSeries/>
        <NetflixSeries/>
        <NetflixSeries/>
        <NetflixSeries/>
        {/* <Footer/> */}
        </>
    );


}

############################################# Leture Props ############################################

## 🧠 React Props – Quick Summary

- `props` are used to pass data from a **parent component** to a **child component**.
- In our project:
  - `<SeriesCard />` receives data using `props.curElem`.
  - `seriesData.map()` is used to loop through the list.
  - Each child gets its own data object via `props`.

### ✅ Benefits:
- Reusable component (`SeriesCard`)
- Clean, modular structure
- Makes dynamic rendering easy

### 📌 Key Takeaways:
- Always pass `key={uniqueId}` while mapping
- Use `props` to access and display data
- Components become more dynamic and scalable

### 🔁 Syntax Recap:

```jsx
<ChildComponent someProp={value} />

// In child
const ChildComponent = (props) => {
  console.log(props.someProp);
}


