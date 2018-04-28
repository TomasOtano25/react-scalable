import React from "react";
import styled from "styled-components";

const OverlaySection = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
`;

const Overlay = ({ children }) => {
  return <OverlaySection>{children}</OverlaySection>;
};

export default Overlay;
