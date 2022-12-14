import React, { useState ,createContext, useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { provider, auth } from '../../firebase';

const Context = createContext();

export function UserProvider({ children }) {

  const [displayName, setDisplayName] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(response => {
      setDisplayName(response.user.displayName);
      setPhotoURL(response.user.photoURL);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <Context.Provider value={{
      signInWithGoogle,
      displayName,
      photoURL,
      setDisplayName,
      setPhotoURL,
    }}
    >
      { children }
    </Context.Provider>
  );
};

export const UserContext = () => useContext(Context);