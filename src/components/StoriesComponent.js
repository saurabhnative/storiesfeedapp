import React from "react";
import Stories from "react-insta-stories";
import { useRouteMatch, useHistory } from "react-router-dom";
import StoriesData from "../dataSource/storiesData";
import Fade from "react-reveal/Fade";
import "./StoriesComponent.css";
export default function StoriesSection() {
  const match = useRouteMatch();
  const history = useHistory();
  function redirectToHome() {
    history.push("/");
  }
  function getStoriesObject() {
    const category = match.params.categoryName;
    const stories = StoriesData[category].map((item) => {
      if (item.type === "imageCaptionPost") {
        return {
          content: (props) => (
            <div
              className="story-container h-screen w-screen bg-center bg-no-repeat bg-black max-w-screen-md"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div
                className="mt-12 caption text-5xl font-bold"
                style={{ color: item.captionColor }}
              >
                <span>{item.caption}</span>
              </div>
            </div>
          ),
        };
      } else if (item.type === "titleImageTextPost") {
        return {
          content: (props) => (
            <div
              className="story-container h-screen w-screen bg-center bg-no-repeat bg-black text-white font-bold flex items-center flex-col"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="mt-10 text-xl max-w-screen-md">
                <span>{item.title}</span>
              </div>
              <div className="flex flex justify-center items-center mt-2 text-story-image-container">
                <img src={item.image} alt="stories" className="h-6/12" />
              </div>
              <div className="mt-6 caption text-lg text-left mx-3 max-w-screen-md">
                <span className="whitespace-pre-wrap">{item.text}</span>
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
        />
      </Fade>
    </div>
  );
}
