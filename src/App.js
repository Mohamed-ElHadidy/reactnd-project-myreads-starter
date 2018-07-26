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
    searchRes: [],

  }

  componentDidMount() {

    this.getAllBooks()

  }

  getAllBooks = () => BooksAPI.getAll().then((books) => this.setState({ books }))

  changeShelf = (book, shelf) => {

    BooksAPI.update(book, shelf)
    this.getAllBooks()

  }

  updateQuery = (query) => {

    this.setState({ query })
    this.searchOutput(query)

  }

  searchOutput = (query) => {
    if (query !== "") {

      BooksAPI.search(query).then((searchRes) => {

        searchRes.map(bookFromSearch =>
          (this.state.books.map(bookFromShelf =>
            bookFromShelf.id === bookFromSearch.id ?
              bookFromSearch.shelf = bookFromShelf.shelf :
              "")))

        this.setState({ searchRes })

        console.log(searchRes);

      })

    } else {
      this.setState({ searchRes: [] })
    }

  }

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
            output={this.state.searchRes}
            changeShelf={this.changeShelf}
          />

        )} />

      </div>
    )
  }
}

export default BooksApp
