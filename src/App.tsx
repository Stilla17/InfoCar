import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/layout";
import Home from "./pages/home";
import Models from "./pages/models";
import Item from "./pages/item";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models/:name" element={<Models />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
