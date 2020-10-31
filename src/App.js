import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/Navbar/TopNav";
import NavbarBanner from "./Components/Navbar/NavbarBanner";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div style={{minWidth: "1000px"}}>
      <TopNav />
      <NavbarBanner />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
