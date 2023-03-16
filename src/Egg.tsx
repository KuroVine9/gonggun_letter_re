import React from 'react'

function Egg(prop: { state: boolean }) {
    return prop.state ? (
            <img src="https://pbs.twimg.com/media/FrVXX36aEAEb1mX?format=jpg&name=medium" alt="?"/>
        )
        : (<div></div>)
}

export default Egg