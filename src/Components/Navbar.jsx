import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-yellow-300 h-12 flex items-start text-2xl font-bold text-gray-800">
        <input
          type="text"
          placeholder="Search Movie"
          name="search"
          className="placeholder:text-gray-500 placeholder:italic"
        />
      </div>
    </div>
  );
};

export default Navbar;
