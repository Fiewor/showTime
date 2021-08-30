import React, {useState} from 'react'

function App(){
    const currentTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(currentTime)

    function showTime(){
        const updatedTime = new Date().toLocaleTimeString()
        setTime(updatedTime)
    }

    setInterval(showTime, 1000)

    return(
        <div class="container">
            <h1>{time}</h1>
            <button onClick={showTime}>Get Time</button>
        </div>
    )
}

export default App