import * as React from "react";
import Box from "@mui/material/Box";
import { Modal as MuiModal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // Centers the modal horizontally and vertically
  bgcolor: "background.paper",
  borderRadius: 2,
  p: 4,
  width: "inherit", // Inherit the width from the parent element
};

export default function Modal({
  open,
  handleClose,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </MuiModal>
    </div>
  );
}
