import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle:false
  }

  showOther = () => {
  const change =  !this.state.toggle
  this.setState({
    toggle:change
  })
  }
  render() {
    const { sprites, name} = this.props.pokemon
    const findHp =  this.props.pokemon.stats.find(function(element) {
      return element.name === "hp";
    });

    const renderDiv = () => {
      if(this.state.toggle === true) {
      return <img src={sprites.back} alt="oh no!" />
    } else {
      return <img src={sprites.front} alt="oh no!" />
    }

    }
    return (
      <Card>
        <div>
          <div className="image" onClick={this.showOther}>
            {renderDiv()}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {findHp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
