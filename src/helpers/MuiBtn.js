import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";

export default ({ child, onClick, title, btnClass, placement }) => (
  <Tooltip title={title} placement={placement}>
    <IconButton onClick={onClick} className={btnClass}>
      {child}
    </IconButton>
  </Tooltip>
);
    