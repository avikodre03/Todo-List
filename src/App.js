import { useState } from 'react';
import './App.css';

import Inputcomp from './Componentes/Inputcomp';
import ListToShow from './Componentes/ListToShow';


function App() {
 
  const [CurrentValue, setCurrentValue] = useState("")
  const [currentList, setcurrentList] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [isEditing, setIsEditing] = useState(null);
  const [toggleButton, settoggleButton] = useState(true)
  return (
    <>
   
      <div className="App">
        <div className='mainContainer'>

          <Inputcomp
            CurrentValue={CurrentValue} setCurrentValue={setCurrentValue}
            currentList={currentList} setcurrentList={setcurrentList}
            disabled={disabled} setDisabled={setDisabled}
            toggleButton={toggleButton} settoggleButton={settoggleButton}
            isEditing={isEditing} setIsEditing={setIsEditing}
          />

          <ListToShow
            isEditing={isEditing} setIsEditing={setIsEditing}
            CurrentValue={CurrentValue} setCurrentValue={setCurrentValue}
            currentList={currentList} setcurrentList={setcurrentList}
            toggleButton={toggleButton} settoggleButton={settoggleButton} />

        </div>
      </div>
      
    </>
  );
}

export default App;
