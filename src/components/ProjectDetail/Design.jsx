import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "./../../api/axios";
import design from "./../../assets/image/design.jpg";
import { useNavigate } from "react-router-dom";
import "./../companyinfo/companyinfo.css";

function Design() {
  const [showcase, setshowcase] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getprojects = async () => {
    try {
      const res = await axios.get("api/v1/contents/allContents");
      // console.log(res.data.imageContents[0].textContentRef.category);
      const projects = res.data.imageContents.filter(
        (item) => item.textContentRef.category === "Design"
      );
      // console.log(projects);
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
    <Box>
      <Box>
        <div className="containers">
          <img src={design} alt="companyinfo" />
          <div className="company-text">
            <p>Our Design Projects</p>
            <span>
              Explore our portfolio of stunning residential and commercial
              projects. And discover what's possible with our expertise and
              dedication.
            </span>
          </div>
        </div>
      </Box>
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
    </Box>
  );
}

export default Design;
