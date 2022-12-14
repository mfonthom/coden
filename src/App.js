import Navbar from "./organisms/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import Hero from "./templates/home/hero/Hero";
import Feature from "./templates/home/feature/Feature";
import Services from "./templates/home/services/Service";
import Footer from "./organisms/footer/Footer";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Feature />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
