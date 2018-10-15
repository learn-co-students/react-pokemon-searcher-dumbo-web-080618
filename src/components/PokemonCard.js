import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imgUrl: this.props.pokemon.sprites.front
  }

  handleClick = (e) => {
    if (this.state.imgUrl === this.props.pokemon.sprites.front){
      this.setState({imgUrl:this.props.pokemon.sprites.back})
    }
    else{
      this.setState({imgUrl:this.props.pokemon.sprites.front})
    }
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.imgUrl} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
