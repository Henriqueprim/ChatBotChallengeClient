import { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import api from "../Services/Api";

function Conversations() {
    const [conversations, setConversations] = useState([]);
    const username = localStorage.getItem("username");

    const BASE_URL = 'https://chat-bot-challenge-api.vercel.app';

    useEffect(() => {
        const getConversations = async () => {
            const { data } = await api.get(`/chat/conversations/${username}`);
            setConversations(data.chats);
        };
        getConversations();
    }, []);


    return (
        <div>
            <NavBar />
            <h1>Conversations of {username}</h1>
            <div>
                <h2>Click to download the CSV file</h2>
                <ul>
                    {conversations.map((conversation) => (
                        <li key={conversation._id}>
                            Chat from - 
                            <a 
                            key={conversation._id}
                            href={BASE_URL + `/chat/conversations/${username}/${conversation._id}`}
                        >
                            {conversation.updatedAt}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Conversations;