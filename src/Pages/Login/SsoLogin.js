// // import React from 'react';
// // import { useOAuth2CodePKCE } from 'react-oauth2-code-pkce';

// // const Login = () => {
// //   const { authCodeRequest } = useOAuth2CodePKCE({
// //     clientId: 'YOUR_CLIENT_ID',
// //     authorizationUri: 'YOUR_AUTHORIZATION_ENDPOINT',
// //     redirectUri: 'YOUR_REDIRECT_URI',
// //     scopes: ['openid', 'profile'], // Add any required scopes
// //   });

// //   const handleLogin = () => {
// //     authCodeRequest();
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleLogin}>Login with OAuth 2.0</button>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import SignIn from './SignIn'

// export default (ChildComponent) => {
//   class AuthenticatedComponent extends Component {
//     static propTypes = {
//       hasAuthToken: PropTypes.bool.isRequired
//     };

//     render () {
//       const { hasAuthToken } = this.props
//       return (hasAuthToken
//         ? <ChildComponent {...this.props} />
//         : <SignIn />
//       )
//     }
//   }

//   const mapStateToProps = ({session}) => (session)

//   return connect(mapStateToProps)(AuthenticatedComponent)
// }
