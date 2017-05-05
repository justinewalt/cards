import React from 'react';

let state = true;

const toggleCard = () => {
    setState = { <span>{first_name}</span> }
  
}

const Card = ({ first_name, last_name, id, show }) => (
    <div class="row">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div onClick={() => toggleCard()} class="card-content white-text">
                <span id='title' class="card-title">{first_name}</span>
                </div>
                <div class="card-action">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
                </div>
            </div>
         </div>
      </div>
)



export default Card;