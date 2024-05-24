import { Box } from "@mui/material";
import React from "react";
import "./../components/loading/loading.css";

function Loading() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="loader"></div>
    </Box>
  );
}

export default Loading;
