import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import { ServiceContext } from './contexts/ServiceContext';
import { gameService, socketService } from './services/services';

function App() {
	const [isConnected, setIsConnected] = useState(false);

	const handleConnection = (res: boolean) => {
		setIsConnected(res);
	};

	useEffect(() => {
		socketService.onConnectionResult(handleConnection);
	}, []);

	return (
		<>
			{isConnected ? (
				<ServiceContext.Provider value={{ gameService, socketService }}>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/:roomID' element={<Game />} />
						</Routes>
					</BrowserRouter>
				</ServiceContext.Provider>
			) : (
				'wait'
			)}
		</>
	);
}

export default App;
