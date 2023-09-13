
import './App.css';
import Home from './pages/home';
import StudentHome from './pages/studentHome';
import AdminHome from './pages/adminHome';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studentHome" element={<StudentHome />} />
      <Route path="/adminHome" element={<AdminHome />} />

      {/* <Route path="/Student" element={<Student />} />
      <Route path="/Login" element={<Login />} /> */}
    </Routes> 
    </Router>
    </div>
  );
}

export default App;
