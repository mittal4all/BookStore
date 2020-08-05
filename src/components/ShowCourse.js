import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function ShowCourse() {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("booksData"));
    if (data) {
      setBook(data);
    }
  }, []);
  function removeFunction(name) {
    localStorage.setItem(
      "booksData",
      JSON.stringify(books.filter((ele) => ele.Authorname !== name))
    );
    const NewBooksArr = JSON.parse(localStorage.getItem("booksData"));
    setBook(NewBooksArr);
  }
  return (
    <div>
      <Header />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Author Name</th>
            <th>Book Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((ele, index) => {
            return (
              <tr key={index} ele={ele.id}>
                <td>{index + 1}</td>
                <td>{ele.Authorname}</td>
                <td>{ele.Bookname}</td>
                <td>{ele.Price}</td>
                <td>
                  <button
                    onClick={() => {
                      removeFunction(ele.Authorname);
                    }}
                  >
                    Remove
                  </button>{" "}
                  <Link to={`editpage/${index}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowCourse;
