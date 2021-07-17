import React from 'react'


interface ChildProps{
    color: string;
    onClick: () => void;

}


const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>

           <h2> {color} </h2>
           <button onClick={onClick} >Click me</button>
        </div>
    )
}
export const  Child2: React.FC<ChildProps> = ({color, onClick}) =>{
    return (
        <div>

           <h2> {color} </h2>
           <button onClick={onClick} >Click me</button>
        </div>
    )     
}




export default Child
