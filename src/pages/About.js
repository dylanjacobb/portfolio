import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Header backgroundImage="https://images.unsplash.com/photo-1526488807855-309186804587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80">
        <h1>About Me</h1>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Hey I'm Dylan Jacob and I'm currently a student at the UNCC Charlotte Coding Bootcamp. I have basic knowledge in HTML, CSS JavaScript, NodeJS, experss, and MySQL. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
