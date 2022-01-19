import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { APIService } from '../services/APIService';

const Register = () => {

    const nav = useNavigate();

    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>(null);

    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        APIService(`/auth/register`, 'post', {

            name: userName,
            email: email,
            password: password,
        })
            .then(data => {

                alert('Welcome')
                nav(`/books`)
            })
            .catch(e => {
                console.log(e)
            })
    }





    return <div>
        <h1 className="display-3 m-3 text-center"> Register </h1>




        <main className="container my-5">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header"> Register Today:</div>

                        <div className="card-body">
                            <h1>Complete fields below: </h1>
                            <form className="form-group my-2">
                                <label>name :</label>
                                <input className="form-control" value={userName} />

                                <label>email:</label>
                                <input className="form-control" value={email} />

                                <label>password:</label>
                                <input className="form-control" value={password} />


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>




    </div>;
};

export default Register;
