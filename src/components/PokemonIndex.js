import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemons: [],
      filter:""
    }
  }

  componentDidMount(){
    this.handleFetch();
  }

  handleFetch = () =>{
    fetch(`http://localhost:3000/pokemon`).then(res => res.json()).then(res => {
      this.setState({
        pokemons: res
      })
    })
  }

  handleSearch = (term, { value }) =>{
    this.setState({
      filter:value
    })
  }

  addPokemon = (data) =>{
    this.setState({
      pokemons: [...this.state.pokemons, data]
    })
  }

  highHPFirst = () => {
    const newFilter = [...this.state.pokemons].sort(function(a,b) {
      let a2 = a.stats.find(stat =>{
        return (stat.name == "hp")
      })
      let b2 = b.stats.find(stat =>{
        return (stat.name == "hp")
      })
      return b2.value - a2.value
    })
    console.log("Hey, new filter", newFilter)
    this.setState({
      pokemons: newFilter
    })
  }

  render() {
    console.log(this.state)
    if (this.state.filter == "hp"){
      this.highHPFirst()
      this.setState({
        filter:""
      })
    }
    if (this.state.filter == "id"){
      this.handleFetch()
      this.setState({
        filter:""
      })
    }
    const desiredPokemon = this.state.pokemons.filter(p =>
      p.name.includes(this.state.filter)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={desiredPokemon}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
