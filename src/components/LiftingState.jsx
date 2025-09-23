import {useState} from "react";
export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
    return(
        <>
        <InputComponent inputValue={inputValue} setInputValue = {setInputValue}/>
        <DisplayComponent inputValue={inputValue}/>
        </>
    )
}

const InputComponent = ({inputValue, setInputValue}) => {
    
    return(
        <>
        <input type="text"
            placeholder="Enter Your Name"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
        />
        </>
    )

}

const DisplayComponent = (props) => {
    return(
        <>
        <p>The current InputValue is:{props.inputValue}</p>
        </>
    )
}
