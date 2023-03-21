import SliderImageCard from "./components/Design/SliderImageCard";
import "./components/UI/SCSS/UI.css";
import "./components/Design/SCSS/Design.css";
import AboutFurniture from "./components/Design/AboutFurniture";
import Header from "./components/Design/Header";
function App() {
  return (
    <main className="App">
      <Header />
      <SliderImageCard />
      <AboutFurniture />
    </main>
  );
}

export default App;
