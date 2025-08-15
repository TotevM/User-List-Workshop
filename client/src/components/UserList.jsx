import { useEffect } from 'react';
import { useState } from 'react';
import UserListItem from './UserListItem';
import CreateEdit from './CreateEdit';
import DeleteUser from './DeleteUser';
import UserDetails from './UserDetails';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
            .then((res) => res.json())
            .then((data) => setUsers(Object.values(data)));
    }, []);

    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const closeUserClickHandler = () => {
        setShowCreate(false);
        setSelectedUserId(null);
    };

    const createUserHandler = (user, isEdited = false) => {
        if (!isEdited) {
            setUsers((prevUsers) => [...prevUsers, user]);
        } else {
            setUsers((prevUsers) =>
            prevUsers.map((u) => (u._id === user._id ? user : u))
        );
        }
    };

    const onClickShowDeleteHandler = (userId) => (event) => {
        setSelectedUserId(userId);
        setShowDelete(true);
    };

    const closeDeleteHandler = () => {
        setShowDelete(false);
        setSelectedUserId(null);
    };

    const onEditHandler = (userId) => {
        setSelectedUserId(userId);
        setShowCreate(true);
    };

    const onShowDetailsHandler = (userId) => {
        setSelectedUserId(userId);
        setShowDetails(true);
    };
    const closeDetailsHandler = () => {
        setShowDetails(false);
        setSelectedUserId(null);
    };
    return (
        <>
            {showCreate && (
                <CreateEdit
                    onClose={closeUserClickHandler}
                    onCreate={createUserHandler}
                    userId={selectedUserId}
                    onEdit={onEditHandler}
                />
            )}
            {showDelete && (
                <DeleteUser
                    userId={selectedUserId}
                    onClose={closeDeleteHandler}
                    setUsers={setUsers}
                />
            )}
            {showDetails && (
                <UserDetails
                    onClose={closeDetailsHandler}
                    userId={selectedUserId}
                />
            )}

            <table className='table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserListItem
                            key={user._id}
                            {...user}
                            onDelete={onClickShowDeleteHandler}
                            onEdit={onEditHandler}
                            showDetails={onShowDetailsHandler}
                        />
                    ))}
                </tbody>
            </table>
            <button onClick={createUserClickHandler} className='btn-add btn'>
                Add new user
            </button>
        </>
    );
}
