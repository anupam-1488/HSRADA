import React, { createContext, useContext, useState, useEffect } from 'react';
 
interface User {
  email: string;
  isAdmin: boolean;
}
 
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}
 
const AuthContext = createContext<AuthContextType | undefined>(undefined);
 
// Try to get user from localStorage
const getStoredUser = (): User | null => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};
 
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getStoredUser());
 
  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
 
  const login = (email: string, password: string) => {
    if (email === 'admin' && password === 'admin') {
      setUser({ email, isAdmin: true });
      return true;
    } else if (email === 'customer@demo.com' && password === 'demo123') {
      setUser({ email, isAdmin: false });
      return true;
    }
    return false;
  };
 
  const logout = () => {
    setUser(null);
  };
 
  return (
<AuthContext.Provider value={{ user, login, logout }}>
      {children}
</AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};