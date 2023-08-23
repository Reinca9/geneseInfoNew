import React, { useState } from "react";

interface UserAuthProps {
  children: React.ReactNode;
}

const UserAuth: React.FC<UserAuthProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login button clicked");
    console.log("Entered username:", username);
    console.log("Entered password:", password);
  
    const envUsername = process.env.REACT_APP_USERNAME;
    const envPassword = process.env.REACT_APP_PASSWORD;
  
    console.log("Environment username:", envUsername);
    console.log("Environment password:", envPassword);
  
    if (username === envUsername && password === envPassword) {
      console.log("Authentication successful");
      setAuthenticated(true);
    } else {
      console.log("Authentication failed");
    }
  };

  if (authenticated) {
    return <>{children}</>; // Return the children when authenticated
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserAuth;
