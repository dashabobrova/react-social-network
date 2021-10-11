import React from "react"

let Users = (props) => {

    // побочный эффект - говно
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fallowed: false,
                photoUrl: 'https://picsum.photos/100/100?page=1',
                fullName: 'Dmitry',
                status: 'I am boss',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                fallowed: true,
                photoUrl: 'https://picsum.photos/100/100?page=2',
                fullName: 'Sasha',
                status: 'I am boss',
                location: {
                    city: 'Moskow',
                    country: 'Russia'
                }
            },
            {
                id: 3,
                fallowed: false,
                photoUrl: 'https://picsum.photos/100/100?page=3',
                fullName: 'Andrew',
                status: 'I am boss',
                location: {
                    city: 'Kiev',
                    country: 'Ukrain'
                }
            }
        ]);
    }
    

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='ava'/>
                        </div>
                        <div>
                            {
                                u.fallowed 
                                ? <button onClick={() => {props.unfollow(u.id)}}>unFollow</button > 
                                : <button onClick={() => {props.follow(u.id)}}>follow</button>
                            }
                           
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;