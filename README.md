# esp-library

> component library for the end of studies project by Khalil Jabbahi and Tarik Sghiouri Idrissi

[![NPM](https://img.shields.io/npm/v/esp-library.svg)](https://www.npmjs.com/package/esp-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save esp-library
```

## Usage

TreeView

```jsx
import React, { Component } from 'react'

import {TreeView} from 'esp-library'

class Example extends Component {

  onSelect = data => console.log(data);


  render () {
    //creating TreeView structure 
    const data = [{
      id : 12,
      label : "root",
      icon : icon,
      isOpen : true,
      children : [{   id : 19,
                    label : "rChild1",
                    icon : icon,
                    isOpen : true,
                    onSelect: this.onSelect,
                    children : []
                },{   id : 18,
                  label : "rChild2",
                  icon : icon,
                  isOpen : true,
                  children : [
                    {id : 39,
                    label : "rc",
                    isOpen : true,
                    onSelect: this.onSelect,
                    children : []
                }]
              },{   id : 17,
                label : "rChild3",
                icon : icon,
                isOpen : true,
                onSelect: this.onSelect,
                children : []
            }]
    },{
      id : 14,
      label : "rChild3",
      icon : icon,
      isOpen : true,
      onSelect: this.onSelect,
      children : []
    }
  
  ];

    return (
      <TreeView  data={data}/>
      /* data = [{  
        id : integer (must be unique)
        label : String --node displayed name --
        icon : String --icon path-- (optionnel)
        isOpen : boolean --node state --
        onSelect : function --hundlethe click even of the node -- (optionnel)
        children : array of node type object   
      }, ...]*/
    )
  }
}
```

ProgressBar

```jsx
import React, { Component } from 'react'

import {ProgressBar} from 'esp-library'

class Example extends Component {




  render () {

    return (
      <ProgressBar  percente={50}/>
    )
  }
}
```

Accordion 

```jsx
import React, { Component } from 'react'

import {Accordion} from 'esp-library'

class Example extends Component {




  render () {

    return (
        <Accordion allowMultipleOpen>
          <div label="first">
            <ul>
              <li>example 1</li>
              <li>example 2</li>
            </ul>
          </div>
          <div label="second">
            <p>text here</p>
          </div>
        </Accordion>
    )
  }
}
```

Tabs

```jsx
import React, { Component } from 'react'

import {Accordion} from 'esp-library'

class Example extends Component {



  render () {

    return (
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    )
  }
}
```

Dialog 

```jsx
import React, { Component } from 'react'

import {Dialog} from 'esp-library'

class Example extends Component {

  state = {
    isOpen : false
  }

  //manage Dialog responce res : boolean
  result = (res) => {
    console.log(res)
  }
  render () {


    return (
      <div>
        <button onClick={e => this.setState({ isOpen: true })}>open</button>
        <Dialog
          typeof="option"
          onClose={e => this.setState({ isOpen: false })}
          isOpen={this.state.isOpen}
          result={this.result}
        >
          hello world
        </Dialog>
      </div>
    )
  }
}
```

## License

MIT © [Kh4L1L0](https://github.com/Kh4L1L0)
