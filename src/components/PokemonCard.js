import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {

  toggleCard = (event) =>{
    event.preventDefault();
    let frontImage = this.props.pokemonObj.sprites.front;
    let backImage = this.props.pokemonObj.sprites.back;
    event.target.src === frontImage ? (event.target.src=backImage) : (event.target.src=frontImage)
  }

  render() {
    let pokemonHp = this.props.pokemonStats.find(stat => stat.name === 'hp')
    return (
      <Card >
        <div>
          <div className="image">
            <img onClick={this.toggleCard} src={this.props.pokemonObj.sprites.front} alt={this.props.pokemonObj.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <p>{pokemonHp.value} hp</p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
