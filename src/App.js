
import Header from "./component/Header"
import data from "./component/Data";
import { Routes,Route } from "react-router-dom";
import Product from "./component/Product";

const App = () => {
   const { productItems } = data;
 
  return (
  <div>
    <Header/>
   <Product/>
  </div> 
  );
};
export default App;