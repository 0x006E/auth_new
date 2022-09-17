import React from "react";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import CourseCard from "../components/CourseCard";
import "../dash.css";

const COURSES = gql`
  query GetCourses {
    courses {
      data {
        id
        attributes {
          courseheadline
          courseinstructor
          Page1 {
            chapterheading
            chaptercontent
          }
          courseimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function Dashboard() {
  // GraphQL
  const { loading, error, data } = useQuery(COURSES);

  // console.log("HIii" + JSON.stringify(data));
  const backend = "http://localhost:1337";

  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/courses?populate=*"
  // );

  console.log(data);

  // console.log("hi" + JSON.stringify(data.courses.data[0].id));

  // data.courses.data.map((course) => console.log(course.id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="container">
      {/* {data.courses.data.map((course) => (
        <div key={course.id}>
          <h1>{course.attributes.courseheadline}</h1>
          <p>{course.attributes.courseinstructor}</p>
          <img
            style={{ maxWidth: "100px" }}
            src={backend.concat(
              course.attributes.courseimage.data.attributes.url
            )}
            alt="_"
          />
          <p>{course.attributes.page1}</p>
        </div>
      ))} */}
      <div className="dash-text">
        <h4>Hello John 👋</h4>
        <h2>Here are some courses you might be interested in</h2>
      </div>
      <div className="cardx">
        {data.courses.data.map((course) => (
          <CourseCard
            key_id={course.id}
            title={course.attributes.courseheadline}
            instructor={course.attributes.courseinstructor}
            imageURL={backend.concat(
              course.attributes.courseimage.data.attributes.url
            )}
          />
        ))}
      </div>
    </div>
  );
}
