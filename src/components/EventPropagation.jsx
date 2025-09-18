import "./EV.css";
export const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("Grand Parent Clicked. !!");
    }

    const handleParentClick = (e) => { 
        //we must accept the event object as parameter thats why need to pass the parameter to use 
        // .stopPropagation() method - so naming parameter "e" or "event" makes it more readable
        console.log("Parent Clicked !!.");
        // e.stopPropagation();
    }

    const handleChildrenClick = (event) => {
        // event.stopPropagation();
        console.log(event);
        console.log("Child Clicked");
    }

    return(
        <>
        <section className="main-div" >
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildrenClick}>
                        Click Me !!
                    </button>
                </div>
            </div>
        </section>
        </>
    );

}