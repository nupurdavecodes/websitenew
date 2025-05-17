import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="bg-luxury-black min-h-screen text-luxury-cream">
      <header className="App-header">
        <a
          className="App-link mt-5 hover:text-luxury-brown transition-colors"
          href="https://emergent.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 border-luxury-beige rounded-full p-2 hover:border-luxury-brown transition-all">
            <img className="h-24 w-24" src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" alt="Logo" />
          </div>
        </a>
        <h1 className="luxury-title mt-8">Visa Buddy</h1>
        <p className="luxury-subtitle">Your premium companion for all visa-related services</p>
        <div className="flex space-x-4 mt-6">
          <button className="luxury-button">Learn More</button>
          <button className="luxury-button">Contact Us</button>
        </div>
      </header>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
