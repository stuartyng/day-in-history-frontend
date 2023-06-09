import { Button } from "@mui/material";
import React from "react";
import { requestPermission } from "../../utils";
import { useConfirm } from "material-ui-confirm";

function ButtonAssetUpload({ buttonRef, uploadAsset }) {
  const confirm = useConfirm();
  return (
    <Button variant="contained" component="label" sx={{ display: "none" }}
      onClick={() => {
        requestPermission(
          (message) => {
            confirm({ title: "Permission required!",
              description: message,
              hideCancelButton: true
            })
          })}}>
      Upload Asset
      <input
        hidden
        accept="image/*,video/*,audio/*"
        multiple
        type="file"
        ref={buttonRef}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            uploadAsset(e.target.files[0]);
            e.target.value = "";
          }
        }}
      />
    </Button>
  );
}

export default ButtonAssetUpload;
