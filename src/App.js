import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: [], //List of all the books on the shelf
    queriedBooks: [] //List of all the books returned by search
  }

  componentDidMount(){
    this.getAllBooks();
  }

  //Fetch the list of books from server based on the input in search bar.
  updateSearch(query) {
    query = query.trim();
    //Search only if the input has a character.
    if (query) {
      BooksAPI.search(query).then((queriedBooks) => {
        //If matching books are found
        if (queriedBooks.length > 0) {
          queriedBooks = queriedBooks
            .filter(queriedBook => queriedBook.imageLinks !== undefined) //Remove any books which does not have imageLinks
            .map(queriedBook => {
              //Since the queriedBook does not have any 'shelf', add the `shelf` based on `books` variable
              queriedBook.shelf = "none";
              this.state.books.forEach(bookOnShelf => {
                //If the queriedBook is already on shelf
                if (queriedBook.id === bookOnShelf.id) {
                  queriedBook.shelf = bookOnShelf.shelf;
                }
              });

              return queriedBook;
            });

          this.setState({queriedBooks});
        } else {
          //If no books matched the criteria
          this.setState({queriedBooks: []});
        }
      })
    } else {
      //If the input is blank spaces or empty
      this.setState({queriedBooks: []});
    }
  }

  //GET all the books from server, and set the `books` variable
  getAllBooks(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  //Update the `shelf` of the book, and update `books` and `queriedBooks` variables
  updateShelfValue(book, shelfValue) {
    BooksAPI.update(book, shelfValue).then((updated) => {
      //After the update, GET all the books.
      this.getAllBooks();

      //After the update, change the `queriedBooks` variable if we are on search page
      if (this.state.queriedBooks.length > 0) {
        const queriedBooks = this.state.queriedBooks.map(queriedBook => {
          if (queriedBook.id === book.id) {
            queriedBook.shelf = shelfValue;
          }
          return queriedBook;
        })
        this.setState({queriedBooks});
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render = {() => (
          <BooksList books = {this.state.books} 
                     updateShelfValue={(book, shelfValue) => this.updateShelfValue(book, shelfValue)} />
        )} />
        <Route path="/search" render = {() => (
          <SearchBooks updateSearch = {(query) => this.updateSearch(query)}
                       queriedBooks={this.state.queriedBooks}
                       updateShelfValue={(book, shelfValue) => this.updateShelfValue(book, shelfValue)} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
