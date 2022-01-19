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

        if (!userName || !email || !password) {
            return alert('🚨 fill out all fields')
        }

        APIService(`/auth/register`, 'POST', {

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
                        <div className="card-header"> Create your account get started today:</div>

                        <div className="card-body">
                            <h1>Complete fields below: </h1>
                            <form className="form-group my-2">
                                <label>Username :</label>
                                <input className="form-control m-2"
                                    value={userName}
                                    placeholder='username'
                                    type='text'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                                />

                                <label>email:</label>

                                <input className="form-control m-2"
                                    value={email}
                                    placeholder='your email'
                                    type='text'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />

                                <label>password:</label>

                                <input className="form-control m-2"
                                    value={password}
                                    placeholder='password'
                                    type='password'
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}


                                />

                                <button onClick={handleSubmitButton} className='btn btn-success mt-2'> Register Now</button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>




    </div>;
};

export default Register;
