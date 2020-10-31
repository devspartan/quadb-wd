import "./App.css";
import Content from "./Components/Content/Content";
import Navhandle from "./Components/Navbar/Navhandle";
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div style={{ minWidth: "1000px" }}>
      <Navhandle />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
