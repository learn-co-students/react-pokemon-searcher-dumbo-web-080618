import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {


  state = {
    searchArg : '',
    pokemons: []
  }

  handleSearchChange = _.debounce((e, obj) => {
    e.persist();
    this.setState({searchArg: obj.value.trim()})
    this.filterPokemon()
  }, 500)


  fetchPokemons(){
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
  }

  filterPokemon = () => {
    const toSearch = this.state.searchArg
    if (toSearch === ''){
      fetch('http://localhost:3000/pokemon')
        .then(res => res.json())
        .then(pokes => this.setState({pokemons:pokes}))

    }
    else{
      //have it search from all pokemons not just existing
      let newPokemons = []
      fetch('http://localhost:3000/pokemon')
        .then(res => res.json())
        .then(pokemons => {
          newPokemons = pokemons.filter((pokemon) => {
            return pokemon.name.includes(toSearch)
          })
          this.setState({pokemons: newPokemons})
        })
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokes => this.setState({pokemons:pokes}))
  }

  handleSubmit = (newPokemon) => {
    let newPokemons = [...this.state.pokemons]
    let body = {
      "name": newPokemon.name,
      "stats": [
        {
          "value": 80,
          "name": "special-defense"
        },
        {
          "value": 80,
          "name": "special-attack"
        },
        {
          "value": 63,
          "name": "defense"
        },
        {
          "value": 62,
          "name": "attack"
        },
        {
          "value": 60,
          "name": "speed"
        },
        {
          "value": newPokemon.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": newPokemon.frontUrl,
        "back": newPokemon.backUrl
      }
    }
    newPokemons.push(body)
    this.setState({pokemons: newPokemons})
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default PokemonPage
