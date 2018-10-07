import * as React from 'react'
import { Component } from 'react'

export interface IProps {
  value: string,
  options: string[],
  onChange: Function
}

export default class Picker extends Component<IProps, {}> {
  render() {
    const { value, options, onChange } = this.props
    
    return(
      <span>
        <h1>{value}</h1>
        <select value={value} onChange={e => onChange(e.target.value)}>
          {
            options.map(option => (
              <option key={option}>{option}</option>
            ))
          }
        </select>
      </span>
    )
  }
}