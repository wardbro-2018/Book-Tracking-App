import React from 'react'
import { useState, useEffect } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'



import './App.css'
import { Link } from 'react-router-dom'

function SearchBooks(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [SearchResult, setSearchResult] = useState([]);
    // const [BooksOnShelves, setBooksOnShelves]
    useEffect(() => {
        searchTerm && BooksAPI.search(searchTerm).then(x => Array.isArray(x) ? (setSearchResult(x)) : (setSearchResult([])))
    }, [searchTerm])

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'><button className="close-search" ></button></Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input value={searchTerm} type="text" placeholder="Search by title or author" onChange={(event => setSearchTerm(event.target.value))} />

                </div>
            </div>
            <div className="search-books-results">
                <BookShelf updateBookList={props.updateBookList} title='Search Results' Books={SearchResult.map(x=>props.BookList.find(b=>b.id == x.id) || x)} />
            </div>
        </div>
    )
}

export default SearchBooks
