import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Books, Categories } from '../client_types';
import { APIService } from '../services/APIService';

const UpdateBook = () => {

    const nav = useNavigate();

    let params = useParams();
    const book_id = params.id

    const [book, setBook] = useState<Books>()

    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPrice, setBookPrice] = useState<number>(null)

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>()
    const [categories, setCategories] = useState<Categories[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)


    useEffect(() => {


        //API 1 - set book - fetch book details
        APIService(`/api/books/${book_id} `)
            .then((data: Books) => {
                // state stuff
                setBook(data)

                //set auto fill TAPC
                setBookTitle(data.title)
                setBookAuthor(data.author)
                setBookPrice(data.price)
                setSelectedCategoryId(data.categoryid)

                console.log(data);
                setIsLoaded(true)

                //API 2 - categories
                APIService(`/api/categories `)
                    .then(data => {
                        setCategories(data)

                    })
                    .catch(e => {
                        console.log(e)
                    })


            })
            .catch(e => {
                console.log(e)
            })




    }, [])

    if (!book || !categories) { return <> Loading...</> }


    const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        if (confirm('are you sure?')) {

            APIService(`/api/books/${book_id}`, 'DELETE')
                .then(data => {

                    alert('Deleted book!')

                    nav(`/books`)

                })
                .catch(e => {
                    console.log(e)
                })
        }


    }

    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        APIService(`/api/books/${book_id}`, 'PUT', {

            title: bookTitle,
            author: bookAuthor,
            price: bookPrice,
            categoryid: selectedCategoryId
        })
            .then(data => {
                alert('Thanks for the update')
                nav(`/books`)
            })
            .catch(e => {
                console.log(e)
            })
    }




    const handleCategoryIdSelectUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setSelectedCategoryId(Number(e.target.value))
    }








    return <div>
        <h1 className="display-3 m-3 text-center"> Update Book </h1>


        <main className="container my-5">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header"> Got changes to make?:</div>

                        <div className="card-body">
                            <h1>Complete updates below: </h1>
                            <form className="form-group my-2">
                                <label>Title :</label>
                                <input className="form-control m-2"
                                    value={bookTitle}
                                    placeholder='username'
                                    type='text'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                                />

                                <label>email:</label>

                                <input className="form-control m-2"
                                    value={email}
                                    placeholder='your email'
                                    type='text'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />

                                <label>password:</label>

                                <input className="form-control m-2"
                                    value={password}
                                    placeholder='password'
                                    type='password'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}


                                />

                                <button onClick={handleSubmitButton} className='btn btn-success mt-2'> Register Now</button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>




    </div>;
};

export default UpdateBook;
