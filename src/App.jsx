import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./pages/Games";
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import AdminArea from "./pages/AdminArea"
import "./App.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="admin" element={<AdminArea />} />
        </Route>
      </Routes>
    </Router>
  );
}
