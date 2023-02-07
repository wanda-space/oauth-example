import './App.css';
import { WebAuth } from 'auth0-js'


function App() {    
  console.log(process.env)    
  const auth0 = new WebAuth({
    domain: 'id-dev.wanda.space',
    redirectUri: process.env.REACT_APP_REDIRECT_URL,
    responseType: 'code',
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  return (
    <div className="App">
      <header className="App-header"><button onClick={()=>auth0.authorize()}>log in</button>{code && <p>Auth code:<br />{code}</p>}</header>
    </div>

  );
} 

export default App;
