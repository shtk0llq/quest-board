import React from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Login from './login';
import NotFound from './notfound';

const container: HTMLElement | null = document.getElementById('app');
const root: Root = createRoot(container!);

function App(): React.JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

root.render(<App />);
