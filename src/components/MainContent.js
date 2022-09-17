import React from "react";
import ReactMarkdown from "react-markdown";
import { useOutletContext, useParams } from "react-router-dom";
import "./MainContent.css";

const MainContent = () => {
  const { chapterId: id } = useParams();
  const course = useOutletContext();
  const chapter = course.attributes["Page1"][id];
  return chapter ? (
    <main id="main-doc">
      <section className="main-section">
        <header>{chapter.chapterheading}</header>
        <article>
          <ReactMarkdown>{chapter.chaptercontent}</ReactMarkdown>
        </article>
      </section>
    </main>
  ) : (
    "Chapter Not found"
  );
};

export default MainContent;
