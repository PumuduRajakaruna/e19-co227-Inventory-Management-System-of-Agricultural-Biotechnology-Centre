
import './App.css';
import Home from './pages/home';
import studentHome from './pages/studentHome';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studentHome" element={<studentHome />} />

      {/* <Route path="/Student" element={<Student />} />
      <Route path="/Login" element={<Login />} /> */}
    </Routes> 
    </Router>
    </div>
  );
}

export default App;
