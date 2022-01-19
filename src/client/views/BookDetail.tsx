import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIService } from '../services/APIService';

const BookDetail = () => {

    let params = useParams();
    const book_id = params.id

    const [books, setBooks] = useState<Books[]>([])

    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPrice, setBookPrice] = useState<number>(null)

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>()




    useEffect(() => {

        //API 1 - set book
        //API stuff
        APIService(`/api/books `)
            .then(data => {
                data = data[0];
                // state stuff
                setBooks(data)

                console.log(data);

                //API 2 - categories


            })
            .catch(e => {
                console.log(e)
            })
    }, [])



    return <div>

        <h1 className="display-3 m-3 text-center"> Book Detail </h1>

    </div>;
};

export default BookDetail;
