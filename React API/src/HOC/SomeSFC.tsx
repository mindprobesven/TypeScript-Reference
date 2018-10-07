import * as React from 'react'

type IProps = {
  label: string
  count: number
  onIncrement: () => any
}

const SomeSFC = (props: IProps) => {
  const { label, count, onIncrement } = props
  
  return (
    <div className="item">
      <p className="label">{label} : {count}</p>
      <div className="button-move" onClick={() => onIncrement()}></div>
    </div>
  )
}

export default SomeSFC