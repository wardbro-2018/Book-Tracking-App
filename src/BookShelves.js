import React from 'react'
import BookShelf from './BookShelf'
import { Link} from 'react-router-dom'

function BookShelves(props) {
  
    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf updateBookList={props.updateBookList} title='Currently Reading' Books={props.BookList.filter(x => x.shelf == 'currentlyReading')} />
          <BookShelf updateBookList={props.updateBookList} title='Want to Read' Books={props.BookList.filter(x => x.shelf == 'wantToRead')} />
          <BookShelf updateBookList={props.updateBookList} title='Read' Books={props.BookList.filter(x => x.shelf == 'read')} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> <button>Add a book</button></Link>
      </div>
    </div>
  }

  export default BookShelves