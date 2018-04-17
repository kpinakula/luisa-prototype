import React, { Component } from 'react';

class ResourceListItem extends Component {
  render() {
    return (
      <li>{this.props.data.id}</li>
    )
  }
}
export default ResourceListItem;