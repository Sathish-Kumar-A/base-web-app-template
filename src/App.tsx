import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './features/login/Login';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login} />
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
