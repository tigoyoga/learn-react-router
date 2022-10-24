import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/contacts/:id' element={<Contact />} />
    </Routes>
  );
}

export default App;
