import * as React from 'react'
import { Component } from 'react'
import { Subtract } from 'utility-types'

interface InjectedProps {
  extraData: string
  ref: any
}

export const withExtraProps = <T extends Component, OriginalProps extends InjectedProps>(
  WrappedComponent: React.ComponentType<OriginalProps>
) => {
  type PrivateProps = { forwardedRef: React.RefObject<T> }

  type Props = Subtract<OriginalProps, InjectedProps> & PrivateProps

  class WithExtraProps extends Component<Props> {
    static displayName = `withExtraProps(${WrappedComponent.name})`

    componentDidUpdate(prevProps: Props) {
      console.log('old props: ', prevProps)
      console.log('new props: ', this.props)
    }

    render() {
      const { forwardedRef, ...rest } = this.props as PrivateProps
      
      return <WrappedComponent ref={forwardedRef} extraData={'Sven'} {...rest} />
    }
  }

  const RefForwardingFactory: any = (props: Props, ref: T) => (
    <WithExtraProps {...props} forwardedRef={ref} />
  )

  const name = WrappedComponent.displayName || WrappedComponent.name
  RefForwardingFactory.displayName = `withExtraProps(${name})`

  return React.forwardRef<T, OriginalProps>(RefForwardingFactory as any)
}