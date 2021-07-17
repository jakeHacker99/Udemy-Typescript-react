import React from 'react'
import ReactDOM from "react-dom"

import GuestList from "./state/GuestList"
import UserSearch from './state/UserSearch'


function App() {
    return (
        <div>
            {/* <GuestList/> */}
            <UserSearch/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")

)
export default App
