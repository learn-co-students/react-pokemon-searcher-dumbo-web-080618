import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: true
  }

  renderHp = () => this.props.pokemon.stats.slice(-1).pop().value

  toggle = () => this.setState({toggle: !this.state.toggle})

  displayImage = (pokemon) => this.state.toggle ? pokemon.sprites.front : pokemon.sprites.back

  render() {
    const {pokemon} = this.props
    return (
      <Card>
        <div onClick={this.toggle}>
          <div className="image">
            <img src={this.displayImage(pokemon)} alt={pokemon.name} />*/}
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.renderHp()}
            </span>
          </div>
        </div>

        {/* {this.state.toggle && (
          <img src={pokemon.sprites.back} alt={pokemon.name} />
        )} */}

      </Card >
    )
  }
}

export default PokemonCard
