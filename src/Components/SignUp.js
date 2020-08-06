
// import React, { Component } from 'react'
// import firebase from 'firebase'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'




// class SignUp extends Component {
//     state = { isSignedIn: false }
//     uiConfig = {
//         signInFlow: 'popup',
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//             firebase.auth.EmailAuthProvider.PROVIDER_ID
//         ],
//         callbacks: {

//             signInSuccess: () => false
//         }

//     }
//     componentDidMount = () => {
//         this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {

//             this.setState({
//                 isSignedIn: !!user
//             })
//             console.log('name:', user)
//         })
//     }
//     // componentWillUnmount() {
//     //     this.unregisterAuthObserver()
//     // }
//     render() {
//         return (
//             <div>
//                 {this.state.isSignedIn ? (
//                     <span>
//                         <h2>Sign In</h2>

//                         <button className='btn btn-primary' onClick={firebase.auth().signOut()}>Sign Out</button>
//                     </span>
//                 ) : (
//                         <StyledFirebaseAuth
//                             uiConfig={this.uiConfig}
//                             firebaseAuth={firebase.auth()} />
//                     )}

//             </div>
//         )
//     }
// }
// export default SignUp;