export const EventProps = () => {
     
    const handleOnClick = (userName) =>{
            console.log(`Hay ${userName}, Welcome`);
        };
    const handleHover =(userName)=> {
        console.log(`Thanks For Hover me ${userName}`);
    }



    return(
    <>
        <WelcomeUser
            onClick = {()=> handleOnClick("Aayush")} 
            onMouseEnter = {() => handleHover("Aayush")}
        />
    </>
    );
}

const WelcomeUser = (props) => {
    const handleNewClick = () => {
        console.log(`Hello Bro, You Clicked Me For More..`)
        props.onClick();
    }

    return(
        <>
            <button onClick= {() => props.onClick()}>Click Me!!</button>
            <button onMouseEnter={() => props.onMouseEnter()}>Hover Me!!!</button>
            <button onClick={()=>handleNewClick()}>Click Me For More !!</button>
        </>
    )
}