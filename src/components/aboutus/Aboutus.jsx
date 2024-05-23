import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import aboutOne from "./../../assets/image/aboutusOne.avif";
import aboutTwo from "./../../assets/image/aboutusTwo.avif";
import ProjectNumber from "./ProjectNumber";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./../aboutus/aboutus.css";

function Aboutus() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}>
      <p className="titles">About Our Company</p>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ paddingRight: { xs: "0", md: "20px" } }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="about-image"
          >
            <img src={aboutOne} alt="about" />
          </motion.div>
          <Box
            sx={{ display: { xs: "none", lg: "block" } }}
            className="about-image"
          >
            <img src={aboutTwo} alt="about" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <p className="about-text">
            Founded in 2018 by U Ye Htun, Kaung Kaday Kyawl Co., Ltd has quickly
            become a respected name in the steel structure and construction
            industry. Our company is dedicated to providing top-quality
            services, focusing on delivering innovative solutions and superior
            craftsmanship in every project we undertake.
            <br />
            From our inception, we have maintained a commitment to excellence
            that has allowed us to successfully complete over 100 projects. This
            achievement is a testament to our team's hard work, dedication, and
            unwavering focus on meeting the needs of our clients. Our portfolio
            includes a diverse range of projects, each reflecting our expertise
            and attention to detail.
          </p>
        </Grid>
      </Grid>
      <ProjectNumber />
    </Box>
  );
}

export default Aboutus;
