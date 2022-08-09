import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar.component';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<div className='pages'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<LogIn />}></Route>
					<Route path='/signup' element={<SignUp />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
