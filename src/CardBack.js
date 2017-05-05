import React from 'react';

const CardBack = ({ last_name, id, show }) => (
    <div class="row">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">{last_name}</span>
                </div>
                <div class="card-action">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
                </div>
            </div>
         </div>
      </div>
)

export default CardBack;