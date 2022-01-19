import React, { useState } from 'react';
import { BooksJoined } from '../../server/types';

const Books = () => {

    const [book, setBook] = useState<BooksJoined[]>([])





    return <div>
        <h1 className="display-3 m-3 text-center"> Books </h1>

    </div>;
};

export default Books;
