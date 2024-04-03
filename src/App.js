import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Bgsection from "./Bgsection/Bgsection";
import Products from "./Products/Product";
import Xiaomi from "./Xiaomi/Xiaomi";
import Support from "./Support/Support";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Bgsection />
      <Products />
      <Xiaomi />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
