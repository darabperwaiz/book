import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../Book/Book";
import style from "./bookList.module.css";
import Filter from "../Filter/Filter";

const BookLists = () => {
const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [filtred, setFiltered] = useState([]);

  // Fetch All Books
  useEffect(() => {
    const fetchBook = async () => {
        setLoading(true)
      const res = await axios.get(
        "https://d1krvzwx5oquy1.cloudfront.net/books.json"
      );
      setBooks(res.data);
      setLoading(false)
    };

    fetchBook();
  }, []);

  // Filter book based on Genre and Author
  useEffect(() => {
    const filtred = books.filter((book, index) => {
      if ((!genre || genre.length === 0) && (!author || author === "")) {
        return books;
      } else {
        return (
          (!genre || book.volumeInfo?.categories?.includes(genre)) &&
          (!author || book.volumeInfo.authors[0] === author)
        );
      }
    });
    // console.log("Filtered: ",filtred)
    setFiltered(filtred);
  }, [books, genre, author]);

  if(loading) {
    return 'Loading...'
  }

  return (
    
    <div className={style.container}>
      {/* Filter Component */}
      <Filter setAuthor={setAuthor} setGenre={setGenre} genre={genre} />

      {/* Conditional Rendering */}
      {filtred.length !== 0 ? (
        <div className={style.books}>
          {filtred.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      ) : (
        <div className={style.errorMsg}>
          <p>Book not Found!.</p>
        </div>
      )}
    </div>
  );
};

export default BookLists;
