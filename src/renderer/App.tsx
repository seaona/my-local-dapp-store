import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import "tailwindcss/tailwind.css";
import Dapps from '../view/Dapps'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dapps />} />
      </Routes>
    </Router>
  );
}
