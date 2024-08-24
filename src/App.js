import './App.css';
import 'antd/dist/reset.css';
import Header from './components/header'
import Dashboard from './pages/dashboard';
import Edu from './pages/edu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  
  return (    
    <Router>
      <header>
        <div className='header'>
          <Header />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Trang Dashboard */}
          <Route path="/edu" element={<Edu />} /> {/* Trang Edu */}
        </Routes>
      </main>
    </Router>
  )
}

export default App;
