import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Stories from "react-insta-stories";
import StoriesData from "../dataSource/storiesData";
export default function StoriesComponent() {
  const match = useRouteMatch();
  const history = useHistory();
  function renderStories() {
    const categoryName = match.params.categoryName;
    const stories = StoriesData[categoryName].map((storyItem) => {
      if (storyItem.type === "imageCaptionPost") {
        return {
          content: ({ action, isPaused }) => {
            return (
              <div
                className="w-screen h-screen flex justify-center items-center"
                key={storyItem.caption}
              >
                <div
                  className="w-full h-full bg-no-repeat bg-center max-w-screen-md flex justify-center items-center flex-col"
                  style={{
                    backgroundImage: `url(${storyItem.backgroundImageUrl})`,
                  }}
                >
                  <div
                    className="text-4xl text-white mt-5 font-bold"
                    style={{ color: storyItem.captionColor }}
                  >
                    <span>{storyItem.caption}</span>
                  </div>
                </div>
              </div>
            );
          },
        };
      } else if (storyItem.type === "textImagePost") {
        return {
          content: ({ action, isPaused }) => {
            return (
              <div
                className="w-screen h-screen flex justify-center items-center"
                style={{
                  backgroundColor: storyItem.backgroundColor,
                }}
                key={storyItem.caption}
              >
                <div className="max-w-screen-md flex justify-center items-center flex-col">
                  <div
                    className="text-4xl text-white mt-5 font-bold"
                    style={{ color: storyItem.textColor }}
                  >
                    <span>{storyItem.title}</span>
                  </div>
                  <div>
                    <img src={storyItem.postImageURL} alt="story" />
                  </div>
                  <div className="text-xl text-white mt-5 font-bold text-left ml-2">
                    <span>{storyItem.text}</span>
                  </div>
                </div>
              </div>
            );
          },
        };
      }
      return null;
    });
    return stories;
  }
  function goBackToHomePage() {
    history.push("/");
  }
  return (
    <div className="flex justify-center items-center">
      <Stories
        stories={renderStories()}
        width={"100vw"}
        height={"100vh"}
        onAllStoriesEnd={() => goBackToHomePage()}
      />
    </div>
  );
}
