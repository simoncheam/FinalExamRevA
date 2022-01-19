import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div>
        <h1 className="display-3 m-3 text-center"> Home Page </h1>


        <div className="row justify-content-center m-2">
            <div className="col-md-6">
                <h1>Welcome to the Bookstore</h1>
                <div className="card shadow">
                    <div className="card-body row m-5 justify-content-center">
                        {/* <h5 className="card-title">Card title</h5> */}
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <Link to={`/books`} className="row btn btn-primary m-2">Books </Link>
                        <Link to={`/register`} className="row btn btn-warning m-2">Register </Link>
                        <Link to={`/login`} className="row btn btn-success m-2">Login </Link>


                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Home;
