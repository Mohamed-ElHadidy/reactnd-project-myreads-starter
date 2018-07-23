import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import Shelf from './Shelf'


class BooksSearch extends Component {
    render() {
        return (
            <div className="list-books">

                <Header title='MyReads' />

                <div className="list-books-content">
                    <div>

                        <Shelf

                            title="Currently Reading"

                        />


                        <Shelf

                            title="Want to Read"

                        />

                        <Shelf

                            title="Read"

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