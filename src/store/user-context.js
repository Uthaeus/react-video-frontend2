import { createContext, Provider, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: (user) => {},
    logoutUser: () => {}
});

function UserContextProvider(props) {
    const [user, setUser] = useState(null);

    function logoutUser() {
        setUser(null);
    }

    function loginUser(user) {
        setUser(user);
    }

    const values = {
        user,
        loginUser,
        logoutUser
    };

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;