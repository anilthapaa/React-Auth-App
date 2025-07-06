import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);


// This code creates an AuthContext using React's Context API to manage user authentication state.
// The AuthProvider component wraps the application and provides the user state and setUser function to its children.
// The useAuth hook allows components to access the authentication context easily.          