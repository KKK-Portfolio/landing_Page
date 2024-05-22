import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../../api/axios";
import { useParams } from "react-router-dom";

function SimilarProject() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [showcase, setshowcase] = useState([]);
  const navigate = useNavigate();

  const getprojects = async () => {
    try {
      const res = await axios.get("api/v1/contents/allContents");
      const pj = await axios.get(`api/v1/contents/${id}`);
      console.log(pj.data.textContent.category);
      const projects = res.data.imageContents.filter(
        (item) => item.textContentRef.category === pj.data.textContent.category
      );
      console.log(projects);
      setshowcase(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getprojects();
  }, []);

  const clickHandler = (id) => {
    navigate(`/project/${id}`);
  };

  if (loading) {
    return (
      <Box
        sx={{
          padding: { xs: "30px 10px", md: "50px 100px" },
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Loading...</p>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}>
      <p className="titles">Other Similar Projects</p>
      <p className="about-text">
        Discover more projects that reflect our dedication to quality and
        innovation. Here are some other ventures in the same category,
        showcasing our diverse expertise and commitment to excellence. Each
        project highlights our ability to deliver outstanding results tailored
        to our clients' unique needs and visions.
      </p>
      <Box>
        <Grid container spacing={2}>
          {showcase && showcase.length > 0 && !loading ? (
            showcase.map((item) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  onClick={() => {
                    clickHandler(item.textContentRef._id);
                  }}
                  key={item._id}
                >
                  <div className="showcase">
                    <img
                      src={`${process.env.REACT_APP_API_URL}api/v1/contents/${item.images[0].filename}`}
                      alt="banner"
                    />

                    <div className="showcase-text">
                      <p> {item.textContentRef.title}</p>
                      <span>{item.textContentRef.description}</span>
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
    </Box>
  );
}

export default SimilarProject;
