import { Box, Grid } from "@mui/material";
import React from "react";

import one from "./../../assets/image/pldetail1.png";
import two from "./../../assets/image/pldetail2.png";
import three from "./../../assets/image/pldetail3.png";
import four from "./../../assets/image/pldetail4.png";
import five from "./../../assets/image/pldetail5.png";
import six from "./../../assets/image/pldetail6.png";

function ProjectPhoto() {
  return (
    <Box
      sx={{
        paddingX: { xs: "10px", md: "100px" },
        paddingY: "50px",
        background: "#ffffff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} sx={{ overflow: "hidden" }}>
          <img src={one} alt="pj" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ overflow: "hidden" }}>
          <img src={two} alt="pj" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ overflow: "hidden" }}>
          <img src={three} alt="pj" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ overflow: "hidden" }}>
          <img src={four} alt="pj" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ overflow: "hidden" }}>
          <img src={five} alt="pj" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ overflow: "hidden" }}>
          <img src={six} alt="pj" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectPhoto;
