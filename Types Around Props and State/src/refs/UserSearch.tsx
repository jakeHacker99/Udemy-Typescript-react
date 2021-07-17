import React, { useEffect, useRef, useState  } from 'react'


 const users = [

    {name: "jake", age: 20},
    {name: "david", age: 20},
    {name: "alex", age: 20},
    {name: "dano", age: 20}


]


const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState("")
    const [user, setUser] = useState<undefined |{name: string, age: number}>()


    useEffect(() => {
        if(!inputRef.current){
            return
        }
        inputRef.current.focus()
    }, [])
    const onclick = () => {
        const foundUser= users.find((user) => {
            return user.name === name;
        } )
        if(foundUser === undefined){
        
            console.log("user not found");
            
        }else{
            console.log(foundUser);
            
            setUser(foundUser)
        }
    }
    return (
        <div>
            <h3>
            User Search
            </h3>

        <input  ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onclick} >find</button>


<div >
{user && user.name.concat(", ") }
{user && user.age}

</div>
            
        </div>
    )
}

export default UserSearch
