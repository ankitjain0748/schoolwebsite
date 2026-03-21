import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Home/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="App" >
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;