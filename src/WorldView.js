import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './WorldView.css'

import WorldViewObject from './WorldViewObject'

class WorldView extends Component {
  state = {
    code: ''
  }

  handleChange = (ev) => {
    const code = ev.currentTarget.value
    this.setState({ code })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/worldView/${this.state.code}`)
  }

  render() {
    return (
      <div className="view">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">See the world</button>
          </div>
        </form>

        <Route exact path='/worldView' render={() => 
                <div>
                <h3>Please enter a valid ISO country code</h3>
                <h2><a href = 'http://www.nationsonline.org/oneworld/country_code_list.htm'>Click here for list of valid codes</a></h2>
                </div>
        } />
        <Route path='/worldView/:code' component={WorldViewObject} />
      </div>
    )
  }
}

export default WorldView