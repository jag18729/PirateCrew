import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
export default props => {
  const { pirate, onSubmitProp, errors } = props;
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [number, setNumber] = useState('');
  const [phrase, setPhrase] = useState('');

  const [pegLeg, setPegLeg] = useState(true);
  const [eyepatch, setEyePatch] = useState(true);
  const [hookhand, setHookHand] = useState(true);

  const positions = [
    'First Mate',
    'Quarter Master',
    'Boatswain',
    'Powder Monkey'
  ];
  const [position, setSelectedPosition] = useState(positions[0]);
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ name, imageUrl, number, phrase, position, pegLeg, eyepatch, hookhand })
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {/* {errors.map((err, index) => <h2 key={index}>{err}</h2>)} */}
        {errors.name && <h1>{errors.name.message}</h1>}
        <p>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </p>
        {errors.imageUrl && <h1>{errors.imageUrl.message}</h1>}
        <p>
          <label>Image Url:</label>
          <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        </p>
        {errors.number && <h1>{errors.number.message}</h1>}
        <p>
          <label># of Treasure Chests:</label>
          <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        </p>
        {errors.phrase && <h1>{errors.phrase.message}</h1>}
        <p>
          <label>Pirate Catch Phrases:</label>
          <input type="text" value={phrase} onChange={e => setPhrase(e.target.value)} />
        </p>
        {errors.position && <h1>{errors.position.message}</h1>}
        <label >Crew Position: </label>
        <select value={position} onChange={e => setSelectedPosition(e.target.value)}>
          {positions.map((position, idx) => (
            <option key={idx} value={position}>{position}</option>
          ))}
        </select>
        <ul></ul>
        <li>Peg Leg: <input
          type="checkbox"
          checked={pegLeg}
          onChange={e => setPegLeg(e.target.checked)}></input>
        </li>
        <li>Eye Patch: <input
          type="checkbox"
          checked={eyepatch}
          onChange={e => setEyePatch(e.target.checked)}></input>
        </li>
        <li>Hook Hand: <input
          type="checkbox"
          checked={hookhand}
          onChange={e => setHookHand(e.target.checked)}></input>
        </li>
        <input className="btn" type="submit" />
        <button className="btn" ><Link to={"/pirates"}>
          Cancel </Link></button>
      </form >
    </div >
  )
}