import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/User/Dashboard";
import Keranjang from "./pages/User/Keranjang";
import Checkout from "./pages/User/Checkout";
import Dashboardadmin from "./pages/Admin/DashboardAdmin";
import Produkadmin from "./pages/Admin/ProdukAdmin";
import Aboutadmin from "./pages/Admin/AboutAdmin";
import Pengguna from "./pages/Admin/Pengguna";
import Dikirim from "./pages/Admin/PerluDikirim";
import Perludikirim from "./pages/Admin/PerluDikirim";
import Rinciandikirim from "./pages/Admin/RincianDikirim";
import Pesananbatal from "./pages/Admin/PesananBatal";
import Pesananberhasil from "./pages/Admin/PesananBerhasil";
import Edituser from "./pages/User/EditUser";
import Editadmin from "./pages/Admin/EditAdmin";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import ProductDetail from "./pages/User/Detailproduk";
import { selectUser } from "./reducer/appSlice";

const product = {
  id: 1,
  name: "Product 1",
  price: 10,
};

function App() {
  const isAdmin = useSelector(selectUser);

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/product/:id"
          element={<ProductDetail product={product} />}
        />
        <Route path="/keranjang/" element={<Keranjang />} />
        <Route path="/checkout/" element={<Checkout />} />
        {isAdmin && (
          <>
            <Route path="/dashboard-admin" element={<Dashboardadmin />} />
            <Route path="/about-admin" element={<Aboutadmin />} />
            <Route path="/edit-admin" element={<Editadmin />} />
            <Route path="/Produk-admin" element={<Produkadmin />} />
          </>
        )}
        <Route path="/pengguna" element={<Pengguna />}></Route>
        <Route path="/perlu-dikirim" element={<Perludikirim />}></Route>
        <Route path="/dikirim" element={<Dikirim />}></Route>
        <Route path="/rincian-dikirim" element={<Rinciandikirim />}></Route>
        <Route path="/pesanan-batal" element={<Pesananbatal />}></Route>
        <Route path="/pesanan-berhasil" element={<Pesananberhasil />}></Route>
        {/* <Route
          path="/menunggu-pembayaran"
          element={<Menunggupembayaran />}
        ></Route> */}
        <Route path="/edit-user" element={<Edituser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
