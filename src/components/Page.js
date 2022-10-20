import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Page.css";
import Row from "./Row";

const Page = () => {
  const dispatch = useDispatch();
  const listRepos = useSelector((state) => state.listRepos);
  const { loading, repos, error } = listRepos;
  return (
    <div className="page">
      <h1 className="page-heading">Most Starred Repos</h1>
      {/* {loading ? (
        <h1 className="text-loading">Loading please wait...</h1>
      ) : error ? (
        <h1 className="text-error">{error?.message}</h1>
      ) : (
        <div>
          {repos.item.map((item, index) => (
            <Row repo={item} key={index} />
          ))}
        </div>
      )} */}
      {repos.item.map((repo, index) => (
        <Row repo={repo} key={index} />
      ))}
    </div>
  );
};

export default Page;
