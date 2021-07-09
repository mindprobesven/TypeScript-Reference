import * as React from 'react'

type IProps = {
  id: number
  text: string
  onClick: (id: number, text: string, ref: React.Ref<HTMLDivElement>) => any
}

const SomeSFC = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { id, text, onClick } = props

  const handleMouseLeave = () => {
    const { id, text } = props
    console.log(`Mouse left on ${id} with text ${text}`)
  }

  return (
    <div ref={ref} className="item">
      <p className="label">{id} : {text}</p>
      <div className="button-move" onClick={() => onClick(id, text, ref)} onMouseLeave={handleMouseLeave}></div>
    </div>
  )
})

export default SomeSFC