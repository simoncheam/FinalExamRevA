import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookDetail from './views/BookDetail';
import Books from './views/Books';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';


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





			</Routes>




		</BrowserRouter>
	);
};

interface AppProps { }



export default App;
