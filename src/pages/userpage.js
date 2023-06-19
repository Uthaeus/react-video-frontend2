import { useContext } from "react";

import { UserContext } from "../store/user-context";

function UserPage() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>User Page</h1>
            <hr />
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserPage;