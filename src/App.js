import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import { Navbar, Sidebar, Footer } from "./components";
// Pages
import {
  Home,
  Products,
  SingleProduct,
  Cart,
  About,
  ErrorPage,
  Checkout,
  Private,
  AuthWrapper,
  AddProductPage,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Private exact path="/checkout">
            <Checkout />
          </Private>
          <Private exact path="/add-product">
            <AddProductPage />
          </Private>
          <Route exact path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
