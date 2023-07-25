import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Header from '../components/Header/Header';
import Login from '../pages/Login/Login';

const AuthContext = createContext({});

export function AuthProvider({authService, children}) {
    const [user,setUser] = useState(undefined);

    useEffect(()=>{
        authService.me().then((user) => setUser(user)).catch(console.error);
    },[authService]);

    const signUp = useCallback(
        async (username, password, name, email, url) =>
            authService
                .signup(username, password, name, email, url)
                .then((user) => setUser(user))
    , [authService]);

    const logIn = useCallback(
        async (username, password) => 
            authService
                .login(username, password)
                .then((user) => setUser(user))
    , [authService]);

    const logOut = useCallback(
        async () => authService.logout().then(() => setUser(undefined))
    , [authService]);

    const context = useMemo(
        () => ({
            user,
            signUp,
            logIn,
            logOut,
        })
    , [user, signUp, logIn, logOut])

    return (
        <AuthContext.Provider value={context}>
            {user ? (
                children
            ) : (
                <div className='app'>
                    <Header/>
                    <Login onSignUp={signUp} onLogin={logIn} />
                </div>
            )}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}

