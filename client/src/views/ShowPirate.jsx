import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
  const [pirate, setPirate] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/pirate/" + props.id)
      .then(res => setPirate(res.data))
  }, [])
  return (
    <div>
      <h1>{pirate.name}</h1>
      <div>
        <img src={pirate.imageUrl} alt="Picture of a pirate" />
        <h1>{pirate.phrase}</h1>
      </div>
      <h2>About</h2>
      <h3>Position: {pirate.position}</h3>
      <h3>Treasures: {pirate.number}</h3>
      <h3>PegLeg: {pirate.pegleg ? 'Yes' : "No"}</h3>
      <h3>Eye Patch: {pirate.eyepatch ? 'Yes' : "No"}</h3>
      <h3>Hook Hand: {pirate.hookhand ? 'Yes' : "No"}</h3>
      <Link to={"/pirate/" + pirate._id + "/edit"}>
        Edit
      </Link>
    </div>
  )
}
