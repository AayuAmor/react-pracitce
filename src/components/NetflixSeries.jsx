// File: NetflixSeries.jsx
// ✅ This is the parent component that maps through seriesData
// ✅ It passes each series object as a prop to <SeriesCard />

import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => (
        // ✅ Passing props to SeriesCard, and using unique key
        <SeriesCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};
