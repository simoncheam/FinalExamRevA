import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <div>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/"> Home </Link>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/register"> Register </Link>

        <Link type="button" className="m-2 btn btn-outline-primary" to="/login"> Login </Link>



    </div>;
};

export default Navbar;
