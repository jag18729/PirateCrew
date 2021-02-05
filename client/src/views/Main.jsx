import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from '../components/List';
import { navigate, Link } from '@reach/router';

const Main = (props) => {
  const [pirates, setPirates] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/pirates')
      .then(res => {
        setPirates(res.data);
        setLoaded(true);
      });
  }, []);
  const removeFromDom = pirateId => {
    setPirates(pirates.filter(pirate => pirate._id != pirateId));
  }

  return (
    <div>
      <button class="welcome"><Link id="join" to="/pirates/new">Join here!</Link><h1>Ahoy mayte! Join us in finding the next treasure!</h1></button>
      <h3>Our crew:</h3>
      { loaded && <List pirates={pirates} removeFromDom={removeFromDom} setPirates={setPirates} />}
    </div >
  )
}

export default Main;
