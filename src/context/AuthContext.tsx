import { createContext, useEffect, useState } from 'react';
import { tryFetchData } from '../services/common';
import { ToastMessage } from '../components/Toast/ToastProps';
import { fetchDataProps } from '../services/common/FetchDataProps';
import { Employee } from '../entities/Employee';
import { getSelfEmployee } from '../services/cashier';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  currentUser?: Employee;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => { },
  logout: () => { },
  currentUser: {},
});

export const revokeTokens = async (
  setReturnMessage: React.Dispatch<React.SetStateAction<ToastMessage>>
): Promise<any> => {

  const refresh_token = localStorage.getItem('refresh_token');
  const request: fetchDataProps = {
    url: '/logout',
    method: 'POST',
    body: { refresh_token: refresh_token || '' },
  };
  return await tryFetchData({
    setReturnMessage,
    request,
  });
};


const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [_, setReturnMessage] = useState<ToastMessage>({
    message: '', variation: 'standard'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<Employee | undefined>();

  useEffect(() => {
    const setSelfEmployee = async () => {
      const employee = await (
        await getSelfEmployee({
          setReturnMessage,
        })
      )
      setCurrentUser(employee);
    }

    
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
      setSelfEmployee();
    }
    setIsLoading(false);
  }, []);


  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    revokeTokens(setReturnMessage);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  return (
    isLoading ? <h1>Loading...</h1> :
      <AuthContext.Provider value={{ isAuthenticated, login, logout, currentUser }}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContextProvider;
