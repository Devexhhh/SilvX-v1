import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;