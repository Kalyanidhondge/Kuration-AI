import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = ({ setUser  }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser (result.user);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div>
      <h1>Lead Enrichment Tool</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;