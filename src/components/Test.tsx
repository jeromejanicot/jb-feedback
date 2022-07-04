import React, {useState} from "react";

const ChildComponent = ({elem}) => {
    return (
        <>
            <p>{elem}</p>
        </>
    )
}

const Test = () => {
    const [mock] = useState(["1","2","3","4","5","6"])

   return (
       <>
           <ul>
               {mock.map((elem, index) => {
                   <li key={index}>
                       <ChildComponent elem={elem} />
                   </li>
               })}
           </ul>
       </>
   )
}

export default Test;