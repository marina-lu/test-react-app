import { useCallback, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log(navigator);
	}, []);
	const shareLink = useCallback(() => {
		if (navigator?.share) {
			navigator
				.share({
					title: 'Web Share API',
					description: 'A simple Web Share API demo',
					url: 'https://marina-lu.github.io/test-react-app/',
				})
				.then(() => console.log('Successful share'))
				.catch(error => console.log('Error sharing', error));
		}
	}, []);
	return (
		<>
			<button onClick={shareLink}>Share</button>
		</>
	);
}

export default App;
