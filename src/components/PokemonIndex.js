import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    isLoading: false,
    value: ""
  }

  componentDidMount(){
    // *ASYNC: stuff
    this.getInitialPokemon()
  }

  handleSearch = (e, object) => {

    console.log(object.value)
    let value = object.value
    if (value.length > 1){
      this.setState({isLoading: true, value})
    
      const re = new RegExp(_.escapeRegExp(value))
      const isMatch = result => re.test(result.name)
      let pkmn = this.state.pokemon.slice()
      this.setState({
        isLoading: false,
        pokemon: _.filter(pkmn, isMatch)
      })
    } else {
      this.getInitialPokemon()
    }
    
      console.log(this.state.results)
  }

  getInitialPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pkmns => {
        this.setState({pokemon: pkmns})
      })
      .catch(err => alert(err))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
