import './App.css';
import { WebAuth } from 'auth0-js'


function App() {    
  console.log(process.env)    
  const auth0 = new WebAuth({
    domain: 'id-dev.wanda.space',
    responseType: 'code',
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const loginOptions = {    
    scope: "write:items read:items openid profile email read:orders write:orders",
    audience: "https://api.partner.dev.wanda.space",
    prompt: 'consent',
    redirectUri: process.env.REACT_APP_REDIRECT_URL ??'https://wanda-space.github.io/oauth-example',
  }
const logoutOptions = {returnTo: process.env.REACT_APP_REDIRECT_URL ??'https://wanda-space.github.io/oauth-example'}
  return (
    <div className="App">
      <header className="App-header"><button onClick={()=>auth0.authorize(loginOptions)}>log in</button><button onClick={()=>auth0.logout(logoutOptions)}>log out</button>{code && <p>Auth code:<br />{code}</p>}</header>
    </div>

  );
} 

export default App;
