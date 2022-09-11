import Home from "./pages/Home";
import Memo from "./pages/Memo";
import MenuList from "./pages/MenuList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      {/* <Memo /> */}
      <Navbar />
      <Home />
      <MenuList />
    </div>
  );
}
