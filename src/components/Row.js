import React from "react";
import moment from "moment";
import "./Row.css";

function Row(props) {
  const { avatar, title, description, stars, issues, userName, creationDate } =
    props;

  let timeInterval = creationDate.split("T")[0];
  timeInterval = moment(creationDate, "YYYY-MM-DD").fromNow();

  return (
    <div className="row">
      <img src={avatar} alt="profile" className="row-image" />
      <div className="row-details">
        <h3 className="repo-title"> {title} </h3>
        <div className="repo-description"> {description} </div>
        <div className="row-details__des">
          <div className="repo-stars">
            {stars !== 1 ? `${stars} Stars` : `${stars} Star`}
          </div>
          <div className="repo-issues">
            {issues !== 1 ? `${issues} Issues` : `${issues} Issue`}
          </div>
          <div className="repo-owner" style={{ color: "whitesmoke" }}>
            {`${timeInterval} by ${userName}.`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
