import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';

const container = document.getElementById('app');
const root = createRoot(container!);

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={Home}></Route>
			</Routes>
		</BrowserRouter>
	);
};

root.render(<App />);
