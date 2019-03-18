import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

class Reddit extends React.Component {
  state = {
    posts: [],
    next: "",
    prev: ""
  };

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res => {
      const posts = res.data.results.map(obj => {
        return obj;
      });
      const next = res.data.next;
      const prev = res.data.previous;
      this.setState({ posts, next, prev });
    });
  }

  onNextClick = () => {
    axios.get(this.state.next).then(res => {
      const posts = res.data.results.map(obj => {
        return obj;
      });
      const next = res.data.next;
      const prev = res.data.previous;
      this.setState({ posts, next, prev });
    });
  };

  onPrevClick = () => {
    axios.get(this.state.prev).then(res => {
      const posts = res.data.results.map(obj => {
        return obj;
      });
      const next = res.data.next;
      const prev = res.data.previous;
      this.setState({ posts, next, prev });
    });
  };

  render() {
    return (
      <div>
        <nav className="nav">
          <button className="menuBtn">StarWars Characters</button>
        </nav>
        <ul className="posts">
          {this.state.posts.map(post => (
            <li key={post.created}>
              <div className="post">
                <h3>{post.name}</h3>
                <p>Birthyear: {post.birth_year}</p>
                <p>Gender: {post.gender}</p>
                <p>Eye Color: {post.eye_color}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button className="btn" onClick={this.onPrevClick}>
            Prev
          </button>
          <button className="btn" onClick={this.onNextClick}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Reddit />, document.getElementById("root"));
