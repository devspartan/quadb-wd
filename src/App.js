import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/Navbar/TopNav";
import NavbarBanner from "./Components/Navbar/NavbarBanner";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import SearchComp from "./Components/Navbar/SearchComp";
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
