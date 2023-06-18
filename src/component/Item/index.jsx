import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

export default class index extends Component {

    static propTypes = {

    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm("Are you sure you want to delete")) {
                this.props.deleteBook(id)
            }
        }
    }



    render() {
        const { id, name, author, publisher } = this.props;
        return (
            <tr >
                <td >{id}</td>
                <td>{name}</td>
                <td>{author}</td>
                <td>{publisher}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm btn-delete" onClick={this.handleDelete(id)} >Delete</button>

                </td>
            </tr>
        )
    }
}
