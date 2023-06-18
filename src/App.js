import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import List from './component/List'
import Header from './component/Header'
export default class App extends Component {

  state = {
    bookList: [
      { id: 1, name: 'Wester', author: 'John', publisher: 'BBC' },
      { id: 2, name: 'Easter', author: 'James', publisher: 'SBS' },
      { id: 3, name: 'Northen', author: 'Jonne', publisher: 'CNN' },

    ],
  };

  addBook = (book) => {
    const { bookList } = this.state;

    if (bookList.find((bookObj) => bookObj.id == book.id)) {
      alert('Book ID already exists');
      return;
    }

    const newBookList = [...bookList, book];
    this.setState({ bookList: newBookList });
  }




  deleteBook = (id) => {
    const { bookList } = this.state;
    const newBookList = bookList.filter((book) => {
      return (book.id !== id)
    })

    this.setState({ bookList: newBookList });
  };



  render() {
    const { bookList } = this.state;
    return (
      <div>

        <Header addBook={this.addBook} />


        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>More</th>
            </tr>
          </thead>
          <List bookList={bookList} deleteBook={this.deleteBook} />
        </table>
      </div>
    )
  }
}
