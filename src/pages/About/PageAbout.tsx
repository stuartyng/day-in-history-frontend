import React from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { Typography } from "@mui/material";

function PageAbout() {
  return (
    <>
      <Appbar title={"About"}></Appbar>
      <div className="page-wrapper">
        <PageWrapper>
          <Typography variant="h5"> About </Typography>
        </PageWrapper>
      </div>
    </>
  );
}

export default PageAbout;
