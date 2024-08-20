import React from "react";
import { Link } from "react-router-dom";
import {FaHome, FaSave, FaSuitcase, FaSuitcaseRolling, FaUserAlt, FaUserCheck, FaUserCircle, FaUserFriends, FaUsers} from "react-icons/fa"
import {MdWork, MdArticle, MdReport, MdWorkOutline, MdWorkspacesFilled, MdDashboardCustomize, MdLogout} from "react-icons/md"
import { BsPersonWorkspace } from "react-icons/bs";



function AdminNav() {

  return (
    <div className="sidebar">
        <Link to="/admin/dashboard"><FaUsers/> Users</Link>
        <Link to="/employers"><BsPersonWorkspace/>Employers</Link>
          <Link to="/admin/jobs"> <MdWork/> Jobs</Link>
          <Link to="/admin/articles"> <MdArticle/>Articles</Link>
          <Link to="/admin/reports"> <MdReport/> reports</Link>
          <Link to="/admin"> <MdLogout/> log out</Link>
    </div>
  );
}

export default AdminNav 