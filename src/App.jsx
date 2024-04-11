import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/feed" element={<h1>FEED PAGE</h1>} />
          <Route path="/complaint" element={<h1>COMPLAINT PAGE</h1>} />
          <Route path="/stats" element={<h1>STATS PAGE</h1>} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
};


export default App
