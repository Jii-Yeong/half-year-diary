import axios from 'axios';
import { useState } from 'react';

function App() {
  const [ user, setUser ] = useState("");

  axios.get('/api/user/test').then((response) => {
    console.log(response);
    setUser(response.data.nickname);
  });
  return (
    <div className="App">
      <header className="App-header">
        {user}
      </header>
    </div>
  );
}

export default App;
