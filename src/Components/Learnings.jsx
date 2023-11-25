import React, { useState } from 'react';
import Nav from './Nav';
import '../CSS/Learnings.css';
import Footer from './Footer';

// const [wordData, setWordData] = useState(null);

// fetch("http://localhost:5000/generate_word", {
//     method: "GET",
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Error");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         setWordData(data);
//     })
//     .catch(error => {
//         console.error("Problem detected", error);
//     });


const Learnings = (data) => {
    const [wordData, setWordData] = useState(null);
    const [mic, setMic] = useState('Listen');
    const fetchData = () => {
        fetch('http://localhost:5000/generate_word', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                setWordData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Problem detected', error);
            });
    };
    return (

        <>
            <Nav />

            <div className="main">

                <div className="main2">Detection</div>
                <div className="main3">
                    <button onClick={fetchData} style={{position: "absolute", left: "550px", top: "250px", borderRadius:"8px", height:"2.5rem", background:"none", borderColor:"white", color:"white"}}>Generate New Word</button>
                    {wordData ? (
                        <div className="main4">{wordData.word1 ?? 'Test Yourself'}<br />{wordData.pronounciation}</div>
                    ) : (
                        <div className="main4" style={{top:"8rem"}}>Let's test</div>

                    )}
                    <div className="main5">
                        1. Sundae  (093%) <br />
                        2. Sunday  (100%)<br />
                        3. Shunday (002%)<br />
                        4. Shunday (002%)<br />
                        5. Shundae (002%)
                    </div>
                    <div className="main6" >
                                            <svg style={{ position: 'absolute', left: '40', top: '35' }} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" class="bi bi-mic" viewBox="0 0 16 16">
                                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                                            </svg>
                    </div>
                    <div className="main7" onClick={() => setMic('Listening')}>{mic}</div>
                    <div className="main8" style={{top:'20rem', left:"31rem"}}>Average % approved = 40%</div>
                    <div className="main9">Attempts</div>
                </div>


            </div>

            <div class="first-div">Improvisation</div> <br /> <br />
            <div class="second-div">
                <div class="inner-div"></div>
                <div style={{ left: "640px", top: "54px", position: "absolute", width: "40rem" }}>
                    <span class="instructions-span">Instructions to be followed:</span><br />
                    <span class="instructions-span instructions-list">
                        1. <br />
                        2. <br />
                        3. <br />
                        4.
                    </span>
                </div>
            </div> <br /><br /><br />
            <div class="a-div">Personal Assistance</div><br /><br />
            <div class="b-div">
                <div class="c-div" style={{ width: '32rem' }}></div>
                <div class="d-div" style={{ width: '32rem', marginLeft: '-30px' }}></div>
                <div class="e-div">
                    <div class="f-div">
                        <div class="g-div">
                            <div class="h-div">
                                <div class="i-div">
                                    <div class="j-div">
                                        <div class="k-div">
                                            <div class="l-div">
                                                <div class="m-div">
                                                    <img class="n-div" src="https://via.placeholder.com/27x27" />
                                                </div>
                                            </div>
                                            <div class="o-div"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-div"></div>
                        <div class="q-div"></div>
                        <div class="r-div"></div>
                    </div>
                </div>
            </div> <br /> <br />
            <Footer />
        </>
    );
}

export default Learnings;