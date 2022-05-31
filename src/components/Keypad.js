// Code Keypad Component Here
import React from "react"

function handleChange() {
    return (console.log("Entering password..."))
}

function Keypad() {
    return (
        <input type="password" onChange={handleChange} />
    )
}

export default Keypad