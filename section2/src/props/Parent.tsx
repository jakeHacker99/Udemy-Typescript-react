import React from 'react'
import   Child, {Child2}  from "./Child"

const Parent = () => {
    return (
        <div>
        <Child  color="purple"  onClick={() => console.log("clicked")} >
            124
        </Child>
        <div>


        <Child2  color="purple"  onClick={() => console.log("clicked")} >
            124
        </Child2>
        </div>
        </div>
    )
}
export default Parent
