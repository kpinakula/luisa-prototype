import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Resources extends Component {
  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.props.database.collection('resources').add({
          content: reader.result,
          name: file.name
        })
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsText(file);
    });
  };

  render() {
    return (
      <div>
        <div>List</div>
        <Dropzone onDrop={this.onDrop.bind(this)} />
      </div>
    );
  }
}

export default Resources;
