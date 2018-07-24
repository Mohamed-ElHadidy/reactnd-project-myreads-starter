import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import Shelf from './Shelf'


class BooksSearch extends Component {

    render() {

        const { books, changeShelf } = this.props

        return (

            <div className="list-books">

                <Header title='MyReads' />

                <div className="list-books-content">
                    <div>

                        <Shelf

                            title="Currently Reading"
                            shelfFilter={books.filter(book => book.shelf === "currentlyReading")}
                            changeShelf={changeShelf}

                        />

                        <Shelf

                            title="Want to Read"
                            shelfFilter={books.filter(book => book.shelf === "wantToRead")}
                            changeShelf={changeShelf}

                        />

                        <Shelf

                            title="Read"
                            shelfFilter={books.filter(book => book.shelf === "read")}
                            changeShelf={changeShelf}

                        />

                        <div className="open-search">

                            <Link
                                to='/search'>
                                Add a book
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default BooksSearch