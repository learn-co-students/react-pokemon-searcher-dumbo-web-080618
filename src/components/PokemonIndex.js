import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const url='http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      selectedPokemon: [],
      searchTerm: ''
    }
  }
  componentDidMount() {
    fetch(url)
      .then(r => r.json())
      .then(pokemon => this.setState({pokemon, selectedPokemon: pokemon}))
  }

  handleSearchChange = (event, props) => {

    this.setState({searchTerm: props.value})
    this.handleFilter(this.state.searchTerm)
  }

  handleFilter = searchTerm => {
    let pokemonCopy = [...this.state.pokemon]
    let selectedPokemon = pokemonCopy.filter(pokemon => pokemon.name.includes(searchTerm))
    this.setState({selectedPokemon})
    // debugger
  }

  renderNewPokemon = data => {
    console.log(data)
    let pokemonCopy = [...this.state.pokemon, data]
    this.setState({pokemon: pokemonCopy})
    this.setState({selectedPokemon: pokemonCopy})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.selectedPokemon}/>
        <br />
        <PokemonForm renderNewPokemon = {this.renderNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
