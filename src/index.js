import React from 'react'
import outlineHider from 'outline-hider'

/* eslint class-methods-use-this:0 */
class ReactOutlineHider extends React.Component {
  componentWillMount() {
    this.unregister = outlineHider()
  }
  componentWillUnmount() {
    if (this.unregister) {
      this.unregister()
    }
  }
  render() {
    return null
  }
}

export default ReactOutlineHider
