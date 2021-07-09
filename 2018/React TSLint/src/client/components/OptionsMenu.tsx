import * as React from 'react'
const { Component } = React

interface IProps {
  readonly onAdd: () => any
}

class OptionsMenu extends Component<IProps, {}> {
  shouldComponentUpdate(nextProps: IProps, nextState: any) {
    if (nextState !== this.state) {
      return true
    }
    return false
  }

  private onHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    const { onAdd } = this.props
    onAdd()
  }

  render() {
    return (
      <div className="options-menu">
        <button className="button-add" onClick={this.onHandleClick}>+ Add Item</button>
      </div>
    )
  }
}

export default OptionsMenu
