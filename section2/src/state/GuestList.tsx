import { useState } from "react"

export const GuestList: React.FC = () => {
      const [name, setName] = useState("")
    return (
        <div>
            <h1>Jakob's party</h1>
            <h3>Guest List</h3>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
            <button>Add Guest</button>
        </div>
    )
}


export default GuestList