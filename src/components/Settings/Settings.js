import './settings.css';
import React from 'react';
import Heir from '../Heir/Heir';
import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

export default function Settings() {

  const [heirId, setHeirId] = useState(1);
  const [heirsCollection, updateHeirsCollection] = useState([0]);

  function addHeirHandler() {
    updateHeirsCollection(prevHeirs => ([
      ...prevHeirs,
      heirId
    ]));
    setHeirId(heirId + 1);
  }

  function removeHeirHandler(toRemove) {
    if(heirsCollection.length > 1) {
      updateHeirsCollection(prevHeirs => prevHeirs.filter(heir => heir !== toRemove));
    }
  }

  function setHeirsData() {
    console.log('caca adoso :D');
  }
  
  return(
    <div className='settings'>
      <div id='alignedContent' className='announcement'>
        <h3>
          ciao, sono Armando e prima di venir cullato dolcemente 
          tra le braccia candide dell'angelo della Morte decido 
          come spartire la mia eredit&agrave; tra quegli sfigati
          dei miei eredi
        </h3>
      </div>
      <hr/>
      <div id='alignedContent' className='addHeir'>
        <h4 id='contentMargin'>
          inserisci i DID degli eredi tra cui spartire l'eredit&agrave;, 
          i loro address e l'ammontare corrispondente:
        </h4>
        <div id='contentPadding' onClick={() => { addHeirHandler() }}>
          <RiAddCircleFill/>
        </div>
        <div>
          <div id='confirmButtonContainer' onClick={() => { setHeirsData() }}>
            <h5 id='confirmText'>CONFERMA</h5>
          </div>
        </div>
      </div>
      <div>
        {
          heirsCollection.map((heirId) => (
            <Heir key={heirId} index={heirId} remove={removeHeirHandler}/>
          ))
        }
      </div>
    </div>
  );
}