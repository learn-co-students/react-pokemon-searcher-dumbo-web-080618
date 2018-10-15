import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      displayBack: false
    }
  }

  handleClick = () => {
    this.setState({
      displayBack: !this.state.displayBack
    })
  }

  render() {
    const pokemon = this.props.pokemon
    const pokemonHpStat = pokemon.stats.filter((stat)=>stat.name==="hp")
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.displayBack ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {pokemonHpStat[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
