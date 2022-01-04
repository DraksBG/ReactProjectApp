import GridTextField from "./GridTextField";
import { imagesInputData } from "../utils/constants";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export default function Form({
  handleSubmit,
  handleChange,
  state,
  errorMessage,
  successfullyAdded,
  productId,
}) {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} className="form">
          {!successfullyAdded && (
            <>
              <GridTextField state={state} handleChange={handleChange} />
              <Grid xs={8} item>
                <label className="lables">Product Images</label>
                {imagesInputData.map((element, i) => (
                  <TextField
                    type={element.type}
                    name={element.name}
                    className={element.className}
                    placeholder={element.placeholder}
                    fullWidth
                    required
                    value={Object.entries(state).forEach(
                      (item, i) => item[i] === element.name
                    )}
                    onChange={handleChange}
                  />
                ))}
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
    </Wrapper>
  );
}

const Wrapper = styled.main`
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
