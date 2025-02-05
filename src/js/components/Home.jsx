import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-container">
            {/* Title inside the container */}
            <h1 className="counter-title">Simple React Counter</h1>
            <SecondsCounter seconds={seconds} />
            
            {/* Reset Button */}
            <button className="btn btn-danger reset-btn" onClick={() => setSeconds(0)}>
                Reset
            </button>
        </div>
    );
};

export default Home;
