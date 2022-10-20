import React from "react";
import "./Row.css";

const Row = ({ repo }) => {
  return (
    <div className="row">
      <div className="row-avater">{repo.owner.avatar_url}</div>
      <div className="row-details">
        <h2>{repo.name}</h2>
        <h3>{repo.description}</h3>
        <div className="row-details__cards">
          <div className="row-details__cards--star-count">
            {repo.stargazers_count}
          </div>
          <div className="row-details__cards--issue-count">
            {repo.open_issues}
          </div>
          <p>Last pushed by {repo.owner.login}</p>
        </div>
      </div>
    </div>
  );
};

export default Row;
