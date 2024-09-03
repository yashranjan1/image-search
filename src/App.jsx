import './App.css'
import { HomePage } from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchPage } from './Pages/Search'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/search' element={<SearchPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
