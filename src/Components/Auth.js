// import React, { useEffect, useState } from 'react';
// import { firebaseAuth } from '../Firebase'

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState();
//     const [pending, setPending] = useState(true);

//     useEffect(() => {
//         firebaseAuth.onAuthStateChanged((user) => {
//             setCurrentUser(user)
//             setPending(false)
//         });
//     }, []);

//     if (pending) {
//         return <>Loading...</>
//     }

//     return (
//         <AuthContext.Provider
//             value={{
//                 currentUser
//             }}
//         >
//             {children}

//         </AuthContext.Provider>
//     );
// };