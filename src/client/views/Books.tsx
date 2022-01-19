import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { BooksJoined } from '../../server/types';
import { APIService } from '../services/APIService';

const Books = () => {

    const nav = useNavigate();

    const [books, setBooks] = useState<BooksJoined[]>([])


    useEffect(() => {

        //API stuff
        APIService(`/api/books `)
            .then(data => {
                data = data[0];
                // state stuff
                setBooks(data)
                console.log(data);
            })
            .catch(e => {
                console.log(e)
            })
    }, [])





    return <div>
        <h1 className="display-3 m-3 text-center"> 📚 Check out all these cool books! </h1>

        {books.map(book => (

            <div key={`book-${book.book_id}`}>
                <div className="row justify-content-center m-2">
                    <div className="col-md-6">
                        <div className="card shadow m-3 p-3">
                            <h1>{book.b_title}</h1>
                            <div className="card-body">
                                <h5 className="card-title"> 🏷 {book.cat_name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Price: {book.b_price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}</h6>
                                <p className="card-text">By: {book.b_author}</p>
                                <button onClick={() => nav(-1)} className="row btn btn-primary m-2">Go Back </button>
                                <Link to={`/books/${book.book_id}`} className="row btn btn-warning m-2">Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        ))}



    </div>;
};

export default Books;
