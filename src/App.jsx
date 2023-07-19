import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './Components/Chat.jsx';
import Conversations from './Pages/Conversations.jsx';

function App() {

  return (    
    <Fragment>
      <Routes>
        <Route index path="/" element={ <Chat /> } />
        <Route exact path="/conversations/:username" element={ <Conversations /> } />
      </Routes>
    </Fragment>
  )
};

export default App;
