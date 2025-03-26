// frontend/src/App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer"; // Import Footer if necessary
import Header from "./components/Header"; // Import Header if necessary
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
    return (
        <div>
            <Navbar />  {/* Include Navbar */}
            <Header />  {/* Include Header */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />  {/* Include Footer */}
        </div>
    );
}

export default App;
