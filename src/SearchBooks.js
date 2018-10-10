import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

//Component for search book page
class SearchBooks extends React.Component{
	static propTypes = {
		queriedBooks: PropTypes.array.isRequired,
		updateSearch: PropTypes.func.isRequired,
		updateShelfValue: PropTypes.func.isRequired
	}

	render() {
		let {queriedBooks, updateSearch, updateShelfValue} = this.props;

		return (
			<div className="search-books">
        <div className="search-books-bar">
        	<Link className="close-search" to="/" onClick = {() => updateSearch('')}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"  onChange = {(event) => updateSearch(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
        		queriedBooks.map((book) => (
							<li key={book.id}>
                <Book book = {book} updateShelfValue = {updateShelfValue}/>
              </li>
        		))
        	}
          </ol>
        </div>
      </div>
		)
	}
}

export default SearchBooks;