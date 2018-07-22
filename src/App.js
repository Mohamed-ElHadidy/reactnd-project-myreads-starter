import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BooksSearch from './BooksSearch'
import BooksList from './BooksList'

class BooksApp extends React.Component {
  state = {
    
    

  }

  render() {
    return (
      <div className="app">
        
          <BooksSearch />
        
          <BooksList />
        
      </div>
    )
  }
}

export default BooksApp
