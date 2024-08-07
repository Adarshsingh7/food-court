/** @format */
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const EnhancedSnackbar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  const handleOpenCart = () => {
    // Handle open cart action
    console.log("Cart opened");
    handleClose(); // Optionally close the Snackbar after action
  };

  const handleUndo = () => {
    // Handle undo action
    console.log("Undo action");
    handleClose(); // Optionally close the Snackbar after action
  };

  return (
    <>
      <Snackbar
        open={open}
        // onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="standard"
          sx={{ width: "auto", display: "flex", alignItems: "center" }}
          icon={false}
        >
          <div className="flex items-center justify-between w-full">
            <span className="mr-4">
              This is a success Alert inside a Snackbar!
            </span>
            <div className="flex gap-2">
              <Button
                color="inherit"
                onClick={handleOpenCart}
                className="text-blue-500 hover:bg-blue-100"
              >
                Open Cart
              </Button>
              <Button
                color="inherit"
                onClick={handleUndo}
                className="text-gray-700 hover:bg-gray-100"
              >
                Undo
              </Button>
            </div>
          </div>
        </Alert>
      </Snackbar>
    </>
  );
};

export default EnhancedSnackbar;
