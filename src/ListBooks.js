import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
 class ListBooks extends Component {
     static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }
     render() {
        return (
          const { books, onChangeBookShelf } = this.props;
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                      <BookShelf title="Currently Reading" books={ books.filter((book)=>book.shelf==='currentlyReading') } onChangeBookShelf={ onChangeBookShelf }  />
                      <BookShelf title="Want to Read" books={ books.filter((book)=>book.shelf==='wantToRead') } onChangeBookShelf={ onChangeBookShelf } />
                      <BookShelf title="Read" books={ books.filter((book)=>book.shelf==='read') } onChangeBookShelf={ onChangeBookShelf } />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}
 export default ListBooks;
