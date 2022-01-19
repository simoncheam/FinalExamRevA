import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Categories } from '../client_types';
import { APIService } from '../services/APIService';

const NewBook = () => {

    const nav = useNavigate();


    //state

    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPrice, setBookPrice] = useState<number>(0)

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>()
    const [categories, setCategories] = useState<Categories[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)


    useEffect(() => {


        //API 1 - set book - fetch book details

        APIService(`/api/categories `)
            .then(data => {
                setCategories(data)
                console.log(data);
                setIsLoaded(true)


            })
            .catch(e => {
                console.log(e)
            })






    }, [isLoaded])





    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!bookTitle || !bookAuthor || !bookPrice || !selectedCategoryId) {
            return alert('fill out everything')
        }

        APIService(`/api/books`, 'POST', {

            title: bookTitle,
            author: bookAuthor,
            price: bookPrice,
            categoryid: selectedCategoryId
        })
            .then(data => {
                alert('Book Created!')
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


    if (!categories) { return <> Loading...</> }

    return <div>
        <h1 className="display-3 m-3 text-center"> Create New Book </h1>

        <main className="container my-5">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header"> Got a book to add to the store?:</div>

                        <div className="card-body">
                            <h1>Complete fields below: </h1>
                            <form className="form-group my-2">


                                <label>Select Category :</label>

                                <select value={selectedCategoryId} onChange={handleCategoryIdSelectUpdate} className='form-control'>

                                    <option value={0} >Select a Category </option>


                                    {categories.map(cat => (


                                        <option key={`category-${cat.id}-${cat.name}`} value={cat.id}>
                                            {cat.name}
                                        </option>

                                    ))}
                                </select>



                                <label>Title :</label>
                                <input className="form-control m-2"
                                    value={bookTitle}
                                    placeholder={bookTitle}
                                    type='text'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookTitle(e.target.value)}
                                />

                                <label>Author:</label>

                                <input className="form-control m-2"
                                    value={bookAuthor}
                                    placeholder={bookAuthor}
                                    type='text'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookAuthor(e.target.value)}
                                />

                                <label>Price:</label>

                                <input className="form-control m-2"
                                    value={bookPrice}
                                    // placeholder={bookPrice}
                                    type='number'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookPrice(Number(e.target.value))}


                                />

                                <button onClick={handleSubmitButton} className='btn btn-success mt-2'> Add Book! </button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>







    </div>;
};

export default NewBook;
