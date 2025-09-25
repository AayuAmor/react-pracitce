import { useState } from "react";
import "./ToogleSwitch.css"

export const ToogleSwitch = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleBGColor = {backgroundColor : isOn ? "#09b22dff" : "#931414ff"};
    const checkIsOn =  isOn ? "on" : "off" ;

    const handleToggleSwitch = () => {
        setIsOn(()=>!isOn);
    }

    return(
        <>
        <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
        >
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
        </>
    )
}