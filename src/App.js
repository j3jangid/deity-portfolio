import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LoginPage from './LoginPage';
import Layout from './Layout';

const code = uuidv4()

function App() {
  const [userPassword, setUserPassword] = useState()

  useEffect(() => {
    localStorage.setItem('securityCode', code);
  }, [])

  return (
    <div>
      {
        userPassword === code ?
          <Layout />
          :
          <LoginPage
            userPassword={userPassword}
            setUserPassword={setUserPassword}
          />
      }
    </div>
  );
}

export default App;
