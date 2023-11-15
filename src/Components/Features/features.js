import React from 'react';
import './Features.css'
import Card from '../Feature Box/features_div';
import eng from './engaging_interface.png';
import pro from './progress_tracking.png';
import hol from './holistic_phonic_training.png';
import mot from './motor_based.png';
import vis from './visual_auditory_stimulation.png';
import mul from './multimodal_learning.png'
class App extends React.Component {




  render() {
      
      
      return (
          <div>
            <div className='crdgrid'>
                <Card src={eng} name='Engaging Interface' details='Interactive sessions for an immersive learning experience.' />
                <Card src={pro} name='Progress Tracking' details='Track success, analyse and celebrate milestone. ' />
                <Card src={hol} name='Holistic Phonics Training' details='The software covers the sounds of Hindi in isolation and within different words across all word positions.' />
                <Card src={mot} name='Motor-Based Intervention' details='Incorporates both perceptual and production training.'/>
                <Card src={vis} name='Visual, Auditory Stimulation' details='Emphasize the importance of both senses in the learning process for individuals with speech disorders.'/>
                <Card src={mul} name='Multimodal Learning' details='Multimodal approach with visual & cues and 3-Dimensional animations for effective learning.'/>
            </div>

          </div>
      )
  }
}


export default  App;