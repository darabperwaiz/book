import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from './detail.module.css'

const Detail = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(
        "https://d1krvzwx5oquy1.cloudfront.net/books.json"
      );
      const singleBook = res.data.filter((singleBook) => singleBook.id == id);
    //   setTitle(...singleBook)
      setBook(...singleBook);
    };
    fetchBook();
  }, []);
  console.log(book)
  return (
    <div className={style.mainContainer}>
        <div className={style.headSection}>
           <div className={style.backArrow}>
            <Link to='/'>
           <i class="fa-solid fa-arrow-left"></i>
           </Link>
           </div>
           <div className={style.breadCrumb}>
            <Link to='/'>
            <span>Home</span>
            <i class="fa-solid fa-house"></i>
            </Link>
            <span>//</span> <span>{book.volumeInfo?.title}</span>
           </div>
        </div>
      {/* {book.map((item, index) => ( */}
         {/* <p >{item.volumeInfo.title}</p> */}
        <div className={style.container}>
          <div className={style.top_Section}>
            {book ? 
            
            <>
                <div className={style.imgWrapper}>
            <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="" />
            </div>
            <div className={style.overview}>
              <p>{book.volumeInfo?.authors[0]}</p>
              <p>{book.volumeInfo?.title}</p>
              <p>
                {book.volumeInfo?.ratingsCount ? (
                  <i className="fa-solid fa-star"></i>
                ) : (
                  ""
                )}{" "}
                {book?.volumeInfo?.ratingsCount}
              </p>
              <p>Page Count: {book?.volumeInfo?.pageCount}</p>
              <p>Language: {book.volumeInfo?.language}</p>
              <p>Publisher: {book.volumeInfo?.publisher}</p>
              <p>Publish Date: {book.volumeInfo?.publishedDate}</p>
              <Link className={style.btn} to={book.volumeInfo?.previewLink}>Preview </Link>
            </div>
            </>

            :
            ''
            
            }
        
          </div>
          <div className={style.bottom_Section}>
            <p>DESCRIPTION</p>
            <p>{book.volumeInfo?.description}</p>
          </div>
        </div>
    {/* //   ))} */}

    </div>
  );
};

export default Detail;
