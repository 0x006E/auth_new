import React from "react";
import { Link } from "react-router-dom";
import "./courcecard.css";
import "../dash.css";

export default function CourseCard(props) {
  console.log(props.title + props.key_id);
  return (
    <>
      <Link to={"/courses/" + props.key_id}>
        <div>
          <div
            className="card-card"
            key={props.key_id}
            style={{
              backgroundColor: "#fff",

              padding: "20px",
              borderRadius: "10px",
              height: "300px",
              width: "200px",
            }}
          >
            <img style={{ width: "100%" }} src={props.imageURL} alt="_" />
            <h1>{props.title}</h1>
            <p>{props.instructor}</p>
            {/* <p>{course.attributes.courseimage.data.attributes.url}</p> */}
          </div>
        </div>
      </Link>
    </>
  );
}
