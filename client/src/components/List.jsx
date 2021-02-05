import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
  const { removeFromDom } = props;
  // const removeFromDom = (pirateId) => {
  //   axios.delete('http://localhost:8000/api/author/' + authorId)
  //     .then(res => {
  //       removeFromDom(authorId)
  //     })
  // }
  return (
    <div>
      {props.pirates.map((pirate, idx) => {
        return (
          <div key={idx}>
            <h1>{pirate.name}</h1>
            <div>
              <img src={pirate.imageUrl} alt="Picture of a pirate" />
              <h1>{pirate.phrase}</h1>
            </div>
            <div class="bottombtn">
              <button className="btn" ><Link to={"/pirate/" + pirate._id}>
                View Pirate </Link></button>
              <DeleteButton pirateId={pirate._id} handleClick={removeFromDom} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
