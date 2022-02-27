
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Dashboard from "../components/Dashboard";
import History from "../components/History";
import Navbar from "../components/Navbar";
import Productt from "../components/Product";

import Search from "../components/Search";
import { MainPageContainer } from "./style";

function MainPages() {

  return (
    <>
      <MainPageContainer>
    <Search/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Productt />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/history" element={<History/>}/>
          {/* <Route path="/history" element={< History/>}/> */}
          
        </Routes>
      </MainPageContainer>
    </>
  );
}

export default MainPages;
