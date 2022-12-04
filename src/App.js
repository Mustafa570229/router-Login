import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminDetails from "./components/AdminDetails";
import Profile from "./components/Profile";
import { ContextProvider } from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyLoading = React.lazy(() => import("./components/About"));

const App = () => {
  return (
    <Router>
      <ContextProvider>

        <Navbar />
        <Routes>

          <Route path="/" element={<div>  <Home /> </div>} />

          <Route path="/about" element={<React.Suspense fallback="loading....">
            <LazyLoading />
          </React.Suspense>} />

          <Route path="/contact" element={<div> <Contact /> </div>} />

          <Route path="/users" element={<div> <Users /> </div>} >
            <Route path=":userId" element={<div> <UserDetails /> </div>} />
            <Route path="admin" element={<div> <AdminDetails /> </div>} />
          </Route>

          <Route path="/products" element={<div> <Products /> </div>} >
            <Route index element={<h3>new</h3>} />
            <Route path="new" element={<div><h3>new</h3>  </div>} />
            <Route path="featured" element={<div><h3>featured</h3> </div>} />
          </Route>

          <Route path="*" element={<h1>page not found</h1>} />
          <Route path="/order-summary" element={<div> <OrderSummary /> </div>} />
          <Route path="/profile" element={<div> <RequireAuth><Profile /> </RequireAuth></div>} />
          <Route path="/login" element={<div> <Login/> </div>} />

        </Routes>

      </ContextProvider>
    </Router>
  );
};

export default App;
