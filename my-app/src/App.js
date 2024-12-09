import logo from './logo.svg';
import './App.css';

function App() {
	// Императивный стиль: вычисление текущего года
	const currentYear = new Date().getFullYear();

	// Декларативный стиль: описание того, что должно отображаться на странице
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>Current Year: {currentYear}</p>
			</header>
		</div>
	);
}

export default App;
