
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';

function App() {
  return (
    <>
	<div className='app'>
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/product'>Product</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</nav>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/product' element={<ProductPage />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	</div>
  	</>
  );
}

export default App;


