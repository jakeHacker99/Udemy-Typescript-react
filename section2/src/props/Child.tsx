import React from 'react'


interface ChildProps{
    color: string;

}


const Child = ({color}: ChildProps) => {
    return (
        <div>
           Hi There! 
           <h2> {color} </h2>
        </div>
    )
}
export const  Child2: React.FC<ChildProps> = ({color}) =>{
    return <div>{color}</div>
}
Child2.displayName



export default Child
