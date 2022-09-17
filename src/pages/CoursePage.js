import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  matchPath,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Sidebar from "../components/Sidebar";
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

export default function CoursePage() {
  // GraphQL
  const { courseId: id } = useParams();
  const { loading, error, data } = useQuery(COURSES);
  // console.log("HIii" + JSON.stringify(data));

  const backend = "http://localhost:1337";
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/courses?populate=*"
  // );

  const location = useLocation();
  const match = matchPath(
    {
      path: "/courses/:id/:chapterId",
    },
    location.pathname
  );
  console.log(match);
  const course = data.courses.data.find((c) => c.id === id);
  if (course.attributes.Page1.length > 0 && !match) return <Navigate to="0" />;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return course ? (
    <>
      <Sidebar
        courseName={course.attributes.courseheadline}
        chapters={course.attributes["Page1"]}
      />
      <Outlet context={course} />
    </>
  ) : (
    "Course Not found"
  );
}
