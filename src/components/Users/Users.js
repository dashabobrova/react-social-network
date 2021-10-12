import React from "react";
import s from './Users.module.css';
import avaPlaceholder from '../../img/ava.jpg';
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

 return (
    <div >
        <div className={s.test}>
    {
        pages.map (p=> {
            return <span className={props.currentPage === p ? s.chosenPage : null} 
                            onClick={(e) => {props.onPageChanged(p)}}>
                         {p} 
                    </span>
        })
    }
    </div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}><img src={u.photos.small !== null ? u.photos.small : avaPlaceholder } className={s.ava_img} alt='ava'/></NavLink>
                </div>
                <div>
                    {
                        u.fallowed 
                        ? <button onClick={() => {
                            
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "52db46d3-a6ab-4df4-9548-c8459fc02b06"
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                });

                        
                        }}>unFollow</button > 

                    
                        : <button onClick={() => {
                            
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "52db46d3-a6ab-4df4-9548-c8459fc02b06"
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                });

                        }}>follow</button>
                    }
                
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>"u.location.country"</div>
                    <div>"u.location.city"</div>
                </span>
            </span>
        </div>)
    }
</div>
 )
}

export default Users