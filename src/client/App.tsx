import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookDetail from './views/BookDetail';
import Books from './views/Books';
import Home from './views/Home';


const App = (props: AppProps) => {



	return (
		<BrowserRouter>
			<Navbar />

			<Routes>

				<Route path='/' element={<Home />}></Route>
				<Route path='/books' element={<Books />}></Route>
				<Route path='/books/:id' element={<BookDetail />}></Route>





			</Routes>




		</BrowserRouter>
	);
};

interface AppProps { }



export default App;
