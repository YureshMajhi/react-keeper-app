import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 p-4 text-gray-200 text-3xl">
      <HighlightIcon />
      Keeper
    </div>
  );
};

export default Header;
