import * as React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import './index.scss'

setTimeout(() => {
  console.log('Render time!')
  
  render(
    <Root />,
    document.getElementById('root') as HTMLElement
  )
}, 0)