import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import ReactOutlineHider from '../src'

Enzyme.configure({
  adapter: new Adapter()
})

describe('<ReactOutlineHider/>', () => {
  it('should mount without crashing', () => {
    const wrapper = mount(<ReactOutlineHider />)
    const tree = mountToJson(wrapper)
    expect(tree).toBeDefined()
  })
})
