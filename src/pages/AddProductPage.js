import { React, useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { Card, CardContent } from "@material-ui/core";
import { useProductsContext } from "../context/products_context";
import {
  InitialState,
  products_url,
  single_product_url,
  singleProdcutPost,
} from "../utils/constants";
import styled from "styled-components";

function AddProductPage() {
  const [successfullyAdded, setSuccessfullyAdded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [productId, setProductId] = useState("");
  const [state, setState] = useState({
    productName: "",
    productPrice: "",
    productColor: "",
    productCompany: "",
    productCategory: "",
    productImages1: "",
    productImages2: "",
    productImages3: "",
    productDescription: "",
  });
  const { getProducts } = useProductsContext();

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    setProductId(id);
    const productsData = {
      id,
      name: state.productName,
      price: state.productPrice,
      image: state.productImages1,
      colors: ["#ff0000", " #00ff00", "#0000ff"],
      company: state.productCompany,
      description: state.productDescription,
      category: state.productCategory,
      shipping: true,
    };
    const singleProductData = singleProdcutPost(state, id);
    try {
      axios.post(products_url, productsData).then((res) => {
        if (res.status === 201) {
          getProducts(products_url);
          setSuccessfullyAdded(true);
          setErrorMessage("");
        }
      });
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
    try {
      axios.post(single_product_url, singleProductData).then((res) => {
        if (res.status === 201) {
          // getProducts();
          setErrorMessage("");
        }
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
    getProducts();
    setState(InitialState);
  };

  useEffect(() => {
    return () => {
      setSuccessfullyAdded(false);
      setErrorMessage("");
      setProductId("");
    };
  }, []);

  return (
    <Wrapper>
      <Card className="adding-page section">
        {!successfullyAdded && <h2>Add New Product</h2>}
        <CardContent>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            state={state}
            errorMessage={errorMessage}
            successfullyAdded={successfullyAdded}
            productId={productId}
          />
        </CardContent>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default AddProductPage;
