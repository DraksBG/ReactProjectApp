import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, TextField, Button } from "@material-ui/core";
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
          getProducts();
          setErrorMessage("");
        }
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
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
    <Wrapper className="">
      <Card className="adding-page section">
        {!successfullyAdded && <h2>Add New Product</h2>}
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} className="form">
              {!successfullyAdded && (
                <>
                  <Grid xs={8} item>
                    <label className="lables">Product Name</label>
                    <TextField
                      type="text"
                      name="productName"
                      className="text-fields"
                      lable="Name of the product"
                      placeholder="Enter name of the product"
                      variant="outlined"
                      fullWidth
                      required
                      value={state.productName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <label className="lables">Product Price</label>
                    <TextField
                      type="text"
                      name="productPrice"
                      className="text-fields"
                      lable="Price of the product"
                      placeholder="Enter price of the product"
                      variant="outlined"
                      fullWidth
                      required
                      value={state.productPrice}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <label className="lables">Product Company</label>
                    <TextField
                      type="text"
                      name="productCompany"
                      className="text-fields"
                      lable="Company of the product"
                      placeholder="Enter company of the product"
                      variant="outlined"
                      fullWidth
                      required
                      value={state.productCompany}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <label className="lables">Product Category</label>
                    <TextField
                      type="text"
                      name="productCategory"
                      className="text-fields"
                      lable="Category of the product"
                      placeholder="Enter category of the product"
                      variant="outlined"
                      fullWidth
                      required
                      value={state.productCategory}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <label className="lables">Product Images</label>
                    <TextField
                      name="productImages1"
                      className="text-fields"
                      lable="image for the product"
                      placeholder="Enter Link for image of the product"
                      fullWidth
                      required
                      value={state.productImages1}
                      onChange={handleChange}
                    />
                    <TextField
                      type="text"
                      name="productImages2"
                      className="text-fields"
                      lable="image for the product"
                      placeholder="Enter Link for image of the product"
                      fullWidth
                      required
                      value={state.productImages2}
                      onChange={handleChange}
                    />
                    <TextField
                      type="text"
                      name="productImages3"
                      className="text-fields"
                      lable="image for the product"
                      placeholder="Enter Link for image of the product"
                      fullWidth
                      required
                      value={state.productImages3}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <label className="lables">Product Description</label>
                    <TextField
                      type="text"
                      name="productDescription"
                      className="text-fields"
                      lable="multiline"
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Type your description here"
                      fullWidth
                      required
                      value={state.productDescription}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </>
              )}
              {successfullyAdded && (
                <>
                  <h2>Successfully added</h2>
                  <Grid xs={8} item>
                    <Link to={`/products/${productId}`} className="btn">
                      Check your product
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
            {errorMessage.length > 0 && (
              <>
                <h4>There was and error</h4>
                <p>{errorMessage}</p>
              </>
            )}
          </form>
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
  .form {
    justify-content: center;
  }
  .lables {
    display: flex;
    margin: 0.25rem 0;
    font-size: 1.5rem;
  }
  .text-fields {
    margin-top: 0.25rem;
  }
`;

export default AddProductPage;
