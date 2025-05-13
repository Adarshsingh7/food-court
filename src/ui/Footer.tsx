import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Food Court. All rights reserved.</p>
        <Link to="/terms-and-condition" className="text-blue-500 underline">
          Terms & Condtions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
