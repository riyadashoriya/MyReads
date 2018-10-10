import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

//Component for book shelf page
class Books extends React.Component{
	static propTypes = {
		books: PropTypes.array.isRequired,
		updateShelfValue: PropTypes.func.isRequired
	}

	render() {
		const {books, updateShelfValue} = this.props
		let currentlyReadingBooks = books.filter(b => b.shelf === "currentlyReading")
		let readBooks = books.filter(b => b.shelf === "read")
		let wantToReadBooks = books.filter(b => b.shelf === "wantToRead")

		return (
			<div className="list-books">
      	<div className="list-books-title">
          <h1>MyReads</h1>
        </div>
				<div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
              	<ol className="books-grid">
                {
              		currentlyReadingBooks.map((book) => (
										<li key={book.id}>
	                    <Book book = {book} updateShelfValue = {updateShelfValue}/>
	                  </li>
              		))
              	}
                </ol>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
	              		wantToReadBooks.map((book) => (
											<li key={book.id}>
		                    <Book book = {book} updateShelfValue = {updateShelfValue}/>
		                  </li>
	              		))
	              	}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
	              		readBooks.map((book) => (
											<li key={book.id}>
		                    <Book book = {book} updateShelfValue = {updateShelfValue}/>
		                  </li>
	              		))
	              	}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" className="add-contact">Add a Book</Link>
          </div>
 				</div> 
      </div>
		)
	}
}

export default Books;
