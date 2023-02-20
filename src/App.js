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
    redirectUri: 'https://wanda-space.github.io/oauth-example',
  }
const logoutOptions = {returnTo: 'https://wanda-space.github.io/oauth-example'}
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>auth0.authorize(loginOptions)}>log in</button>
        <button onClick={()=>auth0.logout(logoutOptions)}>log out</button>
      {code && <p className="code">Auth code:<br />{code}</p>}
      </header>
      {code && <code>
        {`curl --request POST \\`}<br/>
 { `--url 'https://id-dev.wanda.space/oauth/token' \\`}<br/>
  {`--header 'content-type: application/x-www-form-urlencoded' \\`}<br/>
 { `--data 'grant_type=authorization_code&client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&client_secret=YOUR_CLIENT_SECRET&code=${code}&redirect_uri={https://yourApp/callback}'
`}
      </code>}
    </div>

  );
} 

export default App;
