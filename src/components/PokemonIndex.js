import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  componentDidMount(){
    this.fetchOriginalArray()
  }

  constructor(){
    super()
    this.state = {
      pokemonArray: []
    }
  }

  fetchOriginalArray(){
    return fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(resp => this.setState({pokemonArray: resp}, () => console.log(resp)))
  }

  handlePost = (data) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => this.setState({pokemonArray:[...this.state.pokemonArray, res]}))
  }

  handleSubmit = (newObj) => {
    let pokemonObj = {
      "name": newObj.name,
      "stats": [
        {
          "value": newObj.hp,
          "name": "hp"
        }],
        "sprites": {
          "front": newObj.frontUrl,
          "back": newObj.backUrl
        }
      }
      this.handlePost(pokemonObj);
    }

    handleSearchFeature = (objInput) => {
      objInput.value === '' ? this.fetchOriginalArray() : null;
      let filteredPokemonArray = []
      this.state.pokemonArray.forEach((pokemon) => pokemon.name.match(objInput.value) ? filteredPokemonArray.push(pokemon) : '');
      this.setState({pokemonArray: filteredPokemonArray})
    }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, obj) => this.handleSearchFeature(obj), 200)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonArray={this.state.pokemonArray}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
