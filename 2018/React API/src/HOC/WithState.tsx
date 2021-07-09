import * as React from 'react'
import { Component } from 'react'
import { Subtract } from 'utility-types'

interface InjectedProps {
  count: number
  onIncrement: () => any
}

export const withState = <WrappedProps extends InjectedProps> (
  WrappedComponent: React.ComponentType<WrappedProps>
) => {
  type HOCProps = Subtract<WrappedProps, InjectedProps> & {
    initialCount?: number
  }

  type HOCState = {
    readonly count: number
  }

  return class WithState extends Component<HOCProps, HOCState> {
    static displayName = `withState(${WrappedComponent.name})`

    readonly state: HOCState = {
      count: Number(this.props.initialCount) || 0
    }

    componentDidUpdate(prevProps: HOCProps, prevState: HOCState) {
      console.log('old state: ', prevState)
      console.log('new state: ', this.state)
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 })
    }

    render() {
      const { ...restProps } = this.props as {}
      const { count } = this.state

      return (
        <WrappedComponent 
          {...restProps}
          count={count}
          onIncrement={this.handleIncrement}
        />
      )
    }
  }
}