import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// Pages
import Home from './Pages/Home';
import BuildPage from './BuildPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BuildPage" element={<BuildPage />} />
     
        <Route path="*" element={<h1>Unknow error</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
