import React from "react";
import { LoadingButton } from "@mui/lab";
import { Delete as IconDelete } from "@mui/icons-material";

function ButtonDelete({ loading, label, ...props }) {
  return (
    <LoadingButton
      color="error"
      loading={loading}
      loadingPosition="start"
      startIcon={<IconDelete />}
      variant="contained"
      {...props}
    >
      {label}
    </LoadingButton>
  );
}

ButtonDelete.defaultProps = {
  loading: false,
  label: "Delete",
};

export default ButtonDelete;
