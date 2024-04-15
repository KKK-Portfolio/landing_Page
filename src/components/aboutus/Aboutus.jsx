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
            Since 2005, KAUNG KADAY KWAL has been a proud player in Myanmar's
            construction industry. Founded by [Founders' Names], driven by the
            vision of [Vision Statement], we've steadily grown into a company
            known for its [Values and Qualities]. Over the years, we've had the
            privilege of working on landmark projects like [Mention Major
            Projects]. Each project has been a testament to our commitment to
            [Values and Commitments]. We're especially proud of [Achievements
            and Awards]. As a local company, we understand the unique needs and
            challenges of the Myanmar construction landscape. We prioritize
            using local materials and labor, fostering strong relationships with
            communities, and contributing to the sustainable development of the
            industry.
          </p>
        </Grid>
      </Grid>
      <ProjectNumber />
    </Box>
  );
}

export default Aboutus;
