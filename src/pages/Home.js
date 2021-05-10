import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Header backgroundImage="https://images.unsplash.com/photo-1526488807855-309186804587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80">
        <h1>Dylan Jacob</h1>
        <h2>Front End Web Developer</h2>
      </Header>
    </div>
  );
}

export default Home;