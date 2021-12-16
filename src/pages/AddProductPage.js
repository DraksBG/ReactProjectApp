import { React, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid, TextField, Button } from "@material-ui/core";
import {
  InitialState,
  products_url,
  single_product_url,
  singleProdcutPost,
} from "../utils/constants";
import styled from "styled-components";

function AddProductPage() {
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
  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9)
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
    axios
      .post(products_url, productsData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .post(single_product_url, singleProductData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(state);
    setState(InitialState);
  };
  return (
    <Wrapper className="">
      <Card className="adding-page section">
        <h2>Add New Product</h2>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} className="form">
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
                <label className="lables">Product Color</label>
                <TextField
                  type="text"
                  name="productColor"
                  className="text-fields"
                  lable="Color of the product"
                  placeholder="Enter color of the product"
                  variant="outlined"
                  fullWidth
                  required
                  value={state.productColor}
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
            </Grid>
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
