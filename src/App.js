import { Navbar, Hero, PartnerCarousel, HowTo, Cart } from "./Components";
import { Popup } from "./Components/Popup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Popup />
      <Hero />
      <PartnerCarousel />
      <HowTo />
      <Cart />
    </div>
  );
}

export default App;
