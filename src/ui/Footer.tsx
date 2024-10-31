import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Food Court. All rights reserved.</p>
        <p className="text-xs">
          made with ❤️ by{" "}
          <a target="_blank" href="https://github.com/adarshsingh7/">
            adarsh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
