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
            onButtonClick = {()=> handleOnClick("Aayush")} // parent props can be named whatever  
            onHover = {() => handleHover("Aayush")}
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
            <button onClick= {() => props.onButtonClick()}>Click Me!!</button>
            <button onMouseEnter={() => props.onHover()}>Hover Me!!!</button>
            <button onClick={()=>handleNewClick()}>Click Me For More !!</button>
        </>
    )
}