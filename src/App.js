import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
let [searchTerm, setSearchTerm] = useState('')
let [data, setData] = useState([])
let [message, setMessage] = useState('Search for Music!')


useEffect(() => {
    const API_URL = `https://itunes.apple.com/search?term=`
    if (searchTerm) {
    document.title=`${searchTerm} Music`
    const fetchData = async () => {
        const response = await fetch(API_URL + searchTerm)
        const resData = await response.json()
        if(resData.results.length > 0) {
        setData(resData.results)
        } else {
        setMessage('Not Found')
        }
    }
    fetchData()
}
}, [searchTerm])

const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
}

return (
  <div className="App">
    {message}
    
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element= {
            <><SearchBar handleSearch={handleSearch} /><Gallery data={data} /></>
          } />
          <Route path="/album/:id" element= { <AlbumView /> } />
          <Route path="/artist/:id" element={ <ArtistView /> } />
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;