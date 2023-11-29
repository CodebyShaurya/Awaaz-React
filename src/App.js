import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Learnings from './Components/Learnings';
import AboutPage from './Components/AboutPage';
import DashboardPage from './Components/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnings" element={<Learnings />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
