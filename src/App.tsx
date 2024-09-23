// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./components/organisms/layout";
import Details from "./pages/details";
import Item from "./pages/item";
const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
