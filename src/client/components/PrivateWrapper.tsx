import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { APIService } from '../services/APIService';

const PrivateWrapper = ({ children }: PrivateRouteProps) => {

    const [isAuthed, setIsAuthed] = useState(false)
    const nav = useNavigate();
    const loc = useLocation();



    useEffect(() => {

        //API stuff
        APIService(`/auth/validate`)
            .then(res => {

                const tokenStatus = res.message === 'valid'

                setIsAuthed(tokenStatus);
                console.log({ tokenStatus });
            })
            .catch(error => {
                console.log(error);
                // alert('not authorized, please login')
                // nav('/login')

            });


    }, [])




    return (

        <>

            {children}
            <Outlet />

        </>
    );
};


interface PrivateRouteProps {
    path?: string;
    exact?: boolean;
    children?: React.ReactNode;
}
export default PrivateWrapper;


