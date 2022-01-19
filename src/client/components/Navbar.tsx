import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APIService } from '../services/APIService';

const Navbar = () => {
    const loc = useLocation();


    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isAuthed, setIsAuthed] = useState(false)


    // useEffect(() => {

    //     APIService('/auth/validate')
    //         .then(res => {

    //             const tokenStatus = res.message === 'valid';
    //             console.log({ tokenStatus });
    //             setIsAuthed(tokenStatus)

    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })

    // }, [])





    return <div>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/"> Home </Link>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/register"> Register </Link>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/login"> Login </Link>

        <Link type="button" className="m-2 btn btn-outline-success" to="/books/new"> Create New Book </Link>




    </div>;
};

export default Navbar;
