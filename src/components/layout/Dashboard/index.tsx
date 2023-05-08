import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="logo">
        <h2>Dashboard Kit</h2>
        <img src="" alt="" />
      </div>

      <ul className="list-top">
        <Link to={""}>Overview</Link>
        <Link to={""}>Tickets</Link>
        <Link to={""}>Ideas</Link>
        <Link to={""}>Contacts</Link>
        <Link to={""}>Agents</Link>
        <Link to={""}>Articles</Link>
      </ul>
      <hr />
      <ul className="list-bottom">
        <Link to={""}>Settings</Link>
        <Link to={""}>Subscription</Link>
      </ul>
    </div>
  );
};

export default Dashboard;
