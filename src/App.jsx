import "./components/Netflix.module.css";
import { ToogleSwitch } from "./components/Projects/ToogleSwitch/ToogleSwitch";
// import { LiftingState } from "./components/LiftingState";

export const App = () => {
  return( 
    <section className="container">

      {/* <LiftingState/> */}
      <ToogleSwitch/>

    </section>
  );

};
