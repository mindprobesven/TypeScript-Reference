import * as React from 'react'
import { Component } from 'react'

type IProps = {
  id: number
  text: string
  onClick: (id: number, text: string, ref: React.RefObject<HTMLDivElement>) => any
  extraData?: string
}

class SomeClassComponent extends Component<IProps> {
  private ref = React.createRef<HTMLDivElement>()
  
  getSize() {
    return this.ref.current!.getBoundingClientRect()
  }

  handleMouseLeave = () => {
    const {id, text } = this.props
    console.log(`Mouse left on ${id} with text ${text}`)
  }
  
  render() {
    const {id, text, onClick, extraData } = this.props

    return (
      <div ref={this.ref} className="item">
        <p className="label">{id} : {text} {extraData && ': HOCData: ' + extraData}</p>
        <div className="button-move" onClick={() => onClick(id, text, this.ref)} onMouseLeave={this.handleMouseLeave}></div>
      </div>
    )
  }
}

export default SomeClassComponent