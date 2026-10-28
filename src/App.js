import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Books from "./components/Books";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservas" element={<Books />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<h2 className="notfound">Página no encontrada</h2>} />
        </Routes>
      </main>
      <footer>© 2026 Hotel Sol</footer>
    </div>
  );
}

export default App;
