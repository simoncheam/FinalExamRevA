import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { APIService } from '../services/APIService';

const PrivateWrapper = () => {

    const [isAuthed, setIsAuthed] = useState(false)
    const nav = useNavigate();


    useEffect(() => {

        //API stuff
        APIService(`/auth/validate`)
            .then(res => {

                const tokenStatus = res.message === 'valid'

                setIsAuthed(tokenStatus);
            })
            .catch(error => {
                console.log(error);

            });


    }, [])




    return <div>
        <h1 className="display-3 m-3 text-center"> Private Wrapper </h1>

    </div>;
};

export default PrivateWrapper;


