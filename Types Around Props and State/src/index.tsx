import React from 'react'
import ReactDOM from "react-dom"
import EventsComponents from './events/EventsComponents'

import GuestList from "./state/GuestList"
import UserSearch from './state/UserSearch'


function App() {
    return (
        <div>
            {/* <GuestList/> */}
            {/* <UserSearch/> */}
            <EventsComponents/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")

)
export default App
