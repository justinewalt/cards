import React from 'react';

class CardForm extends React.Component {
  cardDefaults = { first_name: '', last_name: ''};
  state = { product: this.productDefaults, loaded: false }

  componentDidUpdate() {
    let { defaults } = this.props;
    if (defaults && !this.state.loaded)
      this.setState({ card: defaults, loaded: true })
  }
  handleChange = (e) => {
    let el = e.target;
    let { card } = this.state;
    this.setState({
      card: {
        ...card,
        [el.id]: el.value
      }
    })
  }
    submit = (e) => {
      e.preventDefault()
      let { card } = this.state;
      let { handleSubmit } = this.props;
      handleSubmit(card);
      if (!this.props.defaults)
        this.setState({ product: this.productDefaults })
    }
  render() {
    let { card } = this.state;
    let { defaults } = this.props;
    return (
      <form onSubmit={this.submit}>
        <input
          id="firstName"
          required
          placeholder="First Name"
          onChange={this.handleChange}
          value={card.first_name}
        />
        <input
          id="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={card.last_name}
        />
        <button>Add Card</button>
      </form>
    )
  }
}

export default CardForm;
