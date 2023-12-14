import { useState } from "react"

const DraggableBlock = () => { 
    const [position, setPosition] = useState({x: 120, y: 200});
    
    const downMouseHandler = () => { 
        document.addEventListener('mousemove', (params) => { 
            const posX = params.clientX;
            const posY = params.clientY;
            setPosition({x: posX, y: posY});
        })
    }

    return(
        <div 
            style={{
                position: 'absolute',
                left: position.x + 'px', 
                top: position.y + 'px'
            }}
            className='d-flex border border-2 border-success bg-success bg-opacity-50'
            onMouseDown={downMouseHandler}
        >
            <div className='container text-center'>
                <span>Начало</span>
            </div>
        </div>
    )
}

export default DraggableBlock;