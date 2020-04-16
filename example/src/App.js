import React, { Component } from 'react'
import icon from './icon/folder.png'

import {TreeView , Dialog ,Accordion , Tabs} from 'esp-library'

export default class App extends Component {

  state = {
    isOpen : false
  }

  result = (res) => console.log(res);
  
  render () {


    return (
      <div>
        <h2>Dialog Component</h2>
        <button onClick={e => this.setState({ isOpen: true })}>dialog de confirmation</button>
        <Dialog
          typeof="confirm"
          onClose={e => this.setState({ isOpen: false })}
          isOpen={this.state.isOpen}
          result={this.result}
        >
         Confirm ???
        </Dialog>
      </div>
    )
  }
}
