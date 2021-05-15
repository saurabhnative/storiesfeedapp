import React, { useState } from "react";
import Stories from "react-insta-stories";
import { useRouteMatch, useHistory } from "react-router-dom";
import vaccineData from "../dataSource/vaccineData";
import Fade from "react-reveal/Fade";
import "./StoriesComponent.css";
export default function StoriesSection() {
  const [loading, setLoading] = useState(true);
  const match = useRouteMatch();
  const history = useHistory();
  function redirectToHome() {
    history.push("/");
  }
  function renderLoading() {
    return (
      <div className="flex justify-center items-center">
        <svg class="loader animate-spin"></svg>
      </div>
    );
  }
  function getStoriesObject() {
    const category = match.params.categoryName;
    console.log(vaccineData, category);
    const stories = vaccineData[category].map((item) => {
      if (item.type === "imageCaptionPost") {
        return {
          content: (props) => (
            <div className="story-container bg-black w-screen h-screen flex items-start justify-center">
              <div
                className="w-full h-full bg-black max-w-screen-md flex items-center justify-center flex-col bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div
                  className="mt-12 caption text-5xl font-bold"
                  style={{ color: item.captionColor }}
                >
                  <span>{item.caption}</span>
                </div>
              </div>
            </div>
          ),
        };
      } else if (item.type === "titleImageTextPost") {
        return {
          content: (props) => (
            <div
              className="story-container h-screen w-screen bg-center bg-no-repeat bg-black text-white font-bold flex items-start justify-center"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="max-w-screen-md flex items-center justify-center flex-col">
                <div className="mt-10 text-xl">
                  <span>{item.title}</span>
                </div>
                {item.image ? (
                  <div className="flex flex justify-center items-center mt-2 text-story-image-container">
                    <div style={{ display: loading ? "block" : "none" }}>
                      {renderLoading()}
                    </div>
                    <div style={{ display: loading ? "none" : "block" }}>
                      <img
                        src={item.image}
                        alt="vaccine-info"
                        className="h-6/12"
                        onLoad={() => setLoading(false)}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="mt-2 caption text-lg text-left mx-3 max-w-screen-md">
                  <span className="whitespace-pre-wrap">{item.text}</span>
                </div>
              </div>
            </div>
          ),
        };
      } else {
        return null;
      }
    });
    return stories;
  }
  return (
    <div className="stories-container w-screen h-screen">
      <Fade right>
        <Stories
          stories={getStoriesObject()}
          defaultInterval={5000}
          width={"100%"}
          height="100vh"
          onAllStoriesEnd={redirectToHome}
          onStoryEnd={() => setLoading(true)}
        />
      </Fade>
    </div>
  );
}
