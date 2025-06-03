export const Practice = () => {
    // return <h1>Interview</h1>
    const student=[1,2,3,4];
    console.log(Boolean(student.length))
    console.log(student.length)
    return(
    <>
       {/* 1st method */}
       {/* <p> {student.length===0 && "No one is Presesnt"}</p> */}
       {/* 2nd Method */}
       {/* <p>{!student.length && "No students Found"}</p> */}
       {/* 3rd Method */}
       <p>{Boolean(!student.length) && "No Students Found"}</p>
       <p>Number of Students: {student.length}</p>
        
    </>
    ); 
}