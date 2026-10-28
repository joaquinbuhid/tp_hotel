import Header from "./components/Header";
import About from "./components/About";
import Books from "./components/Books";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Books />
        <Contact />
      </main>
      <footer>© 2026 Hotel Sol</footer>
    </div>
  );
}

export default App;
