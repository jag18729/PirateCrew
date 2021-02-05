import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const NewPirate = (props) => {
  const [errors, setErrors] = useState({});
  const [pirate, setPirate] = useState();
  const createPirate = pirate => {
    axios.post('http://localhost:8000/api/pirate/new', pirate)
      .then(res => navigate('/pirates/'))
      .catch(error => {
        console.log(error.response);
        setErrors(error.response.data.errors)
      }
      );
  }
  const cancel = e => {
    navigate("/pirates/:id")
  }
  return (
    <div>
      <h1>Add a pirate</h1>
      <Link to={"/pirates/"}>Crew Board</Link>
      <Form errors={errors} onSubmitProp={createPirate} />
      {/* <button className="btn" onClick={cancel}>Cancel</button> */}
    </div>
  )
}
export default NewPirate;