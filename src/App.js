import {BrowserRouter} from "react-router-dom";
import Menu from "./components/menu";
import Rotas from "./rotas/rotas";


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Rotas/>
      </BrowserRouter>
    </>
  );
}

export default App;
