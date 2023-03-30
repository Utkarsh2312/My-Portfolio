import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
