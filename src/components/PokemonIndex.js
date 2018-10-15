import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''
  }

  handleFetch = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => this.setState({pokemons: data}))
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleSearch = (e, {value}) => {
    this.setState({searchTerm: value})
  }

  renderPokemons = () => {
    const newPoke = [...this.state.pokemons]
    return this.state.searchTerm ? newPoke.filter(poke => poke.name.includes(this.state.searchTerm)) : newPoke
  }

  addPokemon = (obj) => {
    console.log(obj)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": obj.name,
        "stats": [
          {"value" : obj.hp,
            "name": "hp"}
        ],
        "sprites": {
          "front": obj.frontUrl,
          "back": obj.backUrl
        }
      })
    })
      .then(res => res.json())
  }


  render() {
    console.log(this.state.pokemons.slice(0, 10))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonForm handleSubmit={this.addPokemon}/>
        <br />
        <PokemonCollection pokemons={this.renderPokemons()}/>
      </div>
    )
  }
}

export default PokemonPage
