import { useState } from "react"

const DraggableBlock = () => { 
    const [position, setPosition] = useState({x: 0, y: 0});
    
    const mouseMove = (event) => setPosition({x: event.clientX, y: event.clientY})

    const downMouseHandler = () => {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener("mouseup", outMouseHandler);
    }

    const outMouseHandler = () => { 
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', outMouseHandler);
    }

    return(
        <div 
            style={{
                position: 'absolute',
                left: position.x + 'px', 
                top: position.y + 'px',
                cursor: 'move'
            }}
            className='d-flex border rounded-3 p-2 border-2 border-success bg-success bg-opacity-25'
            onMouseDown={downMouseHandler}
            onMouseOut={outMouseHandler}
        >
            <div className='container text-center'>
                <span className="text-success">Начало</span>
            </div>
        </div>
    )
}

export default DraggableBlock;