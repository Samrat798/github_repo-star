import axios from "axios";
import React, { Component } from "react";
import Row from "./Row";

class CardsList extends Component {
  constructor() {
    super();
    this.date = null;
    this.state = {
      page: 1,
      data: [],
      canScroll: true,
    };
  }

  async componentDidMount() {
    this.setDate();
    await this.getRepos();
    await this.scrollHandler();
  }

  setDate = () => {
    try {
      let date = new Date();
      date.setMonth(date.getMonth() - 1);
      date = date.toISOString();
      date = date.split("T")[0];
      this.date = date;
    } catch (e) {
      console.error("Couldn't get the current date");
    }
  };

  getRepos = async () => {
    try {
      const { date } = this;
      let { page } = this.state;
      await this.setState({ canScroll: false });
      const result = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
      );
      if (result.status === 200) {
        if (result.data && result.data.items) {
          let data = this.state.data;
          data.push(...result.data.items);
          page++;
          await this.setState({
            data,
            page,
            canScroll: true,
          });
        }
      }
    } catch (e) {
      console.error(
        "An error has occurred while fetching the repositories list"
      );
    }
  };

  scrollHandler = async () => {
    window.addEventListener("scroll", async () => {
      if (this.state.canScroll)
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
          await this.getRepos();
    });
  };

  mapToCards = () => {
    const { data } = this.state;

    if (data.length > 0) {
      const list = data.map((item, index) => {
        return (
          <Row
            key={index}
            avatar={item.owner.avatar_url}
            userName={item.owner.login}
            title={item.name}
            description={item.description}
            stars={item.stargazers_count}
            issues={item.open_issues_count}
            creationDate={item.updated_at}
          />
        );
      });
      if (list.length > 0) {
        return (
          <div id="repos-list" className="container">
            {list}
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  render() {
    return this.mapToCards();
  }
}

export default CardsList;
