import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Campus from "./components/Campus";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Academics from "./components/Academics";
function App() {
  return (
    <>
    <CustomCursor />
    <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Campus />
        <Admissions />
        <Academics />
      </main>
        <Footer />
    </>
  );
}

export default App;