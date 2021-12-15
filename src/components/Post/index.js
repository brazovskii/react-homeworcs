import React, { Component, useEffect, useState } from "react";


// class Post extends Component {
//   state = {
//     posts: []
//   }
//   componentDidMount = () => {
//     this.getPosts();
//   };

//   getPosts = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };
//   render() {

//     return (<div>{posts.map(item=>{
//          return (<div key={item.id}>{<h2>{item.title}<h2/>
//           <span>{item.body}</span>}

//                   <div/>)})}
//       </div>)
//   }
// }

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <span>{item.body}</span>
            <img src={item.thumbnailUrl }></img>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
