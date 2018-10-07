import * as React from 'react'
const { Component } = React
import DragOrderList from '../drag-order-list/containers/DragOrderList'
import InfoBox from '../components/InfoBox'

interface RawItemData {
  headline: string,
  body: string
}

const initialItemsData: RawItemData[] = [
  { headline: 'Headline', body: 'Drag items vertically to re-order them.' },
  { headline: 'Headline', body: 'Drag items vertically to re-order them.' },
  { headline: 'Headline', body: `An item with a longer text. Lorem
  ipsum dolor sit amet, consectetur adipiscing elit.
  Curabitur consectetur arcu libero, at lobortis lectus consectetur
  auctor. Cras et elit accumsan, lobortis ex nec, fermentum mi.` },
  { headline: 'Headline', body: 'Drag items vertically to re-order them.' },
  { headline: 'Headline', body: 'Drag items vertically to re-order them.' },
]

class App extends Component {
  render() {
    return (
      <div>
        <InfoBox />
        <DragOrderList initialItemsData={initialItemsData} />
      </div>
    )
  }
}

export default App
