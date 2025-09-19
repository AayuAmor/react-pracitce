import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.module.css";
import { EventHandling } from "./components/Eventhandling";
import { EventProps } from "./components/EventProps";
import {EventPropagation} from "./components/EventPropagation";
import { State } from "./components/hooks/States";

export const App = () => {
  return( <section className="container">
     {/* <h1 className="card-heading">List of Best Netflix Series</h1> 

      <NetflixSeries />; */}
      {/* <EventHandling/> */}
      {/* <EventProps /> */}
      {/* <EventPropagation/> */}
      <State/>
      <SiblingComponent/>

     </section>
    );

};

export function SiblingComponent(){
    console.log("Sibling Component Re-rendered.")
    return(
        <div className="main-div">
            <h2> Sibling Component</h2>
        </div>
    )
};
