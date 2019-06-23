import React from 'react';
import {Router, Scene, Stack} from "react-native-router-flux";
import Products from "./app/Products";
import ProductDetails from "./app/ProductDetails";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="product" component={Products} title="Products" initial/>
      <Scene key="productDetails" component={ProductDetails} title="ProductDetails"/>
    </Stack>
  </Router>
);

export default App;
