import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import WorkingProcess from "./components/WorkingProcess";
import PaymentMethods from "./components/PaymentMethods";
import GrowthTimeline from "./components/GrowthTimeline";
import Advantages from "./components/Advantages";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WorkingProcess />
        <PaymentMethods />
        <GrowthTimeline />
        <Advantages />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
