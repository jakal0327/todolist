import { HashRouter, Route, Routes } from "react-router-dom";
import List from "./pages/list";
import Wrtie from "./pages/write";
import Update from "./pages/update";
import TodoContext from "./todoContext";

function App() {
  return (
    <HashRouter>
      <TodoContext>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/write" element={<Wrtie />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
      </TodoContext>
    </HashRouter>
  );
}

export default App;
