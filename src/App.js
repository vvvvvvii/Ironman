import Home from "./pages/Home";
import Memo from "./pages/Memo";
import MenuList from "./pages/MenuList";
import Navbar from "./components/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* <Memo /> */}
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu-list">
            <MenuList />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
