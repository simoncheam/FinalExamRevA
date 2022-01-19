import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Books } from '../client_types';
import { APIService } from '../services/APIService';

const BookDetail = () => {

    let params = useParams();
    const book_id = params.id
    const nav = useNavigate();
    const [isLoaded, setIsLoaded] = useState<boolean>(false)



    const [book, setBook] = useState<Books>()

    const [bookTitle, setBookTitle] = useState('')
    // const [bookAuthor, setBookAuthor] = useState('')
    // const [bookPrice, setBookPrice] = useState<number>(null)

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>()
    const [categoryName, setCategoryName] = useState<string>('')


    useEffect(() => {

        //API 1 - set book
        //API stuff
        APIService(`/api/books/${book_id} `)
            .then(data => {
                // state stuff
                setBook(data)
                setSelectedCategoryId(data.categoryid)
                console.log(data);
                setIsLoaded(true)

                //API 2 - categories
                APIService(`/api/categories/${book.categoryid} `)
                    .then(data => {
                        setCategoryName(data.name)


                    })
                    .catch(e => {
                        console.log(e)
                    })


            })
            .catch(e => {
                console.log(e)
            })
    }, [isLoaded])

    if (!book || !categoryName) { return <> Loading...</> }



    return <div>

        <h1 className="display-3 m-3 text-center"> Book Detail </h1>
        <div className="row justify-content-center m-2">
            <div className="col-md-6">
                <div className="card shadow m-3 p-3">
                    <h1>{book.title}</h1>
                    <div className="card-body">
                        <h5 className="card-title"> 🏷{categoryName} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: {book.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}</h6>
                        <p className="card-text">By: {book.author}</p>
                        <button onClick={() => nav(-1)} className="row btn btn-primary m-2">Go Back </button>
                        <Link to={`/books/${book.id}/update`} className="row btn btn-warning m-2">Edit </Link>
                    </div>
                </div>
            </div>
        </div>



    </div>;
};

export default BookDetail;
