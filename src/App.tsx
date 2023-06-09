import React, {useState} from 'react';
import Letter from "./Letter";
import Egg from "./Egg";

function App() {
    const [state, setState] = useState(false)
    const [egg, setEgg] = useState(false)

    return (
        <div className="Button-Area">
            <h1>
                편지함
            </h1>
            <hr/>
            <img src="https://ih1.redbubble.net/image.917405095.0717/st,small,507x507-pad,600x600,f8f8f8.jpg"
                 width="100px"
                 alt="누굴까"
                 onClick={() => setState(!state)}/>
            <Letter state={state}/>
            <button className="inv" style={{border: "none"}} onClick={() => setEgg(!egg)}>
                <Egg state={egg}/>
            </button>
        </div>

    )
}

export default App