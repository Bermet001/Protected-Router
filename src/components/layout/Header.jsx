import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const profileBtn = () => {
    navigate("/profile");
  };

  return (
    <StyledHeader>
      <StyledText>Store</StyledText>
      <StyledButtonConteiner>
        <Button onClick={profileBtn} variant="contained">
          sing in
        </Button>
      </StyledButtonConteiner>
    </StyledHeader>
  );
};

export default Header;

const StyledButtonConteiner = styled("div")({
  display: "flex",
  gap: "1rem",
  marginRight: "3rem",
});

const StyledHeader = styled("header")({
  backgroundColor: "#000000",
  color: "white",
  width: "100%",
  height: "4rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: "0",
  zIndex: "100",
});

const StyledText = styled("h1")({
  marginLeft: "3rem",
  fontFamily: "Helvetica",
});
