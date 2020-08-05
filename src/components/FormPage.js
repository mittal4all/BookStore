import React from "react";
import { Form, Container } from "react-bootstrap";
import Header from "./Header";
function FormPage(props) {
  return (
    <div>
      <Header />
      <h1>Add courses</h1>
      <hr></hr>
      <Container fluid>
        <Form onSubmit={props.addCourse}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              value={props.Authorname}
              required
              onChange={(e) => {
                props.setAuthorname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              value={props.Bookname}
              required
              onChange={(e) => {
                props.setBookname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Book Price</Form.Label>
            <Form.Control
              type="text"
              value={props.Price}
              required
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  props.setPrice(e.target.value);
                }
              }}
            />
          </Form.Group>
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    </div>
  );
}

export default FormPage;
