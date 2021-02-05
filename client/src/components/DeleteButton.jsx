import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
  const { pirateId, handleClick } = props;
  const deletePirate = e => {
    axios.delete('http://localhost:8000/api/pirate/' + pirateId)
      .then(res => {
        handleClick(pirateId)
      })
  }
  return (
    <button className="btn" onClick={deletePirate}>
      Walk the Plank
    </button>
  )
}
