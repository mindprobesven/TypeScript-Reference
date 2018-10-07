import * as React from 'react'
import { Component } from 'react'

import SomeClassComponent from './SomeClassComponent';
import SomeSFC from './SomeSFC';
import SomeClassComponentWithHOC from './SomeClassComponentWithHOC';

class Refs extends Component {
  private refSomeClassComponent = React.createRef<SomeClassComponent>()
  private refSomeSFC = React.createRef<HTMLDivElement>()
  private refSomeClassComponentWithHOC = React.createRef<SomeClassComponent>()

  componentDidMount() {
    const dataSomeClassComponent = this.refSomeClassComponent.current!.getSize()
    console.log(dataSomeClassComponent)
    
    const dataSomeSFC = this.refSomeSFC.current!.getBoundingClientRect()
    console.log(dataSomeSFC)
    
    const dataSomeClassComponentWithHOC = this.refSomeClassComponentWithHOC.current!.getSize()
    console.log(dataSomeClassComponentWithHOC)
  }

  handleClick = (id: number, text: string, ref: React.RefObject<HTMLDivElement>) => {
    console.log(`Root: Clicked on ${id} with text ${text} and ref ${ref.current!.getBoundingClientRect()}`)
    console.log(ref.current!.getBoundingClientRect())
  }

  render() {
    return (
      <div>
        <div className="todos">
          <div className="list">
            <SomeClassComponent ref={this.refSomeClassComponent} id={1} text={"Item 1"} onClick={this.handleClick} />
            <SomeSFC ref={this.refSomeSFC} id={2} text={"Item 2"} onClick={this.handleClick} />
            <SomeClassComponentWithHOC ref={this.refSomeClassComponentWithHOC} id={3} text={"Item 3"} onClick={this.handleClick} />
          </div>
        </div>
      </div>
      
    )
  }
}
  
export default Refs