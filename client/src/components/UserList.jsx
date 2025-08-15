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
        function FetchData() {
            fetch('http://localhost:3030/jsonstore/users')
                .then((res) => res.json())
                .then((data) => setUsers(Object.values(data)));
        }
        FetchData();
    }, []);

    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const closeUserClickHandler = () => {
        setShowCreate(false);
    };


    const createUserHandler = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    }

    const onClickShowDeleteHandler = (userId) => (event) => {
        setSelectedUserId(userId);
        setShowDelete(true);
    };

    const closeDeleteHandler = () => {
        setShowDelete(false);
        setSelectedUserId(null);
    };

    const onEditHandler= (userId) => {
        setSelectedUserId(userId);
        setShowCreate(true);
    }

    const onShowDetailsHandler = (userId) => {
        setSelectedUserId(userId);
        setShowDetails(true);
    }
    const closeDetailsHandler = () => {
        setShowDetails(false);
        setSelectedUserId(null);
    }
    return (
        <>
            {showCreate && <CreateEdit onClose={closeUserClickHandler} onCreate={createUserHandler}/>}
            {showDelete && <DeleteUser userId={selectedUserId} onClose={closeDeleteHandler} setUsers={setUsers} />}
            {showDetails && <UserDetails userId={selectedUserId} onClose={closeDetailsHandler} />}

            <table className='table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            First name
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='arrow-down'
                                className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'>
                                <path
                                    fill='currentColor'
                                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                            </svg>
                        </th>
                        <th>
                            Last name
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='arrow-down'
                                className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'>
                                <path
                                    fill='currentColor'
                                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                            </svg>
                        </th>
                        <th>
                            Email
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='arrow-down'
                                className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'>
                                <path
                                    fill='currentColor'
                                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                            </svg>
                        </th>
                        <th>
                            Phone
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='arrow-down'
                                className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'>
                                <path
                                    fill='currentColor'
                                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='arrow-down'
                                className='icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'>
                                <path
                                    fill='currentColor'
                                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserListItem key={user._id} {...user} onDelete={onClickShowDeleteHandler} onEdit={onEditHandler} showDetails={onShowDetailsHandler}/>
                    ))}
                </tbody>
            </table>
            <button onClick={createUserClickHandler} className='btn-add btn'>
                Add new user
            </button>
        </>
    );
}
