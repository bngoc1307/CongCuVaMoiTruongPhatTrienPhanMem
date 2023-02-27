
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import SumTwoInteger from './pages/SumTwoInteger';
import SolveQuadraticEquation from './pages/SolveQuadraticEquation';
import SubtractTwoInteger from './pages/SubtractTwoInteger';

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
				<li>
					<Link to='/sumtwointeger'>Sum</Link>
				</li>
				<li>
					<Link to='/subtracttwointeger'>Subtract</Link>
				</li>
				<li>
					<Link to='/solvequadraticequation'>Solve Quadratic Equation</Link>
				</li>
			</ul>
		</nav>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/product' element={<ProductPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/sumtwointeger' element={<SumTwoInteger />} />
			<Route path='/subtracttwointeger' element={<SubtractTwoInteger />} />
			<Route path='/solvequadraticequation' element={<SolveQuadraticEquation />} />
		</Routes>
	</div>
  	</>
  );
}

export default App;


