import React, { useState } from 'react'
import Graph from './Graph';

const TakeInput = () => {
    const [takeDate, setTakeDate] = useState("");
    const [takeTimefrom, setTakeTimefrom] = useState(0);
    const [takeTimeto, setTakeTimeto] = useState(0);
    const [display, setDisplay] = useState(false);
    const today = takeDate.split("-")[2];
    var takeDate2 = `${takeDate.slice(0, 7)}-${today - 1}`;
    var takeDate3 = `${takeDate.slice(0, 7)}-${today - 2}`;
    console.log(takeDate, takeDate2, takeDate3);

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", margin: "20px 0px", flexDirection: "column" }}>
            <input type="text" style={{ width: "300px", height: "50px" }} onChange={(e) => setTakeDate(e.target.value)} placeholder="input date like yyyy-mm-date format" />
            <input type="text" style={{ width: "300px", height: "50px" }} onChange={(e) => setTakeTimefrom(e.target.value)} placeholder="From" />
            <input type="text" style={{ width: "300px", height: "50px" }} onChange={(e) => setTakeTimeto(e.target.value)} placeholder="To" />
            <button style={{ width: "200px", backgroundColor: "black", color: "white" }} onClick={() => setDisplay(true)}>Send</button>
            {display && (<Graph t1={takeDate} t2={takeDate2} t3={takeDate3} takeTimefrom={takeTimefrom} takeTimeto={takeTimeto} />)}
        </div>
    )
}

export default TakeInput