import * as React from 'react'
import { Component } from 'react'

import HOC from '../HOC';
import Refs from '../Refs';

import StatelessComponent from '../ComponentTypes/StatelessComponent';
import ClassComponent from '../ComponentTypes/ClassComponent';
import BasicTypes from '../ComponentTypes/BasicTypes';
import BasicSFC from '../ComponentTypes/BasicSFC';
import BasicClass from '../ComponentTypes/BasicClass';

class App extends Component {
  render() {
    return (
      <div>
        <Refs />
        <br />
        <HOC />
        <StatelessComponent compiler="TypeScript" framework="React" />
        <ClassComponent compiler="TypeScript" framework="React" />
        <BasicTypes />
        <BasicSFC name="Sven" powerLevel={25} />
        <BasicClass name="Sven" powerLevel={15} />
      </div>
      
    )
  }
}
  
export default App