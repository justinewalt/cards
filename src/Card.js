import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        };
    }

    toggleCard = (e) => {
        e.preventDefault();
        this.setState = ({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div onClick={ toggleCard() } class="card-content white-text">
                            if (this.state.toggle === false) {
                                <span id='title' class="card-title">{this.props.first_name}</span>
                            } else {
                                <span id='title' class="card-title">{this.props.last_name}</span>
                            }
                        </div>
                        <div class="card-action">
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 


export default Card;