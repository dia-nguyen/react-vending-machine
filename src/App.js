import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardine from "./Sardine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/sardine" element={<Sardine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
