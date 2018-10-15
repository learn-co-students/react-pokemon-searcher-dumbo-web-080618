import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemon = this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection
