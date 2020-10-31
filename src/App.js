import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/Navbar/TopNav";
import NavbarBanner from "./Components/Navbar/NavbarBanner";

function App() {
  return (
    <div style={{minWidth: "1000px"}}>
      <TopNav />
      <NavbarBanner />
    </div>
  );
}

export default App;
