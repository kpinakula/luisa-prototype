import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ResourceList from './ResourceList';

class Resources extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resources: []
    }
  }
  
  componentDidMount() {
    this.props.database
      .collection('resources')
      .onSnapshot((snapshot) => {
        console.log('coll: ', snapshot)
        this.setState({
          resources: snapshot.docs
        })
      });

    this.props.database
      .collection('resources')
      .doc('Acknowledgements.html')
      .get()
      .then(response => console.log('doc: ', response))
  }
  componentWillUnmount() {
    var unsubscribe = this.props.database
      .collection('resources')
      .onSnapshot(() => {});
    
    unsubscribe();
  }

  onDrop(acceptedFiles) {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.props.database
          .collection('resources')
          .doc(file.name)
          .set({
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
        <ResourceList resources={this.state.resources} />
        <Dropzone onDrop={this.onDrop.bind(this)} />
      </div>
    );
  }
}

export default Resources;
