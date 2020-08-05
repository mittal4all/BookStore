import React, { useState, useEffect } from "react";
import FormPage from "./FormPage";
function Addcourse() {
  const [books, setBookAr] = useState([]);
  const [Authorname, setAuthorname] = useState("");
  const [Bookname, setBookname] = useState("");
  const [Price, setPrice] = useState("");

  function addCourse(e) {
    e.preventDefault();
    setBookAr([...books, { Authorname, Bookname, Price }]);
    setAuthorname("");
    setBookname("");
    setPrice("");
  }
  useEffect(() => {
    const booksArr = JSON.parse(localStorage.getItem("booksData"));
    if (booksArr) {
      setBookAr(booksArr);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("booksData", JSON.stringify(books));
  }, [books]);
  return (
    <div>
      <FormPage
        addCourse={addCourse}
        Authorname={Authorname}
        setAuthorname={setAuthorname}
        Bookname={Bookname}
        setBookname={setBookname}
        Price={Price}
        setPrice={setPrice}
      />
    </div>
  );
}

export default Addcourse;
