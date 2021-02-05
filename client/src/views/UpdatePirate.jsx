import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
export default props => {
  const { id } = props;
  const [errors, setErrors] = useState([]);
  const [pirate, setPirate] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/pirate/' + id)
      .then(res => {
        setPirate(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, [])
  const updatePirate = pirate => {
    axios.put('http://localhost:8000/api/pirate/' + id, pirate)
      .then(res => navigate('/pirates/'))
      .catch(error => {
        console.log(error.response);
        setErrors(error.response.data.errors)
      }
      );
  }
  const handleDelete = (pirateId) => {
    navigate("/pirates/");
  }
  return (
    <div>
      <h1> Update pirate</h1>
      {loaded && (
        <>
          <Form pirate={pirate}
            onSubmitProp={updatePirate}
            initialName={pirate.name}
            errors={errors}
          />
          <DeleteButton pirateId={pirate._id} handleClick={handleDelete} />
        </>
      )
      }
    </div >
  )
}