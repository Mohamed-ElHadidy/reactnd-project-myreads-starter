import React from 'react'
import * as BooksAPI from './BooksAPI'

import { Route } from 'react-router-dom'

import './App.css'

import BooksSearch from './BooksSearch'
import BooksList from './BooksList'



class BooksApp extends React.Component {
  state = {

    books: [],
    query: '',

  }

  componentDidMount() {

    this.getAllBooks()

  }

  getAllBooks = () => BooksAPI.getAll().then((books) => this.setState({ books }))

  changeShelf = (book, shelf) => {

    BooksAPI.update(book, shelf)
    this.getAllBooks()

  }

  updateQuery = (query) => this.setState({ query })


  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (

          <BooksList

            books={this.state.books}
            changeShelf={this.changeShelf}

          />

        )} />

        <Route path='/search' render={() => (

          <BooksSearch

            query={this.state.query}
            updateQuery={this.updateQuery}

          />

        )} />

      </div>
    )
  }
}

export default BooksApp
