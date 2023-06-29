import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="fixed text-gray-400 bottom-0 left-0 right-0 text-center">
      Copyright &copy; {date.getFullYear()}
    </div>
  );
};

export default Footer;
