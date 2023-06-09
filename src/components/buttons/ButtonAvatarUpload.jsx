import { Button } from "@mui/material";
import React from "react";

function ButtonAvatarUpload({ buttonRef, uploadAvatar }) {
  return (
    <Button variant="contained" component="label" sx={{ display: "none" }}>
      Upload Avatar
      <input
        hidden
        accept="image/*"
        multiple
        type="file"
        ref={buttonRef}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            uploadAvatar(e.target.files[0]);
          }
        }}
      />
    </Button>
  );
}

export default ButtonAvatarUpload;
