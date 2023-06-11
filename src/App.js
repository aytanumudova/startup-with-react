import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

// Components
import Navbar from "./components/navbar";
import Introsection from "./components/introsection";
import CardsSection from "./components/cardsSection";
import Reservations from "./components/reservations";
function App() {
  return (
    <>
      <Navbar />
      <Introsection />
      <CardsSection />
      <Reservations />
  
    </>
  );
}

export default App;
