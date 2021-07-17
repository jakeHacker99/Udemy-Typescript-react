import { useState } from "react"

export const GuestList: React.FC = () => {
      const [name, setName] = useState("")
      const [guest, setGuest] = useState<string[]>([])


       const onClick = () => {
            setName("")
            setGuest([...guest, name])
      }
      
    return (
        <div>
            <h1>Jakob's party</h1>
            <h3>Guest List</h3>
            <ul>
                {guest.map(guest => <li key={guest} > {guest} </li>)}
            </ul>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
            <button onClick={onClick} >Add Guest</button>
            
        </div>
    )
}


export default GuestList