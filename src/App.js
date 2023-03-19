import logo from './logo.svg';
import Main from './components/Main';
import { Messages,Welecome } from './components/Main';
import { Routes, Route, NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
          <Route>
            <Route path='' element={<Main/>}>
              <Route index element={<Welecome />}/>
              <Route path=':url' element={<Messages />}/>
            </Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
