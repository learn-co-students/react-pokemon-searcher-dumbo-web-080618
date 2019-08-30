import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state ={
    pokemon:[]
  }
  componentDidMount() {
    this.handleFetch()
  }

  handleFetch = () => {
    fetch("http://localhost:3000/pokemon")
    .then(response=> response.json())
    .then(data => this.setState({pokemon:data}))
  }

  sendToParent = (arg) => {
    fetch("http://localhost:3000/pokemon",{
      method: "POST",
      headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name:arg.name,
          stats:[{
            "value": arg.hp,
            "name": "hp"
          }
          ],
          sprites:{
            "frontUrl":arg.frontUrl,
            "backUrl":arg.backUrl
          }
        })
    })
    this.handleFetch()
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokeInfo={this.state.pokemon}/>
        <br />
        <PokemonForm sendToParent={this.sendToParent} />
      </div>
    )
  }
}

export default PokemonPage
