import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  getCards = () => {
    return this.props.pokemon.map(pkmn => 
      <PokemonCard key={pkmn.name} pokemon={pkmn}/>
    )
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
      {this.getCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
