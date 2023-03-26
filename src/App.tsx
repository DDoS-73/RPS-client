import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import SocketService from './services/SocketService/SocketService';
import { SERVER_URL } from './config';

function App() {
	const connectSocket = () => {
		SocketService.connect(SERVER_URL);
	};

	useEffect(() => {
		connectSocket();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<Game />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
