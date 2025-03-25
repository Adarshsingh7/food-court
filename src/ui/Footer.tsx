import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Food order. All rights reserved.</p>
        <p className="text-xs">
          made with ❤️ by{" "}
<a target="_blank" href="https://github.com/ankitsinghal2003">
            Ankit Singhal & Adarsh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

