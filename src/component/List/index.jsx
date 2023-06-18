import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Item from '../Item'

export default class index extends Component {

    render() {

        const { bookList, deleteBook } = this.props;
        return (
            <tbody>
                {bookList.map(book => {
                    return <Item key={book.id} {...book} deleteBook={deleteBook} />
                })}
            </tbody>
        )
    }
}
