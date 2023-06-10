import React from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { Typography } from "@mui/material"

function PageContactUs() {
  return (
    <>
      <Appbar title={"Contact Us"}></Appbar>
      <div className="page-wrapper">
        <PageWrapper>
          <Typography variant="h5"> Contact Us </Typography>
        </PageWrapper>
      </div>
    </>
  );
}

export default PageContactUs;
