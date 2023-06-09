import React from "react";
import { LoadingButton } from "@mui/lab";
import { Add as IconAdd } from "@mui/icons-material";

function ButtonCreate({ onClick, loading, label }) {
  return (
    <LoadingButton
      color="primary"
      type="submit"
      loading={loading}
      loadingPosition="start"
      startIcon={<IconAdd />}
      variant="contained"
      onClick={() => {
        onClick && onClick();
      }}
    >
      {label}
    </LoadingButton>
  );
}

ButtonCreate.defaultProps = {
  onClick: () => {},
  loading: false,
  label: "Create",
};

export default ButtonCreate;
