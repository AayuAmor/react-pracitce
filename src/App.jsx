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