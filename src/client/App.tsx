import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateWrapper from './components/PrivateWrapper';
import BookDetail from './views/BookDetail';
import Books from './views/Books';
import Home from './views/Home';
import Login from './views/Login';
import NewBook from './views/NewBook';
import Register from './views/Register';
import UpdateBook from './views/UpdateBook';


const App = (props: AppProps) => {



	return (
		<BrowserRouter>
			<Navbar />

			<Routes>

				<Route path='/' element={<Home />}></Route>
				<Route path='/register' element={<Register />}></Route>
				<Route path='/login' element={<Login />}></Route>

				<Route path='/books' element={<Books />}></Route>
				<Route path='/books/:id' element={<BookDetail />}></Route>




				<Route path='/' element={<PrivateWrapper />}>

					<Route path='books/new' element={<NewBook />} />
					<Route path='books/:id/update' element={<UpdateBook />} />

				</Route>

			</Routes>




		</BrowserRouter>
	);
};

interface AppProps { }



export default App;
