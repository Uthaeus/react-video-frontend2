import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import HomepagePostItem from "../components/homepage/homepage-post-item";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log("posts error: ", err));
  }, []);

  return (
    <div className="homepage">
        <div className="homepage-header">
          <h1 className="homepage-title">Welcome, check out some videos</h1>
          <p className="homepage-subtitle">some sort of quote here maybe</p>
          {user && <h3 className="homepage-hello">Hello, <Link to={`/userpage`} className="homepage-username-link">{user.username}</Link></h3>}
        </div>

        <div className="homepage-posts">
            {posts.map((post) => <HomepagePostItem key={post.id} post={post} user={user} />)}
        </div>


    </div>
  );
}

export default Homepage;