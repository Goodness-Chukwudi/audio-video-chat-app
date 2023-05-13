import React from 'react';
import ChatView from './features/chartView/chatView';
import './App.css';
import {useSocket} from './Socket';

function App() {
  
  useSocket();

  return (
    <div className="">
        <ChatView />
    </div>
  );
}

export default App;
