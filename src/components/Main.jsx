import { NavLink, Outlet } from 'react-router-dom';
import '../css/main.css';
import { useEffect, useState } from 'react';
import { getConversations } from '../services/api';

function Main(){
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getConversations().then((data) => { if (isMounted) setConversations(data); });
        return () => { isMounted = false; };
    }, []);

    return(
        <div className="main">
            <div className="left">


                <div className="header">
                    <div className="button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <input type="text" placeholder='Search'/>
                </div>
                <div className="center">
                    <div className="messages">
                        {conversations.map((c) => (
                            <NavLink key={c.id} className='message-a' to={`/${c.id}`}>
                                <div className="message-div">
                                    <div className="left">
                                        <div className="image"></div>
                                    </div>
                                    <div className="center">
                                        <div className="username">{c.name}</div>
                                        <div className="last-message"><i className="fas fa-check"></i> {c.lastMessage}</div>
                                    </div>
                                    <div className='right'>
                                        <div className="date">{c.date}</div>
                                        <div className='messages'>{c.unreadCount}</div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <div className="contact"></div>
                </div>
                <div className="footer">
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i className="fa-solid fa-message"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i className="fas fa-credit-card"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i className="fa-solid fa-plus"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i className="fa-solid fa-address-book"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i className="fa-solid fa-gear"></i>
                    </label>
                </div>

            </div>
            <div className="right">
                <Outlet />
            </div>
        </div>
    )
}

export default Main;