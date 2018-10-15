import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      flipped: false
    }
  }

  flip = () =>
  {
    this.setState({flipped: !this.state.flipped})
  }
  render() {
    const {name, stats, sprites } = {...this.props.pokemon}
    // debugger
    const hp = stats.filter(x=> x.name === 'hp')[0].value
    return (
      <Card onClick={this.flip}>
        <div>
          <div className="image">
            { this.state.flipped
              ? <img src={sprites.back} alt="oh no!" />
              : <img src={sprites.front} alt="oh no!" />
              }
          </div>
          <div className="content">
            <div className="header">{name}</div>
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
