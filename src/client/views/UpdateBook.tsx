import React, { useEffect, useState } from 'react';
import { Categories } from '../client_types';

const UpdateBook = () => {

    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPrice, setBookPrice] = useState<number>(null)

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>()
    const [categories, setCategories] = useState<Categories[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)


    useEffect(() => {

        //API 1 - set book
        //API 2 - categories

    }, [])






    return <div>
        <h1 className="display-3 m-3 text-center"> Update Book </h1>

    </div>;
};

export default UpdateBook;
