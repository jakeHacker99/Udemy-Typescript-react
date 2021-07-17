import { EFAULT } from 'constants'
import React from 'react'

const EventsComponents: React.FC = () => {
     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         console.log(event);
    }
    
    const onDragStart = (event: React.DragEvent<HTMLDivElement>  ) => {
    console.log(event);
        
    }
    
    return (
        <div>
            <h3>Event Component</h3>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag me!</div>
            
        </div>
    )
}

export default EventsComponents
