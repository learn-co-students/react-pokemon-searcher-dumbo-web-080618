import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokemonCards = this.props.pokemonArray.map((pokemon) => <PokemonCard pokemonObj={pokemon} pokemonStats={pokemon.stats} key={pokemon.id}/> )
    return (
      <Card.Group itemsPerRow={6}>
        { pokemonCards }
      </Card.Group>
    )
  }
}

export default PokemonCollection
