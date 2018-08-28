import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Header from "./components/Header";
import Post from "./components/Post";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <div>
            <Post
              nickname="User a"
              avatar="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png"
              caption="yo-ho!"
              image="https://tokyo-kitchen.icook.network/uploads/step/cover/906918/large_e52fd3af7e510a97.jpg"
            />
            <Post
              nickname="User b"
              avatar="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportfemale-512.png"
              caption="where are my shrimps"
              image="https://s.zimedia.com.tw/s/Chzn4H-9"
            />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
