import React from "react";
import { Jumbotron } from "react-bootstrap";
import Header from "./Header";
function Home() {
  return (
    <div>
      <Header />
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
