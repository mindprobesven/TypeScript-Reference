import * as React from 'react'
import { Component } from 'react'

interface PropsInterface {
  compiler: string
  framework: string
}

class ClassComponent extends Component<PropsInterface, {}> {
  render() : React.ReactNode {
    const { compiler, framework } = this.props

    return (
      <h3>Hello from {compiler} and {framework}!</h3>
    )
  }
}

export default ClassComponent