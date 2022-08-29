import './App.css';
import True from './fontTrue.css';
import logo from './logo.png';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<meta property="og:image" content="https://app.nerveglobal.com/logo192.png" />
				<img src={logo} className="App-logo" alt="logo" />
				<p style={{ fontFamily: 'True' }}>Welcome to Nerve Global</p>
				<a style={{ fontSize: '20px' }}>If you are not redirected automatically,</a>
				<a style={{ fontSize: '30px' }} className="App-link" href="https://www.nerveglobal.com">
					click here
				</a>
			</header>
		</div>
	);
}

export default App;
