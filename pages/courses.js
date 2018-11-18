/*
  ./pages/courses.js
  courses page with next.js
*/
// node.js imports
import React from "react";
import fetch from "isomorphic-unfetch";
// component imports
import Layout from "../components/Layout";

const courses = props => (
  <Layout>
    <div>
      {props.offeredCourses.map(course => (
        <a>{course.name}</a>
      ))}
    </div>
  </Layout>
);

courses.getInitialProps = async function() {
  const res = await fetch("http://localhost:3001/admin/course/");
  const data = await res.json();

  return {
    offeredCourses: data
  };
};

export default courses;
