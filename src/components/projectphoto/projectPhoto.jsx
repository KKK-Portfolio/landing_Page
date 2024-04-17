import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import one from "./../../assets/image/pldetail1.png";
import two from "./../../assets/image/pldetail2.png";
import three from "./../../assets/image/pldetail3.png";
import four from "./../../assets/image/pldetail4.png";
import five from "./../../assets/image/pldetail5.png";
import six from "./../../assets/image/pldetail6.png";
import { useParams } from "react-router-dom";
import axios from "./../../api/axios";

function ProjectPhoto() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  async function fetchShowcase() {
    try {
      const res = await axios.get(`api/v1/contents/${id}`);
      console.log(res.data.imageContent.images);
      // setshowcase(res.data.imageContents);
      setProject(res.data.imageContent.images);
    } catch (error) {}
  }

  useEffect(() => {
    fetchShowcase();
  }, []);
  return (
    <Box
      sx={{
        paddingX: { xs: "10px", md: "100px" },
        paddingY: "50px",
        background: "#ffffff",
      }}
    >
      <Grid container spacing={2}>
        {project.length > 0 &&
          project.map((item) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{ overflow: "hidden", width: "100%", height: "300px" }}
                key={item._id}
              >
                <img
                  src={`https://kkk.otastechsolutions.com/api/v1/contents/${item.filename}`}
                  alt="pj"
                  style={{
                    width: "inherit",
                    height: "inherit",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

export default ProjectPhoto;
