import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { FiGift, FiStar } from "react-icons/fi";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "black", fontSize: 40 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>까악이님, 안녕하세요!</MenuItem>
        <MenuItem onClick={handleClose}>
          {<FiGift />} 상품리스트 페이지
        </MenuItem>
        <MenuItem onClick={handleClose}>{<FiStar />} 북마크 페이지</MenuItem>
      </Menu>
    </div>
  );
}
