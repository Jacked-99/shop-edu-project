import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Popover } from "@mui/material";
import { useState } from "react";

const LogoutUser = ({ onClick }) => {
  const [display, setDisplay] = useState(null);

  const handleDispaly = (e) => {
    setDisplay(e.currentTarget);
  };

  return (
    <>
      <Button variant="oulined" onClick={handleDispaly}>
        <AccountCircleIcon />
      </Button>
      {display && (
        <Popover
          anchorEl={display}
          open={display !== null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Button variant="oulined" onClick={onClick}>
            Logout
          </Button>
        </Popover>
      )}
    </>
  );
};

export default LogoutUser;
