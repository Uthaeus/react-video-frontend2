import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import EditUser from "../components/auth/edit-user";

function UserPage() {
    const [showUserForm, setShowUserForm] = useState(false);
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="loading">
                <h1>No User To Display</h1>
                <Link to="/sign-in">Sign In</Link>
                <Link to="..">Back</Link>
            </div>
        );
    }

    return (
        <div className="userpage-container">
            <div className="userpage-user-info-wrapper">
                <p className="user-info-item">Username: <span className="username-span">{user.username}</span></p>
                <p className="user-info-item">Email: <span className="email-span">{user.email}</span></p>

                <button className="edit-user-btn" onClick={() => setShowUserForm(!showUserForm)}>Edit User</button>
            </div> 

            <div className="userpage-user-form-wrapper">
                {showUserForm && <EditUser />}
            </div>
        </div>
    );
}

export default UserPage;