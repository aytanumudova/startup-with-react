import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

// Components
import Navbar from "./components/navbar";
import Introsection from "./components/introsection";
import CardsSection from "./components/cardsSection";
function App() {
  return (
    <>
      <Navbar />
      <Introsection />
      <CardsSection />
    </>
  );
}

export default App;
