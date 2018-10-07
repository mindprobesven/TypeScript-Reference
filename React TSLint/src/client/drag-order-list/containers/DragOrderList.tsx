import * as React from 'react'
const { Component } = React
import Item from './Item'
import OptionsMenu from '../../components/OptionsMenu'
import '../styles.scss'

interface IProps {
  readonly initialItemsData?: object[]
}

interface IState {
  readonly isMouseDown: boolean,
  readonly updateCoordinates: boolean,
  readonly itemToMove: number | null,
  readonly moveY: number,
  readonly itemsById: {[key: number]: ItemState},
  readonly idsByOrder: number[]
}

interface ItemState {
  id: number,
  headline: string,
  body: string,
  movedY: number,
  y?: number,
  height?: number,
  blockTransition: boolean,
  itemRef: React.RefObject<Item>
}

class DragOrderList extends Component<IProps, IState> {
  readonly state: IState = {
    isMouseDown: false,
    updateCoordinates: false,
    itemToMove: null,
    moveY: 0,
    itemsById: {},
    idsByOrder: [],
  }

  private animationFrameMouse: number
  private startMousePosition: number = 0
  private lastMousePosition: number = 0
  private moveDirection: string
  private listElement: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  private listCoordinates: { top: number, bottom: number } = { top: 0, bottom: 0 }
  private lastItemHit: string
  private itemMarginBottom: number = 0
  private lastMoveDirection: string
  private bodyElement: HTMLBodyElement
  private animationFrameResize: number
  private resizeTimout: number

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Lifecycle hooks
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  componentDidMount() {
    console.log('Animated Drag List by Sven Kohn')
    console.log('All systems are go!')

    const { initialItemsData } = this.props

    initialItemsData && this.setInitialItemsData()

    this.bodyElement = document.getElementsByTagName('body')[0]
    this.bodyElement.onresize = () => {
      this.animationFrameResize = requestAnimationFrame(this.onBodyResizeHandler)
    }

    this.bodyElement.addEventListener('touchmove', this.preventPageScrolling, { passive: false })
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    if (nextState !== this.state) {
      return true
    }
    return false
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState !== this.state) {
      if (this.state.updateCoordinates === true) {
        this.updateItemsCoordinates()
        this.updateListCoordinates()
      }

      if (prevState.moveY !== this.state.moveY) {
        this.handleItemMovement(prevState.moveY)
      }
    }
  }

  componentWillUnmount() {
    console.log('Shutting down!')

    cancelAnimationFrame(this.animationFrameMouse)
    cancelAnimationFrame(this.animationFrameResize)
    this.bodyElement.removeEventListener('touchmove', this.preventPageScrolling)
    this.bodyElement.onresize = null
    clearTimeout(this.resizeTimout)
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Body resize handler
  // Prevent page scrolling on touch events
  // Update items and list coordinates
  // Update items order
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  onBodyResizeHandler = () => {
    clearTimeout(this.resizeTimout)
    this.resizeTimout = window.setTimeout(() => {
      this.setState({
        updateCoordinates: true,
      })
    }, 200)
    cancelAnimationFrame(this.animationFrameResize)
  }

  preventPageScrolling = (e: any) => {
    if (this.state.isMouseDown) {
      e.preventDefault()
    }
  }

  updateItemsCoordinates = () => {
    const { itemsById: items, idsByOrder } = this.state

    const updatedItems = { ...items }

    const firstItemId = idsByOrder[0]
    if (firstItemId >= 0) {
      const element = updatedItems[firstItemId].itemRef.current!.getElement()
      const marginBottomValue = window.getComputedStyle(element, null).getPropertyValue('margin-bottom')
      this.itemMarginBottom = parseInt(marginBottomValue, 10)
    }

    for (const id in updatedItems) {
      updatedItems[id] = {
        ...updatedItems[id],
        y: updatedItems[id].itemRef.current!.getTop(),
        height: updatedItems[id].itemRef.current!.getHeight(),
        movedY: 0,
        blockTransition: false,
      }
    }

    this.setState({
      itemsById: { ...items, ...updatedItems },
      updateCoordinates: false,
    })
  }

  updateListCoordinates = () => {
    this.listCoordinates.top = this.listElement.current!.getBoundingClientRect().top
    this.listCoordinates.bottom = this.listElement.current!.getBoundingClientRect().bottom
  }

  updateItemsOrder = () => {
    const { moveY, itemToMove, itemsById: items, isMouseDown } = this.state
    const currentItems = { ...items }

    if (moveY !== 0 && isMouseDown === true && itemToMove >= 0) {
      if (this.moveDirection === 'up') {
        if (this.lastItemHit !== undefined) {
          currentItems[itemToMove].y = currentItems[parseInt(this.lastItemHit, 10)].y - 1
        }
      } else if (this.moveDirection === 'down') {
        currentItems[itemToMove].y = currentItems[itemToMove].y + moveY
      }

      let itemIdsWithPosY: object[] = []
      for (const id in currentItems) {
        itemIdsWithPosY = [...itemIdsWithPosY, { id: parseInt(id, 10), y: currentItems[id].y }]
        currentItems[id] = {...currentItems[id],
          movedY: 0,
          blockTransition: true,
        }
      }

      const orderedByPosY = itemIdsWithPosY.slice().sort((a: {[key: string]: number}, b: {[key: string]: number}) => a.y - b.y)

      let newOrderedIds: number[] = []
      orderedByPosY.map((item: {[key: string]: number}) => {
        newOrderedIds = [...newOrderedIds, item.id]
      })

      this.setState({
        isMouseDown: false,
        itemToMove: null,
        idsByOrder: newOrderedIds,
        itemsById: currentItems,
        updateCoordinates: true,
      })
    } else {
      this.setState({
        isMouseDown: false,
        itemToMove: null,
      })
    }
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Handle items drag movement
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  getMoveDirection = (currentMoveY: number, prevMoveY: number): string => {
    switch (true) {
      case currentMoveY > prevMoveY:
        return 'down'
      case currentMoveY < prevMoveY:
        return 'up'
      default:
        return 'idle'
    }
  }

  handleItemMovement = (prevMoveY: number) => {
    const { itemsById: items, moveY, itemToMove } = this.state

    this.moveDirection = this.getMoveDirection(moveY, prevMoveY)

    const updatedItems = { ...items }
    const moveItemPosY = updatedItems[itemToMove].y + moveY
    const moveItemHeight = updatedItems[itemToMove].height + this.itemMarginBottom

    for (const id in updatedItems) {
      if (parseInt(id, 10) !== itemToMove) {
        const currentItemPosY = updatedItems[id].y
        const currentItemHeight = updatedItems[id].height + this.itemMarginBottom

        if (this.moveDirection === 'up') {
          if (moveItemPosY > currentItemPosY && moveItemPosY < currentItemPosY + (currentItemHeight - this.itemMarginBottom - 10)) {
            if (this.lastItemHit !== id || this.lastMoveDirection !== this.moveDirection) {
              if (updatedItems[id].movedY < 0) {
                updatedItems[id].movedY = 0
                updatedItems[id].y = currentItemPosY + moveItemHeight
                this.lastItemHit = id
              } else if (updatedItems[id].movedY === 0) {
                updatedItems[id].movedY = moveItemHeight
                updatedItems[id].y = currentItemPosY + moveItemHeight
                this.lastItemHit = id
              }
            }
            this.lastMoveDirection = this.moveDirection
            break
          }
        } else if (this.moveDirection === 'down') {
          if ((moveItemPosY + moveItemHeight) < (currentItemPosY + currentItemHeight) &&
          (moveItemPosY + moveItemHeight) > (currentItemPosY + this.itemMarginBottom + 10)) {
            if (this.lastItemHit !== id || this.lastMoveDirection !== this.moveDirection) {
              if (updatedItems[id].movedY > 0) {
                updatedItems[id].movedY = 0
                updatedItems[id].y = currentItemPosY - moveItemHeight
                this.lastItemHit = id
              } else if (updatedItems[id].movedY === 0) {
                updatedItems[id].movedY = -moveItemHeight
                updatedItems[id].y = currentItemPosY - moveItemHeight
                this.lastItemHit = id
              }
            }
            this.lastMoveDirection = this.moveDirection
            break
          }
        }
      }
    }

    this.setState({
      itemsById: updatedItems,
    })
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Set initial, add and delete items
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  setInitialItemsData = () => {
    const { initialItemsData } = this.props
    const { itemsById: items, idsByOrder } = this.state

    const itemsToAdd: any = {}
    let newItemIds: number[] = []
    let itemCounter: number = idsByOrder.length

    initialItemsData.map((item: any) => {
      itemCounter = itemCounter + 1
      const itemId = itemCounter

      const itemData: ItemState = {
        id: itemId,
        headline: item.headline,
        body: item.body,
        movedY: 0,
        blockTransition: false,
        itemRef: React.createRef<Item>(),
      }

      itemsToAdd[itemId] = itemData
      newItemIds = [...newItemIds, itemId]
    })

    const newOrderedIds = [...idsByOrder, ...newItemIds].sort((a, b) => b - a)

    this.setState({
      itemsById: { ...items, ...itemsToAdd },
      idsByOrder: newOrderedIds,
      updateCoordinates: true,
    })
  }

  onHandleAddItem = () => {
    this.addItem('Some Added Item', `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur consectetur arcu libero, at lobortis lectus consectetur auctor.`)
  }

  addItem = (headline: string, body: string) => {
    const { itemsById: items, idsByOrder } = this.state

    const itemToAdd: any = {}
    let itemId: number

    if (idsByOrder.length > 0) {
      itemId = Math.max.apply(null, idsByOrder) + 1
    } else {
      itemId = 0
    }

    const itemData: ItemState = {
      headline,
      body,
      id: itemId,
      movedY: 0,
      blockTransition: false,
      itemRef: React.createRef<Item>(),
    }

    itemToAdd[itemId] = itemData

    this.setState({
      itemsById: { ...items, ...itemToAdd },
      idsByOrder: [itemId, ...idsByOrder],
      updateCoordinates: true,
    })
  }

  onHandleDeleteItem = (itemId: number) => {
    this.deleteItem(itemId)
  }

  deleteItem = (itemId: number) => {
    const { itemsById: items, idsByOrder } = this.state

    const filteredItems = { ...items }
    delete filteredItems[itemId]

    const filteredIds = [...idsByOrder]
    const arrayIndex = filteredIds.findIndex(arrayItemId => arrayItemId === itemId)
    filteredIds.splice(arrayIndex, 1)

    this.setState({
      itemsById: filteredItems,
      idsByOrder: filteredIds,
      updateCoordinates: true,
    })
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Mouse and touch event handlers
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    this.lastMousePosition = e.clientY
  }

  touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()

    this.lastMousePosition = e.touches[0].clientY
  }

  mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    this.handleDown(e, 'mouseDown')
  }

  touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()

    this.handleDown(e, 'touchStart')
  }

  handleDown = (e: any, type: string) => {
    const itemId = (e.target as HTMLDivElement).getAttribute('data-id')

    if (itemId && typeof itemId === 'string') {
      this.setState({
        isMouseDown: true,
        itemToMove: parseInt(itemId, 10),
      })

      if (type === 'touchStart') {
        this.startMousePosition = e.touches[0].clientY
      } else if (type === 'mouseDown') {
        this.startMousePosition = e.clientY
      }

      this.lastMousePosition = this.startMousePosition
      this.animationFrameMouse = requestAnimationFrame(this.updateMousePosition)
    }
  }

  updateMousePosition = () => {
    const { isMouseDown, itemToMove, itemsById: items } = this.state

    if (isMouseDown && itemToMove >= 0) {
      const moveY = this.lastMousePosition - this.startMousePosition

      const updatedItems = { ...items }

      if ((updatedItems[itemToMove].y + moveY) >= this.listCoordinates.top &&
      ((updatedItems[itemToMove].y + updatedItems[itemToMove].height) + moveY) <= this.listCoordinates.bottom) {
        updatedItems[itemToMove].movedY = moveY

        this.setState({
          moveY,
          itemsById: updatedItems,
        })
      }
    }

    this.animationFrameMouse = requestAnimationFrame(this.updateMousePosition)
  }

  mouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    this.handleUp()
  }

  touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()

    this.handleUp()
  }

  handleUp = () => {
    cancelAnimationFrame(this.animationFrameMouse)
    this.updateItemsOrder()
    this.lastItemHit = undefined
    this.lastMoveDirection = undefined
  }

  mouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (this.state.isMouseDown) {
      this.handleUp()
    }
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Render
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  render() {
    const { itemsById: items, idsByOrder, itemToMove } = this.state

    const itemsList = idsByOrder.length > 0 && idsByOrder.map((id: number) => (
      <Item
        key={id}
        ref={items[id].itemRef}
        id={id}
        headline={items[id].headline}
        body={items[id].body}
        movedY={items[id].movedY}
        posY={items[id].y}
        height={items[id].height}
        isMove={itemToMove === id ? true : false}
        blockTransition={items[id].blockTransition}
        onDelete={this.onHandleDeleteItem}
      />
    ))

    return (
      <div>
        <OptionsMenu onAdd={this.onHandleAddItem} />
        <div className="container">
          <div
            className="list"
            ref={this.listElement}
            onMouseDown={this.mouseDown}
            onMouseUp={this.mouseUp}
            onMouseLeave={this.mouseLeave}
            onMouseMove={this.mouseMove}
            onTouchStart={this.touchStart}
            onTouchEnd={this.touchEnd}
            onTouchMove={this.touchMove}
          >
            {idsByOrder.length === 0 && <h3 className="list-message">Add some items...</h3>}
            {idsByOrder.length > 0 && itemsList}
          </div>
        </div>
      </div>
    )
  }
}

export default DragOrderList
