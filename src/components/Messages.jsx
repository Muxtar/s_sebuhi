import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/main.css';
import { getMessages } from '../services/api';

function Messages() {
    const { url } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getMessages(url).then((data) => {
            if (isMounted) setMessages(data);
        });
        return () => { isMounted = false; };
    }, [url]);

    return (
        <div className="messages">
            <div className="head">
                <div className="left">
                    <div className="image-div">
                        <div className="image"></div>
                    </div>
                    <div className="about">
                        <div className="username">{url}</div>
                        <div className='date-ago'>last seen 5 minute ago</div>
                    </div>
                </div>
                <div className="right">
                    <div className="search"><i className="fas fa-search"></i></div>
                    <div className="phone"><i className="fa-solid fa-phone"></i></div>
                    <div className="dot"><i className="fas fa-ellipsis-h"></i></div>
                </div>
            </div>
            <div className="main">
                <div className="all-messages">
                    <div className="read-messages">
                        {messages.map((m) => (
                            m.sender === 'me' ? (
                                <div key={m.id} className="my-message">
                                    <div className="content">{m.content}</div>
                                </div>
                            ) : (
                                <div key={m.id} className="target-message">
                                    <div className="content">{m.content}</div>
                                </div>
                            )
                        ))}
                    </div>
                    <div className="write-messages">
                        <textarea cols="30" rows="2" placeholder='Messages'></textarea>
                        <i className="fa-solid fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;

