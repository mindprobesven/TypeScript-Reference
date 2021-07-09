import * as React from 'react'
import { mount } from 'enzyme'
import DragOrderList from '../containers/DragOrderList'

interface RawItemData {
  headline: string,
  body: string
}

const initialItemsData: RawItemData[] = [
  { headline: 'Item 1', body: 'Some text' },
  { headline: 'Item 2', body: 'Some text' },
  { headline: 'Item 3', body: 'Some text' },
  { headline: 'Item 4', body: 'Some text' },
  { headline: 'Item 5', body: 'Some text' },
]

it('Renders with initial items', () => {
  const dragOrderList = mount(<DragOrderList initialItemsData={initialItemsData} />)
  expect(dragOrderList.find('.item').length).toEqual(5)
})

it('Can delete an item', () => {
  const dragOrderList = mount(<DragOrderList initialItemsData={initialItemsData} />)
  dragOrderList.find('.button-delete').at(1).simulate('click')
  expect(dragOrderList.find('.item').length).toEqual(4)
})
