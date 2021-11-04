
import { createContext } from 'react';
import useFirebase from './useFirebase';

export const AuthContext = createContext();
const allContext = useFirebase
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;