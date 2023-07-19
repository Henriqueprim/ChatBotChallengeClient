import React, { useState } from "react";
import api from "../Services/Api";
import Login from "./Login";
import NavBar from "./Navbar";


function Chat(props) {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [LoginSeen, setLoginSeen] = useState(false);
    const [LoginButton, setLoginButton] = useState(false);
    const [chatUsername, setChatUsername] = useState(localStorage.getItem("username") || "user");
    const [showTopics, setShowTopics] = useState(false);
    
    const apply = "https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp";
    const conditions = "https://www.investopedia.com/loan-terms-5075341";


    const getUsername = () => {
        const username = localStorage.getItem("username");
        setChatUsername(username);
    };

    const generateChatId = () => {
        const chatId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        return chatId;
    };
    
    const [chat_id, setChat_id] = useState(generateChatId());
    
    const toggleButton = () => {
      setLoginButton(!LoginButton);
    };
  
    const togglePop = () => {
      setLoginSeen(!LoginSeen);
    };

    const toggleTopics = () => {
        setShowTopics(!showTopics);
    };

    const chat = async (e, message) => {
        e.preventDefault();
        
        if(!message) return;
        const newChats = [...chats, {
            chat_id: chat_id,
            username: chatUsername,
            userMessage: message,
        }];
        setChats(chats => newChats);
        setMessage("");

        const { data } = await api.post("/chat", {
            chat_id: chat_id,
            username: chatUsername,
            userMessage: message,
        });

        if(data.response.title === 'loginMessage') {
            toggleButton();
        };

        if(data.response.title === 'loan') {
            toggleTopics();
        } else {
          if(showTopics) {
            toggleTopics();
          }
        };

        setChats(chats => [...chats, {
            chat_id: chat_id,
            username: 'system',
            userMessage: data.response.response,
        }]);
    };

    return (
        <div>
            <NavBar />
            <h1>Chat</h1>
            <section>
                {chats && chats.length
                  ? chats.map((chat, index) => (
                      <p key={index} className={chat.username === "user" ? "user_msg" : ""}>
                        <span>
                          <b>{chat.username}</b>
                        </span>
                        <span>:</span>
                        <span>
                            {chat.userMessage}
                        </span>
                      </p>
                    ))
                  : ""}
            </section>
            <section>
              {showTopics ? <ul>
                <a 
                  href={ apply }
                  target="_blank"
                >
                  Do you want to apply for a loan?
                </a>
                <a 
                  href={ conditions }
                  target="_blank"
                >
                  Loan conditions
                </a>
                <a 
                  href="/help"
                  target="_blank"
                >
                  Help
                </a>
              </ul> : null}
            </section>
            <section>
                {LoginButton ? <button onClick={togglePop}>Login</button> : null}
                {LoginSeen ? <Login
                    toggle={togglePop}
                    setChatUsername={getUsername}
                    toggleButton={toggleButton}    
                /> : null}
            </section>
            <form action="" onSubmit={(e) => chat(e, message)}>
              <input
                type="text"
                name="message"
                value={message}
                placeholder="Type a message here and hit Enter..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </form>
        </div>
    )
};

export default Chat;

