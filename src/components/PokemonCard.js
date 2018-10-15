import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    side: 'front'
  }

  handleClick = () => {
    if (this.state.side === 'front') {
      this.setState({side: 'back'})
    } else {
      this.setState({side: 'front'})
    }
  }
  render() {
    const hpStat = this.props.pokemon.stats.find(stat => stat.name === 'hp')
    const hp = hpStat.value
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.props.pokemon.sprites[this.state.side]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
