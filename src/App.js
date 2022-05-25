import React from 'react'
import SearchBooks from './SearchBooks'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'



/**
 * TODO: Instead of using this state variable to keep track of which page
 * we're on, use the URL in the browser's address bar. This will ensure that
 * users can use the browser's back and forward buttons to navigate between
 * pages, as well as provide a good URL they can bookmark and share.
 */
function BooksApp() {

  const [BookList, setBookList] = useState([]);
  
  function updateBookList() { BooksAPI.getAll().then(BooksList => setBookList(BooksList)) }

  useEffect(() => {
    updateBookList()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" exact element={<BookShelves updateBookList={updateBookList} BookList={BookList}/>}></Route>
          <Route path="/search" element={<SearchBooks updateBookList={updateBookList} BookList={BookList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default BooksApp


