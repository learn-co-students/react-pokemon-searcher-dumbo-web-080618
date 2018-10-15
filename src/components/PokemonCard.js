import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super();
    this.state = {
      toggled:true
    }
  }

  render() {
    const {sprites, name, stats} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.onClickImgHandler}>
            {this.state.toggled ?
              (<img alt="oh no!" src={sprites.front}/>) :
              (<img alt="oh no!" src={sprites.back}/>)
            }

          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findStatValue("hp")} hp
            </span>
          </div>
        </div>
      </Card>
    )

  }

  onClickImgHandler = () =>{
    this.setState({
      toggled:!this.state.toggled
    })
  }

  findStatValue = (stat_name) =>{
    const stat_temp = this.props.pokemon.stats.find(stat =>{
      return (stat.name == stat_name)
    })
    return stat_temp.value
  }
}

export default PokemonCard
