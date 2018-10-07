import * as React from 'react'
const { Component } = React

interface IProps {
  readonly id: number,
  readonly headline: string,
  readonly body: string,
  readonly movedY: number,
  readonly posY: number,
  readonly height: number,
  readonly isMove: boolean,
  readonly blockTransition: boolean,
  readonly onDelete: (id: number) => any
}

class Item extends Component<IProps> {
  private ref = React.createRef<HTMLDivElement>()

  staticshouldComponentUpdate(nextProps: IProps) {
    if (nextProps.movedY !== this.props.movedY ||
      nextProps.isMove !== this.props.isMove ||
      nextProps.blockTransition !== this.props.blockTransition) {
      return true
    }
    return false
  }

  public getHeight() {
    return this.ref.current!.getBoundingClientRect().height
  }

  public getTop() {
    return this.ref.current!.getBoundingClientRect().top
  }

  public getElement() {
    return this.ref.current!
  }

  private onHandleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    const { onDelete, id } = this.props
    onDelete(id)
  }

  render() {
    const { id, headline, body, movedY, isMove, blockTransition } = this.props

    const itemTransition = isMove || blockTransition ?
    `transform 0ms ease-out,
    background-color 250ms ease`
    :
    `transform 250ms ease-out,
    background-color 250ms ease`

    return (
      <div
        className={isMove ? 'item move' : 'item'}
        ref={this.ref}
        style={{ transform: `translateY(${movedY}px)`, transition: itemTransition, zIndex: isMove && 9999, opacity: isMove && 0.75 }}
      >
        <div className="item-content">
          <h3 className="headline">ID: {id} - {headline}</h3>
          <p className="body-text">{body}</p>
        </div>
        <div className="button-delete" onClick={this.onHandleClick}>
          <div className="bar" />
          <div className="bar" />
        </div>
        <div className="button-move" data-id={id}>
          <div className="button-move-content" style={{ transform: isMove && `rotateZ(${movedY}deg)` }}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
    )
  }
}

export default Item
