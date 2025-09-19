import {useState} from "react";

export const State = () => {
    // let value = 0;
    // const handleClickIncrement= () => {
    //     value +=1;
    //     console.log(value)
    // }
    
    const [value, setValue] = useState(0);

    const handleClickIncrement = () => {
        setValue(() => value+1 );
    }

    return(
    <>
       <section className="main-div">
            <h1>{value}</h1>
            <button onClick={() =>handleClickIncrement()}>Click Me!!!</button>
       </section>
    </>
    );
}