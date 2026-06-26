import Navbar from "./Component/Navbar"; 
import Home from "./Component/Home";
import { About } from "./Component/About";
import { Skills } from "./Component/Skill";
import { Projects } from "./Component/Projects";
import Footer from "./Component/Footer";
import { Contact } from "./Component/Contact";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About /> 
        <Skills /> 
        <Projects />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;