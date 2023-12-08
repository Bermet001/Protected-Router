import { styled } from "@mui/material";
import React from "react";

const MobileItem = ({ title, images, price }) => {
  return (
    <StyledCard>
      <StyledImage src={images[0]} alt="" />
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>{price} $</StyledPrice>
    </StyledCard>
  );
};

export default MobileItem;

const StyledCard = styled("div")({
  border: "1px solid #ccc",
  borderRadius: " 8px",
  padding: "16px",
  margin: "16px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "350px",
  "&:hover": {
    boxShadow: " none",
    border: "1px solid rgba(34, 60, 80, 0.2)",
    transition: " box-shadow 0.4s ease-in, border 0.3s ease-in",
  },
});

const StyledImage = styled("img")({
  width: "180px",
  height: "200px",
  borderRadius: "4px",
});
const StyledTitle = styled("p")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: " 8px 0",
});
const StyledPrice = styled("h3")({
  fontSize: "1.1rem",
  color: "green",
  marginTop: "8px",
});
