import React from 'react'
import   Child, {Child2}  from "./Child"

const Parent = () => {
    return (
        <div>
        {/* <Child  color="purple"  onClick={() => console.log("clicked")} >
            124
        </Child> */}


        <Child2  color="purple"  onClick={() => console.log("clicked")} >
        </Child2>
        </div>
    )
}
export default Parent
