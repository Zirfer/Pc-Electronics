import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Main from './Components/Main'
import CreateProduct from './Components/CreateProduct'
import UpdateProduct from './Components/UpdateProduct'
import DeleteProduct from './Components/DeleteProduct'
import GetProduct from './Components/GetProduct'
import DataCalculator from './Components/DataCalculator'
import ValueCalculator from './Components/ValueCalculator'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path="/Pc-Electronics/" element={<Main />} />
          {/* Inventario */}
          <Route path="/Pc-Electronics/products/create" element={<CreateProduct />} />
          <Route path="/Pc-Electronics/products/update" element={<UpdateProduct />} />
          <Route path="/Pc-Electronics/products/delete" element={<DeleteProduct />} />
          <Route path="/Pc-Electronics/products/get" element={<GetProduct />} />
          {/* Utilidades */}
          <Route path="/Pc-Electronics/utils/data" element={<DataCalculator />} />
          <Route path="/Pc-Electronics/utils/value" element={<ValueCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
