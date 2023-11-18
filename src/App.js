import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Components
import Navbar from "./components/navbar";
import Introsection from "./components/introsection";
import CardsSection from "./components/cardsSection";
import Reservations from "./components/reservations";
import FastReports from "./components/fastReports";
import CountSection from "./components/countSection";
import PricesSection from "./components/pricesSection";
import DownloadSection from "./components/downloadSection";
function App() {
  return (
    <>
      <Navbar />
      <Introsection />
      <CardsSection />
      <Reservations />
      <FastReports />
      <CountSection />
      <PricesSection />
      <DownloadSection />
    </>
  );
}

export default App;
