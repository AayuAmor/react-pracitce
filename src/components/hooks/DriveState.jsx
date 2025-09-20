import {useState} from "react";

export const DriveState=() => {

    const [user, setValue] = useState(
        [
        {name: "Alice", age:25},
        {name: "Bob", age:30},
        {name: "Charlie", age:35},
        {name: "Angle", age:40},
    ]
    );

    const userCount = user.length;//derived state variable
    const avgAge = user.reduce((accum, curnElm) => accum + curnElm.age, 0)/userCount

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
            <p>Total Users: {userCount}</p>
            <p>Average Age: {avgAge}</p>
        </div>
    );
};