import { Grid, TextField } from "@material-ui/core";
import { inputData } from "../utils/constants";
export default function GridTextField({ state, handleChange }) {
  return (
      <Grid xs={8} item>
        {inputData.map((element, i) => (
          <div key={`${element.name}${i}`}>
            <label className="lables">{element.lableName}</label>
            <TextField
              type="text"
              name={element.name}
              className={element.className}
              lable={element.lableName}
              placeholder={element.placeholder}
              variant={element.variant}
              fullWidth
              required
              value={Object.entries(state).forEach(
                (item, i) => item[i] === element.name
              )}
              onChange={handleChange}
            />
          </div>
        ))}
      </Grid>
  );
}

