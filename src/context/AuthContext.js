"use client";
import React from "react";
import Loading from "../app/components/Loading";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "../firebase/config";

const auth = getAuth(firebase_app);

// Set the default value, which is an empty array. Create context is used to create a Context object, which can be passed around without using props.
export const AuthContext = React.createContext([]);

// useContexts returns the current context value.
export const useAuthContext = () => React.useContext(AuthContext);

// Function to logout
export const LogOut = () => {
  auth.signOut();
};
// Passing in children, which is any components that are nested inside of the AuthContextProvider. This function will wrap components.
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  // This effect is ran whenever its rendered, due to the empty dependency array passed into the end of the function.
  React.useEffect(() => {
    // OnAuthStateChanged is an observer that is notices when theres changes to the user sign in state.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // `auth` is the instance of the firebase authentication.

      // the callback function recieves `(user)` if its authenticated otherwise it recieves null.

      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      // Sets loading to false because its done processing this user information
      setLoading(false);
    });

    // Stop listening for changes
    return () => unsubscribe();
  }, []);

  // What is authcontext.provider
  return (
    // Value is a prop containing the active user
    // If loading, displays a loading div for feedback to the user.
    // Once its not loading, it renders all children components.
    <AuthContext.Provider value={{ user }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
