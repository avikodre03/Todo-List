import React from 'react'
import './Inputcomp.css';

const Inputcomp = ({ CurrentValue, setCurrentValue,
  currentList, setcurrentList,
  disabled, setDisabled,
  toggleButton, settoggleButton,
  isEditing, setIsEditing
}) => {

  const Addme = () => {
    if (!toggleButton) {
      setcurrentList(currentList.map((ele) => {
        if (ele.id === isEditing) {
          return { ...ele, CurrentValue }
        }
        return ele
      }))
      setCurrentValue("")
      settoggleButton(true)
      setIsEditing(null)
    } else {
      setcurrentList([...currentList, { CurrentValue: CurrentValue, id: Date.now() }])
      setCurrentValue("")
      setDisabled(true)
    }
  }

  return (
    <>
      <h1>Todo-List</h1>
      <div className="inputComp">
        <div className="inputContainer">

          <input type="text" placeholder='Enter data...' value={CurrentValue} onChange={(e) => {
            setCurrentValue(e.target.value)
            if (e.target.value === "") {
              setDisabled(true)
            } else {
              setDisabled(false)
            }
          }} />
        </div>

        <div className="buttonContainer">
          {toggleButton ? <button disabled={disabled} onClick={() => {
            Addme()
          }}>Add</button> : <button onClick={() => {
            Addme()
          }}>Update</button>}

        </div>
      </div>
    </>
  )
}

export default Inputcomp