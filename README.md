# esp-library

> component library for the end of studies project by Khalil Jabbahi and Tarik Sghiouri Idrissi

[![NPM](https://img.shields.io/npm/v/esp-library.svg)](https://www.npmjs.com/package/esp-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save esp-library
```

## Usage

```jsx
import React, { Component } from 'react'

import {TreeView} from 'esp-library'

class Example extends Component {

  onSelect = data => console.log(data);

  render () {

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
    )
  }
}
```

## License

MIT © [Kh4L1L0](https://github.com/Kh4L1L0)
