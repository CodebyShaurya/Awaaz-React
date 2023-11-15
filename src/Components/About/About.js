import './about.css';
import arti from './articlualtion_mastery.png';
import perspn from './personalised_weekly_assesment.png';
import mouth from './mouth_model.png';
import real from './realistic_speech_modelling.png';
import virtl from './virtual_env.png'
import speech from './speech_detection_weekly_analysis.png'

const About = () => {
    return (
        <div>
        <div className='about1'>
            <div className='about1txt'>
                <h1>Real-Time Speech Detection and Weekly Test Analysis.</h1>
                <p>Unlock the potential of your voice through cutting-edge technology. Our platform not only hears your words but guides you towards  eloquence with precision.</p>
                <div className='grid'>
                    <img className='crdimg margin1' src={arti} />
                    <div className='inside_1txt'>
                        <h2 >Articulation Mastery</h2>
                        <ul>
                            <li>Receive instant feedback on pronunciation accuracy.</li>
                            <li>Target and refine specific areas for improvement.</li>
                        </ul>
                    </div>
                </div>
                <div className='grid'>
                    <img className='crdimg margin1' src={perspn}/>
                    <div className='inside_1txt'>
                        <h2 >Personalized Weekly Assessments</h2>
                        <ul>
                            <li>Engage in tailored weekly tests for focused enhancement.</li>
                            <li>Monitor your progress and tailor interventions strategically.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={speech} style={{height: "400px",padding:'2rem'}}/>

        </div>



        <div className='about1'>
            
        <img src={mouth} style={{height: "400px",padding:'2rem'}}/>
            <div className='about1txt'>
                <h1>Dynamic 3-Dimensional Representation</h1>
                <p>A 3-dimensional model provides a virtual representation of the articulatory structures involved in speech production with oral cavity.</p>
                <div className='grid'>
                    <img className='crdimg margin1' src={real}/>
                    <div className='inside_1txt'>
                        <h2 >Realistic-Speech Modelling</h2>
                        <p>
                        As users engage with the software, they can see these articulators move and interact in real-time,offering a detailed and realistic view of the speech.
                        </p>
                    </div>
                </div>
                <div className='grid'>
                    <img className='crdimg margin1' src={virtl}/>
                    <div className='inside_1txt'>
                        <h2>Virtual Enviroment For Speech Exercise</h2>
                        <p>
                        The 3D model exists in a virtual environment, allowing users to explore and manipulate it as they engage in speech exercises.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default About;