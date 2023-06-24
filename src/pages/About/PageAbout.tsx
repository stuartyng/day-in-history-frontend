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
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </PageWrapper>
      </div>
    </>
  );
}

export default PageAbout;
