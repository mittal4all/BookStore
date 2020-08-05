import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import Header from "./Header";
import { useHistory, useParams } from "react-router-dom";
function EditPage() {
  let history = useHistory();
  const { id } = useParams();
  const [Authorname, setAuthorname] = useState("");
  const [Bookname, setBookname] = useState("");
  const [Price, setPrice] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("booksData"));
    setAuthorname(data[id].Authorname);
    setBookname(data[id].Bookname);
    setPrice(data[id].Price);
  }, []);

  function addCourse(e) {
    e.preventDefault();
    const data1 = JSON.parse(localStorage.getItem("booksData"));
    data1[id].Authorname = Authorname;
    data1[id].Bookname = Bookname;
    data1[id].Price = Price;
    localStorage.setItem("booksData", JSON.stringify(data1));
    setAuthorname("");
    setBookname("");
    setPrice("");
    history.push("/ShowCourse");
  }

  return (
    <div>
      <Header />
      <h1>Edit courses</h1>
      <hr></hr>
      <Container fluid>
        <Form onSubmit={addCourse}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              value={Authorname}
              required
              onChange={(e) => {
                setAuthorname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              value={Bookname}
              required
              onChange={(e) => {
                setBookname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Book Price</Form.Label>
            <Form.Control
              type="text"
              value={Price}
              required
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setPrice(e.target.value);
                }
              }}
            />
          </Form.Group>
          <input type="submit" value="Update" />
        </Form>
      </Container>
    </div>
  );
}

export default EditPage;
