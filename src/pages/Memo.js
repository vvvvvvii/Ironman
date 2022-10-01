import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Memo() {
  return (
    <div>
      <h1>Material UI</h1>
      <h2>客製化樣式</h2>
      <h3>Theme & Typography</h3>
      <Typography variant="h1" component="h2">
        custom theme
      </Typography>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <h3>Theme & Spacing</h3>
      <h3>Platte 顏色</h3>
      <Button variant="contained" color="secondary">
        123
      </Button>
    </div>
  );
}

export default Memo;
