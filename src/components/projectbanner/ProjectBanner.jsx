import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../../api/axios";

import "./projectbanner.css";

function ProjectBanner() {
  const { id } = useParams();
  const [image, setImage] = useState([]);
  const [project, setProject] = useState([]);

  async function fetchShowcase() {
    try {
      const res = await axios.get(`api/v1/contents/${id}`);
      console.log(res.data.imageContent.images[0].filename);
      // setshowcase(res.data.imageContents);
      setImage(res.data.imageContent.images[0].filename);
      setProject(res.data.imageContent.textContentRef);
      // console.log(project);
    } catch (error) {}
  }

  useEffect(() => {
    fetchShowcase();
  }, []);

  return (
    <Box>
      <div className="projectbanner">
        <img
          src={`${process.env.REACT_APP_API_URL}api/v1/contents/${image}`}
          alt="banner"
          className="center"
        />
        <div className="projectbanner-text">
          <p>{project.title}</p>
          <span>{project.description}</span>
          <span>{project.type}</span>
        </div>
      </div>
    </Box>
  );
}

export default ProjectBanner;
