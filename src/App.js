import React, { Component } from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Data from './Components/Data'
import './App.css';


class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {

      signInSuccessWithAuthResult: () => false
    }

  }
  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {

      this.setState({
        isSignedIn: !!user
      })
      console.log('name:', user)
    })
  }
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }
  render() {
    return (
      <div className='App'>
        {this.state.isSignedIn ? (

          <span >
            <button className='btn btn-primary' style={{ float: 'right', margin: '3px' }} onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <h1 style={{ textAlign: 'center', fontStyle: 'bold' }}>Welcome {firebase.auth().currentUser.displayName}!</h1>



            <Data />
          </span>

        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()} />
          )}

      </div>
    )
  }

}

export default App;
