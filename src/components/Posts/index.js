import React from "react";
import "./Posts.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post";

const Posts = () => {
  return (
    <Query
      query={gql`
        {
          posts(user_id: "a") {
            id
            user {
              nickname
              avatar
            }
            image
            caption
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading Post ...</p>;
        if (error) return <p>Error loading Post ...</p>;
        let posts = data.posts;

        return (
          <div className="Posts">
            {posts.map(post => {
              <Post
                nickname={post.user.nickname}
                avatar={post.user.avatar}
                image={post.image}
                caption={post.caption}
                key={post.id}
              />;
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default Posts;
