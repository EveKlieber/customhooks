import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageUseToggle } from './pages/PageUseToogle';
import { PageAbout } from './pages/PageAbout';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>React Custom Hooks</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/use-toggle">Use Toggle</NavLink> |{' '}
			<NavLink to="/about">About</NavLink>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/use-toggle" element={<PageUseToggle />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;
