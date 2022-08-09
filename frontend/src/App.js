import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar.component';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
	const { user } = useAuthContext();
	return (
		<div className='App'>
			<NavBar />
			<div className='pages'>
				<Routes>
					<Route path='/' element={user ? <Home /> : <Navigate to='/login' replace />}></Route>
					<Route path='/login' element={user ? <Navigate to='/' replace /> : <LogIn />}></Route>
					<Route path='/signup' element={user ? <Navigate to='/' replace /> : <SignUp />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
