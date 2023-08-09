// //! old code
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { OAuth2CodePKCEProvider } from 'react-oauth2-code-pkce';
import { store } from './Features/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <OAuth2CodePKCEProvider clientId="YOUR_CLIENT_ID" redirectUri="YOUR_REDIRECT_URI">
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />   
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  // </OAuth2CodePKCEProvider>
);


//? with o auth 2


// import React, { useContext } from 'react'
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { AuthContext, AuthProvider } from 'react-oauth2-code-pkce'
// import { Button, Container, Paper, Typography } from '@mui/material';

// const authConfig = {
//   clientId: 'account',
//   authorizationEndpoint: 'http://localhost:8080/realms/test/protocol/openid-connect/auth',
//   logoutEndpoint: 'http://localhost:8080/realms/test/protocol/openid-connect/logout',
//   tokenEndpoint: 'http://localhost:8080/realms/test/protocol/openid-connect/token',
//   redirectUri: 'http://localhost:3000/',
//   scope: 'profile openid',
//   // Example to redirect back to original path after login has completed
//   // preLogin: () => localStorage.setItem('preLoginPath', window.location.pathname),
//   // postLogin: () => window.location.replace(localStorage.getItem('preLoginPath') || ''),
//   decodeToken: true,
//   autoLogin: false,
// }





// function LoginInfo() {
//   const { tokenData, token, login, logOut, idToken, error } = useContext(AuthContext)

//   if (error) {
//     return (
//       <>
//         <div style={{ color: 'red' }}>An error occurred during authentication: {error}</div>
//         <button onClick={() => logOut()}>Logout</button>
//       </>
//     )
//   }

//   return (
//     <>
//       {token ? (
//         <>
//           <App />
//           {/* <div>
//             <h4>Access Token (JWT)</h4>
//             <pre
//               style={{
//                 width: '400px',
//                 margin: '10px',
//                 padding: '5px',
//                 border: 'black 2px solid',
//                 wordBreak: 'break-all',
//                 whiteSpace: 'break-spaces',
//               }}
//             >
//               {token}
//             </pre>
//           </div>
//           <div>
//             <h4>Login Information from Access Token (Base64 decoded JWT)</h4>
//             <pre
//               style={{
//                 width: '400px',
//                 margin: '10px',
//                 padding: '5px',
//                 border: 'black 2px solid',
//                 wordBreak: 'break-all',
//                 whiteSpace: 'break-spaces',
//               }}
//             >
//               {JSON.stringify(tokenData, null, 2)}
//             </pre>
//           </div>
//           <button onClick={() => logOut()}>Logout</button> */}
//         </>
//       ) : (
//         <>
//           {/* <div>You are not logged in.</div>
//           <button onClick={() => login()}>Login</button> */}
//           <Container maxWidth="sm" sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh', // Make the container full height of the viewport
//           }}>
//             <Paper elevation={3} sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//               {/* Replace 'your-image-url' with the URL of your login screen background image */}
//               <img src="your-image-url" alt="Login Background" style={{ width: '100%', marginBottom: '1rem' }} />

//               <Typography variant="h5" gutterBottom>
//                 Welcome to Our App
//               </Typography>

//               {/* Add your login button functionality */}
//               <Button onClick={() => login()} variant="contained" color="primary">
//                 Login
//               </Button>
//             </Paper>
//           </Container>
//         </>
//       )}
//     </>
//   )
// }








// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <OAuth2CodePKCEProvider clientId="YOUR_CLIENT_ID" redirectUri="YOUR_REDIRECT_URI">
//   <React.StrictMode>
//     <AuthProvider authConfig={authConfig}>

//       <LoginInfo />
//     </AuthProvider>

//   </React.StrictMode>
//   // </OAuth2CodePKCEProvider>
// );


// //? with react auth hook

// import React, { useState } from 'react';
// import { Issuer, Client } from 'openid-client';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const login = async () => {
//     const issuer = await Issuer.discover('https://naama.sa');
//     const client = new Client({
//       client_id: 'your-client-id',
//       client_secret: 'your-client-secret',
//       redirect_uris: ['your-redirect-uri'],
//       response_types: ['code'],
//     });

//     const authorizationUrl = client.authorizationUrl({
//       redirect_uri: 'your-redirect-uri',
//       scope: 'openid profile', // Define your desired scopes
//     });

//     window.location.href = authorizationUrl;
//   };

//   // In your callback route/component, handle the code exchange and token retrieval

//   return (
//     <div>
//       <h1>React SSO Example</h1>
//       {loggedIn ? (
//         <p>You are logged in!</p>
//       ) : (
//         <button onClick={login}>Log in with SSO</button>
//       )}
//     </div>
//   );
// };

// export default App;
