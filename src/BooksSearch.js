import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';

class BooksSearch extends Component {
    render() {

        const { output, query, updateQuery, changeShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(e) => updateQuery(e.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {
                            !output.error ?
                                output.map(output => (

                                    <li key={output.id}>
                                        <Book
                                            book={output}
                                            changeShelf={changeShelf}
                                        />
                                    </li>
                                )) : <h1>Not Found</h1>
                        }

                    </ol>
                </div>
            </div>
        )
    }
}


export default BooksSearch

        /*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
        */