import { Route, Routes } from "react-router-dom";
import Header from "./Componenets/header";
import Homepage from "./Componenets/Homepage";
import Footer from "./Componenets/Footer";
import About from "./Componenets/About";
import Shoppage from "./Componenets/Shoppages/Shoppage";
import Productdetails from "./Componenets/Aboutpage/Productdetails";
import Localstore from "./Componenets/Localstore";
import Details from "./Componenets/Details";
import Cart from "./Componenets/Cart";
import { CartProvider } from "../src/Componenets/Cartcontex";
import Contact from "./Componenets/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Brand from "./Componenets/Brand";
import './index.css'; 



 

function App() {
  return (
    <> <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shoppage/>}/>
        <Route path="/product/:id" element={< Productdetails />} />
        <Route path="/Localstore" element={<Localstore/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        {/* <Route path="/details" element={<Details/>}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/brand" element={<Brand/>}/>
        
      </Routes>
      <Footer/>
      </CartProvider>
      <ToastContainer/>
      
    </>
  );
}

export default App;
