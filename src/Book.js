import propTypes from 'prop-types'
import React from 'react'
import * as BooksAPI from './BooksAPI'


function Book (props)  {
        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.Book.imageLinks?.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value = {props.Book.shelf} onChange={event => BooksAPI.update(props.Book, event.target.value).then(props.updateBookList)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{props.Book.title}</div>
                    <div className="book-authors">{props.Book.authors}</div>
                </div>
        )
    }

export default Book
