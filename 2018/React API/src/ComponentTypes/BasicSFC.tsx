import * as React from 'react'

interface IProps {
  name: string
  powerLevel?: number
}

const BasicSFC = ({ name, powerLevel = 1 } : IProps) => {
  if(powerLevel <= 0) {
    throw new Error('Game Over!')
  }

  return (
    <div>
      <p>Hello {name}!</p>
      <p>Power: {getPowerBar(powerLevel)}</p>
    </div>
  )
}

const getPowerBar = (power: number) : string => {
  return Array(power + 1).join('+')
}

export default BasicSFC