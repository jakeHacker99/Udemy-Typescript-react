import React from "react";
import { ResizableBox } from "react-resizable";
import "./resizable.css";

interface RezisableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<RezisableProps> = ({ direction, children }) => {
  return (
    <ResizableBox height={300} width={Infinity} resizeHandles={["s"]}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
