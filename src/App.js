import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewContact from "./pages/NewContact";
import ContactLayout from "./ContactLayout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />

      {/* nested route */}
      <Route path='/contacts' element={<ContactLayout />}>
        <Route index element={<Contacts />} />
        <Route path=':id' element={<Contact />} />
        <Route path='new' element={<NewContact />} />
      </Route>

      {/* <Route path='/contacts' element={<Contacts />} />
      <Route path='/contacts/:id' element={<Contact />} />
      <Route path='/contact/new' element={<NewContact />} /> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
