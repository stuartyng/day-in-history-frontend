import React from "react";
import { LoadingButton } from "@mui/lab";
import { CloudUpload as IconCloudUpload } from "@mui/icons-material";

function ButtonSave({ loading, label, ...props }) {
  return (
    <LoadingButton
      color="secondary"
      type="submit"
      loading={loading}
      loadingPosition="start"
      startIcon={<IconCloudUpload />}
      variant="contained"
      {...props}
    >
      {label}
    </LoadingButton>
  );
}

ButtonSave.defaultProps = {
  loading: false,
  label: "Save",
};

export default ButtonSave;
