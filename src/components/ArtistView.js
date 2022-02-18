import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

const ArtistView = () => {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView