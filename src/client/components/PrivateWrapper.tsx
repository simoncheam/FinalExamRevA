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
            })
            .catch(error => {
                console.log(error);
                alert('not authorized, please login')
                nav('/login')

            });


    }, [loc.pathname])




    return <div>
        <h1 className="display-3 m-3 text-center"> Private Wrapper </h1>

        {children}
        <Outlet />

    </div>;
};


interface PrivateRouteProps {
    path?: string;
    exact?: boolean;
    children?: React.ReactNode;
}
export default PrivateWrapper;


