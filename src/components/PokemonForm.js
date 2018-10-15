import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
     })
  }

  handleSubmit = () => {
    const data = {
      name: this.state.name,
      stats: [{value: this.state.hp, name: "hp"}],
      sprites: {
        front: this.state.frontUrl,
        back:this.state.backUrl
      }
    }
    fetch("http://localhost:3000/pokemon", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()).then(this.props.addPokemon)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onChange={(e) => this.handleChange(e)} onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
