import React from "react";
import Sort from "./components/Sort/idnex";
import User from "./components/Users";

const index: React.FC = () => {
  return (
    <div className="tickets">
      <Sort />
      <User />
    </div>
  );
};

export default index;
