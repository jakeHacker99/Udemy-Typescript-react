import React, { Component } from 'react'


interface User {
    name: string,
    age: number 

}

interface UserSearchProps{
    users: User[] 

}

interface UserSearchState{
    name: string,
    user: User |undefined
}


 class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: "",
        user: undefined
    };

      onClick = () =>   {
        const founderUser = this.props.users.find((user) => {
            return user.name === this.state.name
        })
        this.setState({user: founderUser})
        
    }
    
    
    

    render() {
        const {name, user} = this.state
        return (
            <div>
                <h3>
                User Search
                </h3>
            <input value={name} onChange={e => this.setState({name: e.target
            .value})} />
            <button onClick={this.onClick} >find</button>
    <div >
    {user && name.concat(", ") }
    {user && user.age}
    
    </div>
                
            </div>
        )
        
    }
}
export default UserSearch
