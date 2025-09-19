import {useState} from "react";
// export const Try = () =>{
//     const user = [
//         {name: "Alice", age:25},
//         {name: "Bob", age:30},
//         {name: "Charlie", age:35},
//         {name: "Angle", age:40},
//     ]
    

    
// }

export const driveState=() => {

    const [user, setValue] = useState(
        [
        {name: "Alice", age:25},
        {name: "Bob", age:30},
        {name: "Charlie", age:35},
        {name: "Angle", age:40},
    ]
    );

    return(
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {
                    user.map((curnElm, index) => {
                        return(
                            <li key = {index}>
                                {curnElm.name} - {curnElm.age} Years Old
                            </li>
                        )
                    }
                )
                }
            </ul>
        </div>
    );
};