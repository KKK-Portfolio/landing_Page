import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../api/axios";

import "./projetcshowcase.css";

function ProjectShowcase() {
  const [showcase, setshowcase] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log(showcase);

  const clickHandler = (id) => {
    navigate(`/project/${id}`);
  };

  async function fetchShowcase() {
    try {
      const res = await axios.get("api/v1/contents/allContents");
      console.log(res.data);
      setshowcase(res.data.imageContents);
      setLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchShowcase();
  }, []);

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
  );
}

export default ProjectShowcase;
