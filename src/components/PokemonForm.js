import React from 'react'
import { Form } from 'semantic-ui-react'

const url='http://localhost:3000/pokemon'

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

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = {
      name: this.state.name,
      stats: [{
        value: this.state.hp,
        name: 'hp'
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    fetch(url, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(r => r.json())

    this.props.renderNewPokemon(data)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
