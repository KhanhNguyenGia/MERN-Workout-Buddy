import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar.component';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='pages'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
