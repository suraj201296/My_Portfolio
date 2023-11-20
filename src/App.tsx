import Navbar from "./components/Navbar/Navbar"
import Contact from "./pages/contact/Contact"
import Footer from "./pages/footer/Footer"
import Intro from "./pages/intro/Intro"
import Skills from "./pages/skills/Skills"
import Works from "./pages/works/Works"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
