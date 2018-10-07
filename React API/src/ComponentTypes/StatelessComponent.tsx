import * as React from 'react'

interface PropsInterface {
  compiler: string
  framework: string
}

const StatelessComponent = (props: PropsInterface) => <h3>Hello from {props.compiler} and {props.framework}!</h3>

export default StatelessComponent