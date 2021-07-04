import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/css/portfolio.css';
import Header from './components/HeaderComponent';
import AboutMe from './components/AboutComponent';
import Footer from './components/FooterComponent';


function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
