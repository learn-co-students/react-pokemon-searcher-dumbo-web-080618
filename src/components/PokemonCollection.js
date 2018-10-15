import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  constructor(){
    super();
  }

  render() {
    console.log(this.props)
    const pokemonCard = this.props.pokemons.map(pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} />
    })
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {pokemonCard}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
