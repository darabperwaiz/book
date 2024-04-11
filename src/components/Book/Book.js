import React from 'react'
import style from './book.module.css'
import { Link } from "react-router-dom"

const Book = ({book}) => {
  return (
    <div className={style.book}>
      <div className={style.book_wrapper}>
        <div className={style.imgWrapper}>
        <Link to={`/book/${book.id}`}>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
        </Link>
        </div>
        <div className={style.bookInfo}>
          <Link to={`/book/${book.id}`}>
            <p>{book.volumeInfo.title}</p>
            </Link>
            <p>{book.volumeInfo.authors[0]}</p>
            <p>{book.volumeInfo.ratingsCount ? <i className="fa-solid fa-star"></i> : ''} {book.volumeInfo.ratingsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Book
