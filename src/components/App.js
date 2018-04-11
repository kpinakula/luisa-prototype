import React, { Component } from 'react';
import Resources from './Resources';
import firebase from 'firebase';
import { firebaseKeys } from '../../secrets';

import 'firebase/firestore';
import '../App.css';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);
  }

  render() {
    return (
      <Resources database={firebase.firestore()} />
    );
  }
}

export default App;
