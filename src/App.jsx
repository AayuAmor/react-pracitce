import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.module.css";

export const App = () => {
  return( <section className="container">
    <h1 className="card-heading">List of Best Netflix Series</h1>
  <NetflixSeries />;
  </section>
   );
};
