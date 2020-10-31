import "./App.css";
import Content from "./Components/Content/Content";
import Navhandle from "./Components/Navbar/Navhandle";
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div style={{ minWidth: "1000px" }}>
      <Navhandle />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
