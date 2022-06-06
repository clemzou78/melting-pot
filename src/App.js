import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Echo from './Echo';
import AllOver from './AllOver';
import Header from './Header';
import InTheNews from './InTheNews';
import Receipts from './Receipts';
import Myth from './Myth';
import Set from './Set';
import Home from './Home';
import InUse from './InUse';

function App() {
  return (
    <>
            
            <BrowserRouter>
            <Header />
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="echo" element={<Echo />} />
              <Route path="all-over-the-world" element={<AllOver />} />
              <Route path="in-the-news" element={<InTheNews />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="myth" element={<Myth />} />
              <Route path="the-set" element={<Set />} />
              <Route path="in-use" element={<InUse />} />
            </Routes>
          </BrowserRouter>
            </>
  );
}

export default App;
