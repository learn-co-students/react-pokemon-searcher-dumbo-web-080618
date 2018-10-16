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

  handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandle = (event) =>{
    event.preventDefault();
    this.props.handleSubmit(this.state)
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form >
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} fluid label="Name" placeholder="name" name="name" value={this.state.name}/>
            <Form.Input onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input onChange={this.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input onChange={this.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button onClick={this.submitHandle} >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
