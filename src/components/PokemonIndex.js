import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      pokemonSearchTerm: "",
      results: []
    }
  }

  addPokemon = (pokemon) => {
    let newPokemons = this.state.pokemons.slice()
    newPokemons.push(pokemon)
    this.setState({
      pokemons: newPokemons
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon").then(res=>res.json())
    .then((pokemons) => {
      this.setState({ pokemons })
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({
      pokemonSearchTerm: value
    })
    console.log(this.state)

    setTimeout(() => {
      // if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.pokemonSearchTerm), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        results: _.filter(this.state.pokemons, isMatch),
      })
    }, 300)

  }

  // handleSeachClick = () => {
  //   console.log("hello")
  // }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
         <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemonSearchTerm === "" ? this.state.pokemons : this.state.results}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
