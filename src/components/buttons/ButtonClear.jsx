import React from "react";
import { Button } from "@mui/material";
import { Clear as IconClear } from "@mui/icons-material";

function ButtonClear({ ...props }) {
  return (
    <Button color="primary" type="submit" endIcon={<IconClear />} variant="contained" {...props}>
      Clear
    </Button>
  );
}

export default ButtonClear;
