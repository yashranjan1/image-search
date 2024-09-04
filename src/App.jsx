import './App.css'
import { HomePage } from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchPage } from './Pages/Search'
import { ImagePage } from './Pages/Image'

function App() {

	return (
		<div className='bg-[url("/background.jpg")] bg-scroll bg-no-repeat bg-cover min-h-screen'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/photo/:id' element={<ImagePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
