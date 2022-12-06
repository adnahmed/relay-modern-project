import React, {createContext, useContext, useEffect, useState} from "react";
/*
 import * as firebase from "firebase/app";
 import "firbase/auth";
*/

/*
    Add Firebase credentials
    firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        projectId: "",
        appID: "",
    });

 */

class User {
    public name: string = '';
    public username: string = '';
}

interface AuthContext {
    user?: User
    signin: (username: string, password: string) => User
    signup: (username: string, password: string) => User
}

const authContext = createContext<AuthContext | undefined>(undefined);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return (<authContext.Provider value={auth}> {children} </authContext.Provider>);
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState<User | undefined>(undefined); // Persistent State
    // Wrap any `auth api` methods we want to use making sure ...
    // ... to save the user to state.
    const signin = (email, password) => {
        setUser(new User())
        /*
            return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((response) => {
                    setUser(response.user);
                    return response.user;
                  });
               };
         */
        return new User();
    }

    const signup = (email, password) => {
        /*
        return firbase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
                });
             };
         */
        if (0) throw new Error("Unauthorized");
        return new User();
    }

    const signout = () => {
        /*
        *  return firebase
        *       .auth()
        *       .signout()
        *       .then(() => {
        *           setUser(false);
        *       });
        * */
        return new User();
    }
    const sendPasswordResetEmail = (email) => {
        /*
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
                });
            };
         */
        return new User(); }
    const confirmPasswordReset = (code, password) => {
        /*
        * return firebase
        *   .auth()
        *   .confirmPasswordReset(code, password)
        *   .then(() => {
        *       return true;
        *   });
        * };
        * */
        return new User();
    }

    // Subscribe to use on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        /*
        const unsubscribe = firbase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        })

         */
        // Cleanup subscription on unmount
        // return () => unsubscribe();
        return
    }, [])

    return {
        user,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}