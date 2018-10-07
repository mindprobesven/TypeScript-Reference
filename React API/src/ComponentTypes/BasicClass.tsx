import * as React from 'react'
import { Component } from 'react'

interface IProps {
  name: string
  powerLevel?: number
}

class BasicClass extends Component<IProps, {}> {
  render() : React.ReactNode {
    const { name, powerLevel } = this.props
    
    return (
      <div>
        <p>Hello {name}!</p>
        <p>Power: {getPowerBar(powerLevel)}</p>
      </div>
    )
  }
}

export default BasicClass

const getPowerBar = (power: number) : string => {
  return Array(power + 1).join('-')
}