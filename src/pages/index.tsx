import React from "react";
import Tickets from "./Tickets";
import { Route, Routes } from "react-router-dom";

const index: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Tickets />} />
    </Routes>
  );
};

export default index;
