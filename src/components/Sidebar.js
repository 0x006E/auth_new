import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ courseName, chapters = [] }) => {
  return (
    <nav id="navbar">
      <header>{courseName}</header>
      <ul>
        {chapters.map((chapter, idx) => (
          <li key={chapter.chapterheading}>
            <Link to={`${idx}`}>{chapter.chapterheading}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
