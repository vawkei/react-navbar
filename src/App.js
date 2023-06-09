import Layout from './components/layout/Layout'
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import OrdersPage from './pages/OrdersPage';

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/orders' element={<OrdersPage />} />
        </Routes>
    </Layout>
  );
}

export default App;
