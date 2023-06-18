import React, { Component } from 'react'
import './index.css';
export default class index extends Component {

    handleAddBook = () => {
        const { ipt1, ipt2, ipt3, ipt4 } = this

        const book = {
            id: ipt1.value, name: ipt2.value, author: ipt3.value, publisher: ipt4.value
        }
        this.props.addBook(book);
        ipt1.value = "";
        ipt2.value = "";
        ipt3.value = "";
        ipt4.value = "";
    }
    render() {
        console.log(this)
        return (

            <div className="card card-primary">
                <div className="card-header text-dark bg-light">
                    <h3 className="card-title">Add new books</h3>
                </div>
                <div className="card-body bg-light">
                    <div className="row">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">Book ID</span>
                                <input ref={(currenNode) => { this.ipt1 = currenNode }} type="text" className="form-control" name="id" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">Book Name</span>
                                <input ref={(currenNode) => { this.ipt2 = currenNode }} type="text" className="form-control" name="name" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">Author</span>
                                <input ref={(currenNode) => { this.ipt3 = currenNode }} type="text" className="form-control" name="author" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">Publisher</span>
                                <input ref={(currenNode) => { this.ipt4 = currenNode }} type="text" className="form-control" name="publisher" />
                            </div>
                        </div>
                    </div>
                    <div className="r-btn">
                        <button className="btn btn-primary btn-add" onClick={this.handleAddBook}>Add</button>
                    </div>

                </div>
            </div >
        )
    }
}
