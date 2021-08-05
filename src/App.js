import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/css/portfolio.css";
import Header from "./components/HeaderComponent";
import AboutMe from "./components/AboutComponent";
import ProjectArea from "./components/ProjectAreaComponent";
import Footer from "./components/FooterComponent";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <AboutMe />
      <ProjectArea />
      <Footer />
    </>
  );
}

export default App;
