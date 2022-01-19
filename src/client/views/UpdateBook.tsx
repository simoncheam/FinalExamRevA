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
    const [bookPrice, setBookPrice] = useState<number>(0)

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




    }, [isLoaded])

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

                                <button onClick={handleSubmitButton} className='btn btn-success mt-2'> Update </button>
                                <button onClick={handleDeleteButton} className='btn btn-danger mt-2'> Delete </button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>




    </div>;
};

export default UpdateBook;
