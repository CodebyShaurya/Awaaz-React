import React from 'react';
import Nav from './Nav';
import '../CSS/Learnings.css';
import Footer from './Footer';
import teeth from '../Assets/image 31.png'
import assistance from '../Assets/Component 31.png'


class Learnings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            mic: 'OFF',
            listen: 'Listen',
            wordData: null,
            output: null

        }
    }


    fetchVoice = () => {
        this.setState({ record: true });
        this.setState({ listen: 'Listening' })
        console.log('try')
        fetch('http://localhost:5000/record', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    this.setState({ record: false });
                    this.setState({ listen: 'Listen' })
                    throw new Error('Error');
                }

                return response.json();
            })
            .then(data => {
                this.setState({ output: data });
                this.setState({ record: false });
                this.setState({ listen: 'Listen' })
                console.log(data);
            })
            .catch(error => {
                console.error('Problem detected', error);
            });

        console.log('try2')
    }

    fetchData = () => {
        fetch('http://localhost:5000/generate_word', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    console.log('hi');
                    throw new Error('Error');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ wordData: data });
                console.log(data);
            })
            .catch(error => {
                console.error('Problem detected', error);
            });
    }

    render() {
        return (
            <>
                <Nav />
                {/* 
            <div className="main">

                <div className="main2">Detection</div>
                <div className="main3">
                    <button onClick={this.fetchData} style={{ position: "absolute", left: "550px", top: "250px", borderRadius: "8px", height: "2.5rem", background: "none", borderColor: "white", color: "white" }}>Generate New Word</button>
                    {this.state.wordData ? (
                        <div className="main4">{<div>{this.state.wordData.word1}</div>?? 'Test Yourself'}/{this.state.wordData.pronunciation}/</div>
                    ) : (
                        <div className="main4" style={{ top: "8rem" }}>Let's test</div>

                    )}
                    <div className="main5">
                        <br />
                        <br />
                        {this.state.output ?this.state.output.word1: 'What you speak will apear here'}<br />
                        
                    </div>
                    <div className="main6" style={{ borderColor: this.state.record === true ? 'red' : 'white', borderWidth:'10px' }}>
                        <svg style={{ position: 'absolute', left: '40', top: '35' }} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" class="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                        </svg>
                    </div>
                    <div className="main7" onClick={this.fetchVoice}>{this.state.listen}</div>
                    <div className="main8" style={{ top: '20rem', left: "31rem" }}>Average % approved = 40%</div>
                    <div className="main9">Your output: </div>
                </div>


            </div>

            <div class="first-div">Improvisation</div> <br /> <br />
            <div class="second-div">
                <div class="inner-div"></div>
                <div style={{ left: "640px", top: "54px", position: "absolute", width: "40rem" }}>
                    <p class="instructions-span">Instructions to be followed:</span><br />
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
            </div> <br /> <br /> */}
                {/* <Footer /> */}
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ backgroundImage: "linear-gradient(to right,#CE4DA4,#7353E5)", WebkitBackgroundClip: "text", color: "transparent", fontSize: "40px", fontWeight: "bold" }}>Empower your voice each day, and <br /> watch speech disorders fade away.</p>
                </div>

                <div className='detection' style={{ marginLeft: "15%" }}>
                    <p style={{ fontSize: "30px", fontWeight: "bold", textDecoration: "underline", color: "white" }}>Detection</p>
                    <div style={{ backgroundColor: '#13111A', width: '90%', boxShadow: "0px  9px 8px 1px #CE4DA4, 0px 6px 20px 10px #7353E5", borderRadius: '10px', height: 'fit-content', padding: '20px' }}>
                        {this.state.wordData ? (
                            <div style={{color:'white', textAlign:'center', fontSize:'40px'}}>{<div>{this.state.wordData.word1}</div> ?? 'Test Yourself'}/{this.state.wordData.pronunciation}/</div>
                        ) : (
                            <div style={{ textAlign: 'center', color: 'white', fontSize: '30px', paddingTop: '2%' }}>Let's test</div>
                        )}
                        <button onClick={this.fetchData} style={{ marginLeft: '42%', marginTop: '1%', borderRadius: '8px', fontSize: '20px' }}>Generate New Word</button>
                        <p style={{ textAlign: 'center', color: 'white', fontSize: '22px', paddingTop: '2%', textDecoration: 'underline', letterSpacing: '2px', textUnderlineOffset: '7px' }}>PRESS THE MIC AND START PRONOUNCING THE GIVEN WORD FOR DETECTION</p>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                            <div>
                                <div style={{ textAlign: 'center', marginTop: '3%', borderRadius: '50%', width: 'fit-content', padding: '15px', border: 'white 4px solid' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" class="bi bi-mic" viewBox="0 0 16 16">
                                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                                    </svg>
                                </div>
                                <div>
                                    {/* {this.state.output ? this.state.output.word1 : 'What you speak will apear here'}<br /> */}
                                </div>
                                <div onClick={this.fetchVoice} style={{ textAlign: 'center', marginTop: '12%', color: 'white', fontSize: '30px', letterSpacing: '3px', marginLeft: '1%' }}>{this.state.listen}</div>
                            </div>                            
                        </div>
                        <div style={{ marginTop: '3%' }}>
                            <p style={{ color: 'white', fontSize: '22px', letterSpacing: '2px', textDecoration: 'underline', textAlign: 'center', textUnderlineOffset: '7px' }}>ANALYSIS</p>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}><p style={{ color: 'white', fontSize: '20px' }}>1. Sundae ={`>`} 93%</p><p style={{ color: 'white', fontSize: '20px' }}>2. Sunday ={`>`} 100%</p><p style={{ color: 'white', fontSize: '20px' }}>3. Shunday ={`>`} 2%</p></div>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}><p style={{ color: 'white', fontSize: '20px' }}>4. Shunday ={`>`} 2%</p><p style={{ color: 'white', fontSize: '20px' }}>5. Shunday ={`>`} 2%</p><p style={{ color: 'white', fontSize: '20px' }}>6. Shundae ={`>`} 2%</p></div>
                        </div>
                        {/* <div>Average % approved = 40%</div>
                        <div>Your output: </div> */}
                    </div>
                </div>

                <div className='improvization' style={{ marginLeft: "15%", marginTop: "10%", marginBottom: "10%" }}>
                    <p style={{ fontSize: "30px", fontWeight: "bold", textDecoration: "underline", color: "white" }}>Improvization</p>
                    <div style={{ backgroundColor: '#13111A', width: '90%', boxShadow: "0px  9px 8px 1px #CE4DA4, 0px 6px 20px 10px #7353E5", borderRadius: '10px', height: '600px' }}>
                        <div style={{ padding: '3%', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '80%', gap: '5%' }}>
                                <div style={{ display: 'flex', backgroundColor: 'gray', border: '5px solid black', borderRadius: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={teeth} alt='teeth' height='90%' style={{ padding: '1%' }} />
                                </div>
                                <div  className='instructions' style={{ backgroundColor: '#312c42', border: '5px solid black', borderRadius: '10px', padding: '1%', overflowY: 'scroll'}}>
                                    <h1 style={{ textDecoration: 'underline', color: 'white' }}>Instructions</h1>
                                    <div style={{color:'white', lineHeight:'200%'}}>
                                        The S can actually be made two different ways: one with the tongue tip pointing up, and one with it pointing down. I make the S with the tongue tip pointing down. Sss. Notice how the corners of my lips are either relaxed, ss, or pull out, ss. This is different from SH, shhh, where the corners come in and the lips flare. Let’s compare some photos to look at the tongue position.
                                        The S can actually be made two different ways: one with the tongue tip pointing up, and one with it pointing down. I make the S with the tongue tip pointing down. Sss. Notice how the corners of my lips are either relaxed, ss, or pull out, ss. This is different from SH, shhh, where the corners come in and the lips flare. Let’s compare some photos to look at the tongue position.
                                        The S can actually be made two different ways: one with the tongue tip pointing up, and one with it pointing down. I make the S with the tongue tip pointing down. Sss. Notice how the corners of my lips are either relaxed, ss, or pull out, ss. This is different from SH, shhh, where the corners come in and the lips flare. Let’s compare some photos to look at the tongue position.
                                        The S can actually be made two different ways: one with the tongue tip pointing up, and one with it pointing down. I make the S with the tongue tip pointing down. Sss. Notice how the corners of my lips are either relaxed, ss, or pull out, ss. This is different from SH, shhh, where the corners come in and the lips flare. Let’s compare some photos to look at the tongue position.
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: '20%', textAlign: 'center' }}>
                                <p style={{ color: 'white', fontSize: '30px' }}>Done with it? Let’s head to detection again to test you. </p>
                                <button style={{ fontSize: '20px', borderRadius: '5px', fontWeight: 'bold' }}>Detection</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='personal_assistance' style={{ marginLeft: "15%", marginTop: "10%", marginBottom: "10%" }}>
                    <p style={{ fontSize: "30px", fontWeight: "bold", textDecoration: "underline", color: "white" }}>Personal Assistance</p>
                    <div style={{ backgroundColor: '#13111A', width: '90%', boxShadow: "0px  9px 8px 1px #CE4DA4, 0px 6px 20px 10px #7353E5", borderRadius: '10px', height: 'fit-content', padding:'20px' }}>
                        <img src={assistance} alt='assistance' height='100%' width='100%'/>
                    </div>
                </div>

            </>
        );
    }
}





export default Learnings;