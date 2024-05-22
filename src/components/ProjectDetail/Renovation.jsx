import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "./../../api/axios";
import { useNavigate } from "react-router-dom";

function Renovation() {
  const [showcase, setshowcase] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const getprojects = async () => {
    try {
      const res = await axios.get("api/v1/contents/allContents");
      // console.log(res.data.imageContents[0].textContentRef.category);
      const projects = res.data.imageContents.filter(
        (item) => item.textContentRef.category === "Decoration"
      );
      console.log(projects);
      setshowcase(projects);
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

  return (
    <Box>
      <Box>
        <div className="containers">
          <img
            src={
              "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="companyinfo"
          />
          <div className="company-text">
            <p>Our Renovation Projects</p>
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

export default Renovation;
