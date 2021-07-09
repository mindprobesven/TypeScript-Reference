import * as React from 'react'
import { Component } from 'react'

import SFCWithState from './SFCWithState';

class HOC extends Component {
  render() {
    return (
      <div className="todos">
        <div className="list">
          <SFCWithState label={'Sven'} />
        </div>
      </div>
    )
  }
}
  
export default HOC