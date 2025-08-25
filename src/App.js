import Main from './components/Main';
import Messages from './components/Messages';
import Welecome from './components/Welecome';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path='' element={<Main/>}>
            <Route index element={<Welecome />}/>
            <Route path=':url' element={<Messages />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
