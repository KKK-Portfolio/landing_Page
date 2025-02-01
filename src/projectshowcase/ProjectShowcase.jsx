import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../api/axios";
import pj1 from "./../assets/image/projects/shwePyinan.jpg";
import pj2 from "./../assets/image/projects/crane.jpg";
import pj3 from "./../assets/image/projects/shan.jpg";
import pj4 from "./../assets/image/projects/basketball.jpg";
import pj5 from "./../assets/image/projects/baech.jpg";

import "./projetcshowcase.css";

const projectArray = [
  {
    projectId: 1,
    projectName: "ရွှေပြည်နန်းကုမ္ပဏီ",
    projectType: "Building & Construction",
    image: pj1,
  },
  {
    projectId: 2,
    projectName: "10Ton Overhead Crane with Double Girder",
    projectType: " Heavy Industrial Construction",
    image: pj2,
  },
  {
    projectId: 3,
    projectName: "Steel Structure Building",
    projectType:
      "နှီးဘုရားလမ်းသွယ်(၂)၊ ကလောမြို့နယ်၊ ရှမ်းပြည်နယ်(တောင်ပိုင်း)။",
    image: pj3,
  },
  {
    projectId: 4,
    projectName: "HARLEY-DAVIDSON Motorcycle Show Room",
    projectType: "Streel Structure",
    image: pj4,
  },
  {
    projectId: 5,
    projectName: "Bo Net Kyaw Island, Resort Project.",
    projectType: "Resort Development",
    image: pj5,
  },
];

function ProjectShowcase() {
  const [showcase, setshowcase] = useState(projectArray);

  return (
    <Box
      sx={{
        padding: { xs: "30px 10px", md: "50px 100px" },
        background: "#ffffff",
      }}
    >
      <Grid container spacing={2}>
        {showcase && showcase.length > 0 ? (
          showcase.map((item) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{ cursor: "pointer" }}
                key={item.projectId}
              >
                <div className="showcase">
                  <img src={item?.image} alt="banner" />

                  <div className="showcase-text">
                    <p> {item.projectName}</p>
                    <span>{item.projectType}</span>
                  </div>
                </div>
              </Grid>
            );
          })
        ) : (
          <div style={{ textAlign: "center", width: "100%" }}>
            <h1>No Projects Found</h1>
          </div>
        )}
      </Grid>
    </Box>
  );
}

export default ProjectShowcase;
