import React, { Component } from 'react';
import ResourceListItem from './ResourceListItem';

class ResourceList extends Component {
  renderList() {
    return this.props.resources.map((resource, index) => {
      return <ResourceListItem key={index} data={resource} />
    })
  }
  
  render() {
    return (
      <div>
        List
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default ResourceList;